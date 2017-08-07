/*
 *
 *  Copyright (c) 2017
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

#ifndef UTILITY_TWO_H
#define UTILITY_TWO_H

#include <QStringList>
#include <QDir>

class QByteArray ;
class QTranslator ;

namespace utility2
{
	namespace detail
	{
		template< typename E,typename F,typename G >
		void stringListToStrings( const F& s,G n,G k,E& e )
		{
			if( n < k ){

				e = s.at( n ) ;
			}
		}

		template< typename E,typename F,typename G,typename ... T >
		void stringListToStrings( const E& s,G n,G k,F& e,T& ... t )
		{
			if( n < k ){

				e = s.at( n ) ;
				utility2::detail::stringListToStrings( s,n + 1,k,t ... ) ;
			}
		}
	}

	template< typename E,typename ... F >
	void stringListToStrings( const E& s,F& ... t )
	{
		using type_t = decltype( s.size() ) ;

		utility2::detail::stringListToStrings( s,type_t( 0 ),s.size(),t ... ) ;
	}

	static inline QStringList executableSearchPaths()
	{
		const auto s = QDir::homePath() + "/bin/" ;

		return { "/usr/local/bin/",
			"/usr/local/sbin/",
			"/usr/bin/",
			"/usr/sbin/",
			"/bin/",
			"/sbin/",
			"/opt/local/bin/",
			"/opt/local/sbin/",
			"/opt/bin/",
			"/opt/sbin/",
			 s.toLatin1().constData() } ;
	}

	class translator
	{
	public:
		void setLanguage( const QByteArray& e ) ;
		~translator() ;
	private:
		void clear( void ) ;
		QTranslator * m_translator = nullptr ;
	} ;
}

#endif
