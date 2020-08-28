﻿/*
 *
 *  Copyright (c) 2012-2015
 *  name : Francis Banyikwa
 *  email: mhogomchungu@gmail.com
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "mountinfo.h"
#include "utility.h"
#include "siritask.h"
#include "task.hpp"
#include "win.h"
#include "settings.h"
#include "engines.h"
#include "crypto.h"

#include <QMetaObject>
#include <QtGlobal>

#include <QFile>

#include <vector>
#include <utility>

static QString _getFileSystem( const QString& dev,const QString& fs )
{
	/*
	 * We expect "dev" to have a value that looks like
	 *
	 * securefs@/path/to/cipher/folder
	 *
	 * We get the backend end name now and cipher path will be taken
	 * later on in this source file.
	 */
	auto ss = dev.indexOf( "@" ) ;

	if( ss != -1 ){
		/*
		 * "dev" is in the expected format and all is well
		 */
		return "fuse." + dev.mid( 0,ss ) ;
	}else{
		/*
		 * we will get here if "dev" has only something like "securefs" and
		 * this means we just lost the path to cipher path and this is probably
		 * a backend bug because it didn't set "fsname" fuse option we gave it.
		 */
		for( const auto& it : engines::instance().supportedEngines() ){

			if( it->name() == dev ){
				/*
				 * "dev" has a name of a backend we support, return it.
				 */
				return "fuse." + dev ;
			}
		}
	}
	/*
	 * We have no idea what is in "dev", return the value reported by Qt.
	 */
	return fs ;
}

static volumeInfo::List _qt_volumes()
{
	volumeInfo::List s ;

	for( const auto& it : QStorageInfo::mountedVolumes() ){

		auto dev = engines::engine::encodeMountPath( it.device() ) ;

		auto mp = engines::engine::encodeMountPath( it.rootPath() ) ;

		auto fs = _getFileSystem( dev,it.fileSystemType() ) ;

		auto mode = it.isReadOnly() ? "ro" : "rw" ;

		s.emplace_back( std::move( dev ),std::move( mp ),std::move( fs ),mode ) ;
	}

	return s ;
}

static volumeInfo::List _windows_volumes()
{
	volumeInfo::List s ;

	for( const auto& e : SiriKali::Windows::getMountOptions() ){

		auto fs = "fuse." + e.subtype ;

		auto m = e.subtype + "@" + e.cipherFolder ;

		s.emplace_back( std::move( m ),e.mountPointPath,std::move( fs ),e.mode ) ;
	}

	return s ;
}

static volumeInfo::List _linux_volumes()
{
	volumeInfo::List s ;

	for( const auto& e : utility::split( utility::fileContents( "/proc/self/mountinfo" ) ) ){

		const auto k = utility::split( e,' ' ) ;

		const auto m = k.size() ;

		if( m > 5 ){

			const auto& q = k.at( 5 ) ;

			s.emplace_back( k.at( m - 2 ),k.at( 4 ),k.at( m - 3 ),q.mid( 0,2 ),q ) ;
		}
	}

	return s ;
}

static volumeInfo::List _unlocked_volumes()
{
	auto a = [](){

		if( utility::platformIsLinux() ){

			return _linux_volumes() ;

		}else if( utility::platformIsWindows() ){

			return _windows_volumes() ;
		}else{
			return _qt_volumes() ;
		}
	}() ;

	for( auto&& it : engines::instance().mountInfo( a ) ){

		a.emplace_back( std::move( it ) ) ;
	}

	return a ;
}

mountinfo::mountinfo( QObject * parent,bool e,std::function< void() >&& quit ) :
	m_parent( parent ),
	m_quit( std::move( quit ) ),
	m_announceEvents( e ),
	m_linuxMonitorExit( false ),
	m_oldMountList( _unlocked_volumes() ),
	m_dbusMonitor( [ this ]( const QString& e ){ this->autoMount( e ) ; } ),
	m_folderMountEvents( [ this ]( const QString& e ){ this->autoMount( e ) ; } )
{
	if( utility::platformIsLinux() ){

		this->linuxMonitor() ;

	}else if( utility::platformIsWindows() ){

		this->windowsMonitor() ;
	}else{
		this->qtMonitor() ;
	}
}

mountinfo::~mountinfo()
{
}

static volumeInfo::FsEntry _decode( const engines::engine& engine,volumeInfo::FsEntry e )
{
	auto _decode = []( QString& path,bool set_offset ){

		engines::engine::decodeSpecialCharacters( path ) ;

		if( set_offset ){

			path = path.mid( path.indexOf( '@' ) + 1 ) ;
		}
	} ;

	auto _starts_with = []( const engines::engine& e,const QString& s ){

		for( const auto& it : e.names() ){

			if( s.startsWith( it + "@",Qt::CaseInsensitive ) ){

				return true ;
			}
		}

		return false ;
	} ;

	if( _starts_with( engine,e.cipherPath ) ){

		_decode( e.cipherPath,true ) ;

	}else if( engine.setsCipherPath() ){

		_decode( e.cipherPath,false ) ;
	}else{
		e.cipherPath = crypto::sha256( e.mountPoint ).mid( 0,20 ) ;
	}

	_decode( e.mountPoint,false ) ;

	const auto& n = engine.displayName() ;

	if( n.isEmpty() ){

		e.fileSystem.replace( "fuse.","" ) ;

		if( !e.fileSystem.isEmpty() ){

			e.fileSystem.replace( 0,1,e.fileSystem.at( 0 ).toUpper() ) ;
		}
	}else{
		e.fileSystem = n ;

		e.fileSystem.replace( 0,1,e.fileSystem.at( 0 ).toUpper() ) ;
	}

	return e ;
}

Task::future< std::vector< volumeInfo > >& mountinfo::unlockedVolumes()
{
	return Task::run( [](){

		std::vector< volumeInfo > e ;

		const auto& engines = engines::instance() ;

		for( auto&& it : _unlocked_volumes() ){

			const auto& engine = engines.getByFsName( it.fileSystem ) ;

			if( engine.known() ){

				e.emplace_back( _decode( engine,std::move( it ) ) ) ;
			}
		}

		return e ;
	} ) ;
}

void mountinfo::stop()
{
	if( m_stop ){

		m_stop() ;
	}else{
		m_quit() ;
	}
}

void mountinfo::volumeUpdate()
{
	m_newMountList = _unlocked_volumes() ;

	auto _volumeWasMounted = [ & ](){

		return m_oldMountList.size() < m_newMountList.size() ;
	} ;

	auto _mountedVolume = [ & ]( const QString& e ){

		for( const auto& it : m_oldMountList ){

			if( it.cipherPath == e ){

				return false ;
			}
		}

		return true ;
	} ;

	if( m_announceEvents ){

		this->pbUpdate() ;

		if( _volumeWasMounted() ){

			for( const auto& it : m_newMountList ){

				if( _mountedVolume( it.cipherPath ) ){

					this->autoMount( it.mountPoint ) ;
				}
			}
		}
	}

	m_oldMountList = std::move( m_newMountList ) ;
}

void mountinfo::updateVolume()
{
	QMetaObject::invokeMethod( this,"volumeUpdate",Qt::QueuedConnection ) ;
}

void mountinfo::pbUpdate()
{
	QMetaObject::invokeMethod( m_parent,"pbUpdate",Qt::QueuedConnection ) ;
}

void mountinfo::autoMount( const QString& e )
{
	QMetaObject::invokeMethod( m_parent,
				   "autoMountFavoritesOnAvailable",
				   Qt::QueuedConnection,
				   Q_ARG( QString,e ) ) ;
}

void mountinfo::announceEvents( bool s )
{
	m_announceEvents = s ;
}

void mountinfo::linuxMonitor()
{
	auto& s = Task::run( [ this ](){

		QFile s( "/proc/self/mountinfo" ) ;

		s.open( QIODevice::ReadOnly ) ;

		eventsMonitor::pollMonitor( m_linuxMonitorExit,s.handle() ).poll( [ this ]( int a ){

			if( a > 0 ){

				this->updateVolume() ;

			}else if( a == 0 ){

				/*
				 * Timout has occured
				 */
			}else{
				utility::debug() << "Warning: poll() in mountinfo::linuxMonitor() failed" ;
			}
		} ) ;
	} ) ;

	m_stop = [ this ](){ m_linuxMonitorExit = true ; } ;

	if( m_folderMountEvents.monitor() ){

		Task::run( [ this ](){

			m_folderMountEvents.start() ;

		} ).then( [ this ](){

			m_quit() ;
		} ) ;

		s.then( [ this ](){

			m_folderMountEvents.stop() ;
		} ) ;
	}else{
		s.then( std::move( m_quit ) ) ;
	}
}

void mountinfo::pollForUpdates()
{
	m_exit = false ;

	m_stop = [ this ](){ m_exit = true ; } ;

	auto interval = settings::instance().pollForUpdatesInterval() ;

	Task::run( [ &,interval ](){

		auto previous = QStorageInfo::mountedVolumes() ;
		auto now = previous ;

		while( true ){

			if( m_exit ){

				break ;
			}else{
				utility::Task::wait( interval ) ;

				now = QStorageInfo::mountedVolumes() ;

				if( now != previous ){

					this->updateVolume() ;
				}

				previous = std::move( now ) ;
			}
		}

	} ).then( std::move( m_quit ) ) ;
}

void mountinfo::qtMonitor()
{
	this->pollForUpdates() ;
}

void mountinfo::windowsMonitor()
{
	SiriKali::Windows::updateVolumeList( [ this ]{ this->updateVolume() ; } ) ;
}

mountinfo::folderMountEvents::folderMountEvents( std::function< void( const QString& ) > function ) :
	m_update( std::move( function ) ),
	m_folderMonitorExit( false ),
	m_folderMonitor( m_folderMonitorExit )
{
	if( m_folderMonitor.functional() ){

		m_folderMonitor.createList( settings::instance().mountMonitorFolderPaths() ) ;
	}else{
		utility::debug() << "Warning: inotify_init() failed" ;
	}
}

mountinfo::folderMountEvents::~folderMountEvents()
{
}

void mountinfo::folderMountEvents::start()
{
	m_folderMonitor.event( [ & ]( int r,const eventsMonitor::folderMonitor::Entry& ent ){

		if( r == 0 ){
			/*
			 * Timeout
			 */
		}else if( r < 0 ){

			utility::debug() << "Warning: select() in mountinfo::folderMountEvents::start() failed" ;
		}else{
			ent.created( [ this ]( const QString& e ){

				m_update( e ) ;
			} ) ;
		}
	} ) ;
}

void mountinfo::folderMountEvents::stop()
{
	m_folderMonitorExit = true ;
}

bool mountinfo::folderMountEvents::monitor()
{
	return m_folderMonitor.working() ;
}

static QString _gvfs_fuse_path()
{
	auto s = settings::instance().gvfsFuseMonitorPath() ;

	if( s.isEmpty() ){

		for( const auto& it : _unlocked_volumes() ){

			if( it.fileSystem == "fuse.gvfsd-fuse" ){

				return it.mountPoint ;
			}
		}
	}

	return s ;
}

dbusMonitor::dbusMonitor( folderMonitor::function function ) :
	m_dbus( this ),
	m_folderMonitor( true,_gvfs_fuse_path() ),
	m_function( std::move( function ) )
{
	utility::debug() << "gvfs fuse path: " + m_folderMonitor.path() ;

	if( !m_folderMonitor.path().isEmpty() ){

		m_dbus.monitor() ;
	}
}

void dbusMonitor::volumeRemoved()
{
	static folderMonitor::function ss = []( const QString& e ){

		utility::debug() << "gvfs fuse unmount: " + e ;
	} ;

	m_folderMonitor.contentCountDecreased( ss ) ;
}

void dbusMonitor::volumeAdded()
{
	static folderMonitor::function ss = [ & ]( const QString& e ){

		utility::debug() << "gvfs fuse mount: " + e ;

		m_function( e ) ;
	} ;

	m_folderMonitor.contentCountIncreased( ss ) ;
}

folderMonitor::folderMonitor( bool e,const QString& path ) :
	m_path( path ),m_folderList( this->folderList() ),m_waitForSynced( e )
{
	while( m_path.endsWith( "/" ) ){

		m_path = utility::removeLast( m_path,1 ) ;
	}
}

const QString& folderMonitor::path() const
{
	return m_path ;
}

void folderMonitor::contentCountIncreased( folderMonitor::function& function )
{
	this->folderListSynced( [ & ]( QStringList s ){

		auto e = s ;

		for( const auto& it : m_folderList ){

			s.removeOne( it ) ;
		}

		for( const auto& it : s ){

			function( m_path + "/" + it ) ;
		}

		m_folderList = std::move( e ) ;
	} ) ;
}

void folderMonitor::contentCountDecreased( folderMonitor::function& function )
{
	this->folderListSynced( [ & ]( QStringList s ){

		for( const auto& it : s ){

			m_folderList.removeOne( it ) ;
		}

		for( const auto& it : m_folderList ){

			function( m_path + "/" + it ) ;
		}

		m_folderList = std::move( s ) ;
	} ) ;
}

QStringList folderMonitor::folderList() const
{
	return QDir( m_path ).entryList( QDir::NoDotAndDotDot | QDir::Dirs ) ;
}

void folderMonitor::folderListSynced( std::function< void( QStringList ) > function ) const
{
	if( m_waitForSynced ){

		utility::Timer( 1000,[ &,function = std::move( function ) ]( int counter ){

			auto a = this->folderList() ;

			if( a != m_folderList ){

				utility::debug() << "gvfs folder is up to date" ;

				function( std::move( a ) ) ;

				return true ;

			}else if( counter == 5 ){

				utility::debug() << "Timed out waiting for gvfs folder to update" ;

				return true ;
			}else{
				utility::debug() << "Waiting for gvfs folder to update" ;

				return false ;
			}
		} ) ;
	}else{
		function( this->folderList() ) ;
	}
}
