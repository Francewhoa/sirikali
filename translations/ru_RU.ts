<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="ru_UA">
<context>
    <name>DialogMsg</name>
    <message>
        <location filename="../src/dialogmsg.ui" line="17"/>
        <source>Dialog</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="29"/>
        <source>&amp;Ok</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="42"/>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.ui" line="55"/>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.cpp" line="97"/>
        <source>INFORMATION</source>
        <translation>ИНФОРМАЦИЯ</translation>
    </message>
    <message>
        <location filename="../src/dialogmsg.cpp" line="237"/>
        <source>Do not show this dialog again</source>
        <translation>Не показывать больше этот диалог</translation>
    </message>
</context>
<context>
    <name>LXQt::Wallet::changePassWordDialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="112"/>
        <source>Create a new wallet</source>
        <translation>Создать новое хранилище ключей</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="114"/>
        <source>Create</source>
        <translation>Создать</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="142"/>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="278"/>
        <source>Passwords do not match</source>
        <translation>Пароль не может быть пустым</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="223"/>
        <source>Wallet password could not be changed</source>
        <translation>Пароль хранилища ключей не может быть изменен</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="232"/>
        <source>Wallet could not be opened with the presented key</source>
        <translation>Хранилище ключей не может быть открыто с помощью данного ключа</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.cpp" line="242"/>
        <source>New passwords do not match</source>
        <translation>Новые пароли не совпадают</translation>
    </message>
</context>
<context>
    <name>LXQt::Wallet::password_dialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.cpp" line="72"/>
        <source>Wallet could not be opened with the presented key</source>
        <translation>Хранилище ключей не может быть открыто с помощью данного ключа</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/checkforupdates.cpp" line="83"/>
        <source>%1&quot;%2&quot; Installed Version Is : %3.
Latest Version Is : %4.</source>
        <translation>%1&quot;%2&quot; Установленная версия : %3.
Последняя версия : %4.</translation>
    </message>
    <message>
        <location filename="../src/checkforupdates.cpp" line="236"/>
        <source>Network Request Failed To Respond Within %1 Seconds.</source>
        <translation>Сетевой запрос не смог ответить в течение %1 секунд(ы).</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1270"/>
        <location filename="../src/sirikali.cpp" line="1286"/>
        <source>ERROR</source>
        <translation>ОШИБКА</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1271"/>
        <source>Failed To Find %1 Executable</source>
        <translation>Не удалось найти исполняемый файл %1</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1284"/>
        <source>INFORMATION</source>
        <translation>ИНФОРМАЦИЯ</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1287"/>
        <source>Failed To Get Volume Properties</source>
        <translation>Не удалось получить свойства тома</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="40"/>
        <source>Kde Wallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="45"/>
        <source>Internal Wallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="50"/>
        <source>Gnome Wallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="55"/>
        <source>OSX KeyChain</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1216"/>
        <source>Not Supported KeyFile Encountered Since It Contains AtLeast One Illegal Character(&apos;\n&apos;,&apos;\0&apos;,&apos;\r&apos;).

Please Use a Hash Of The KeyFile Through &quot;HMAC+KeyFile&quot; Option.</source>
        <translation>Не корректный KeyFile, так как он содержит как минимум один недопустимый символ (&apos;\n&apos;, &apos;\0&apos;, &apos;\r&apos;).

Пожалуйста, используйте хэш ключа с помощью опции «HMAC + KeyFile».</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1267"/>
        <source>Effective Key Is Generated With Below Formula:

key = hmac_sha256(password,keyfile contents)</source>
        <translation>Эффективный ключ генерируется по формуле:

key = hmac_sha256 (пароль, содержимое файла ключа)</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="408"/>
        <source>
options:
	-d   Path to where a volume to be auto unlocked/mounted is located.
	-m   Tool to use to open a default file manager(default tool is xdg-open).
	-e   Start the application without showing the GUI.
	-b   A name of a backend to retrieve a password from when a volume is open from CLI.
	     Supported backends are: &quot;internal&quot;,&quot;stdin&quot;,&quot;keyfile&quot;,&quot;osxkeychain&quot;,&quot;kwallet&quot; and &quot;libsecret&quot;.
	     The first three are always present but the rest are compile time dependencies.
	     &quot;internal&quot; option causes SiriKali to read password from lxqt-wallet internal backend.
	     &quot;stdin&quot; option causes SiriKali to read the password from standard input.
	     &quot;keyfile&quot; option causes SiriKali to read the password from a file.
	     &quot;libsecret&quot; option causes SiriKali to read password from lxqt-wallet libsecret backend.
	     &quot;kwallet&quot; option causes SiriKali to read password from lxqt-wallet kwallet backend.
	     &quot;osxkeychain&quot; option causes SiriKali to read password from lxqt-wallet OSX key chain backend.
	-k   When opening a volume from CLI,a value of &quot;rw&quot; will open the volume in read\write
	     mode and a value of &quot;ro&quot; will open the volume in read only mode.
	-z   Full path of the mount point to be used when the volume is opened from CLI.
	     This option is optional.
	-c   Set Volume Configuration File Path when a volume is opened from CLI.
	-i   Set inactivity timeout(in minutes) to dismount the volume when mounted from CLI.
	-o   Set mount options when mounting a volume from CLI.
	-f   Path to keyfile.
	-u   Unmount volume.
	-p   Print a list of unlocked volumes.
	-s   Option to trigger generation of password hash.</source>
        <translation>
опции:
	-d    Путь, где находится разблокированный/монтируемый том.
	-m   Инструмент для открытия файлового менеджера (по умолчанию - xdg-open).
	-e     Запустить приложение, не показывая графический интерфейс(GUI).
	-b    Имя бэкэнда для получения пароля, когда запускаем открытие тома из командной строки (CLI).
	        Поддерживаемые бэкэнды: «внутренний», «stdin», «keyfile», «osxkeychain», «kwallet» и «libsecret».
	        Первые три всегда присутствуют, но остальные являются зависимыми от версии программы.
	        Параметр «внутренний» заставляет SiriKali считывать пароль из внутреннего бэкэнда lxqt-кошелька.
	        Параметр «stdin» заставляет SiriKali читать пароль со стандартного ввода.
	        Параметр «keyfile» заставляет SiriKali читать пароль из файла.
	        Опция «libsecret» заставляет SiriKali читать пароль с бэкэнда lxqt-кошелька libsecret.
	        Опция «kwallet» заставляет SiriKali считывать пароль с бэкэнда lxqt-кошелька kwallet.
	        Опция «osxkeychain» заставляет SiriKali считывать пароль с бэкэнда lxqt-кошелька osxkeychain.
	-k    При открытии тома из CLI, значение «rw» откроет том в режиме чтение\запись (read\write)
	        и значение «ro» откроет том в режиме только для чтения (read only).
	-z     Полный путь точки монтирования, который будет использоваться при открытии тома из командной строки (CLI).
	        Этот параметр является необязательным.
	-c     Установить путь к файлу конфигурации тома, когда том открывается из командной строки (CLI).
	-i      Установите тайм-аут (в минутах), по истечению которого нужно будет отмонтировать том при запуске из командной строки (CLI).
	-o    Установите параметры монтирования тома из командной строки (CLI).
	-f     Путь к файлу ключей.
	-u    Отмонтировать том.
	-p    Показать список разблокированных томов.
	-s     Возможность запуска генерации хэша паролей.</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="894"/>
        <source>Manage Favorites</source>
        <translation>Управление Избранным</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="895"/>
        <source>Mount All</source>
        <translation>Смонтировать все</translation>
    </message>
    <message>
        <location filename="../src/utility.cpp" line="778"/>
        <source>about SiriKali</source>
        <translation>О SiriKali</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1271"/>
        <source>This plugin delegates key generation to an external application</source>
        <translation>Этот плагин делегирует генерацию ключей во внешнее приложение</translation>
    </message>
</context>
<context>
    <name>changePassWordDialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="17"/>
        <source>Change Wallet&apos;s Password</source>
        <translation>Изменить пароль на хранилище</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="45"/>
        <source>C&amp;hange</source>
        <translation>&amp;Изменить</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="58"/>
        <source>&amp;Ok</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="129"/>
        <source>Enter Current Password Below.</source>
        <translation>Введите текущий пароль ниже.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="148"/>
        <source>Enter New Password Below.</source>
        <translation>Введите новый пароль ниже.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="167"/>
        <source>Re Enter New Password Below.</source>
        <translation>Введите повторно новый пароль.</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="186"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="199"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;An application &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; has made a request for a password of its wallet &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; to be changed&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Приложение &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; сделал запрос на пароль кошелька &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos;, чтобы изменить его.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;br /&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/changepassworddialog.ui" line="217"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Enter password information below to create a new wallet &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; for application &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Введите информацию о пароле ниже, чтобы создать новый кошелек &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%1&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos; for application &apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;%2&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&apos;&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>checkUpdates</name>
    <message>
        <location filename="../src/checkforupdates.cpp" line="66"/>
        <source>Network Request Failed To Respond Within %1 Seconds.</source>
        <translation>Сетевой запрос не удалось выполнить в течение %1 секунд.</translation>
    </message>
    <message>
        <location filename="../src/checkforupdates.cpp" line="68"/>
        <source>ERROR</source>
        <translation>ОШИБКА</translation>
    </message>
    <message>
        <location filename="../src/checkforupdates.cpp" line="108"/>
        <location filename="../src/checkforupdates.cpp" line="111"/>
        <source>Version Info</source>
        <translation>Информация о версиях</translation>
    </message>
</context>
<context>
    <name>configFileOption</name>
    <message>
        <location filename="../src/configfileoption.ui" line="14"/>
        <source>Set Config File Path</source>
        <translation>Установить путь к файлу конфигурации</translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="26"/>
        <source>&amp;Set</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="39"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/configfileoption.ui" line="78"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation>Укажите путь для файла конфигурации (необязательно).</translation>
    </message>
</context>
<context>
    <name>configOptions</name>
    <message>
        <location filename="../src/configoptions.ui" line="14"/>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="30"/>
        <source>General Options</source>
        <translation>Общие параметры</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="107"/>
        <source>Auto Open Mount Point</source>
        <translation>Автоматически открывать точку монтирования</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="123"/>
        <source>Re Use Mount Point</source>
        <translation>Повторно использовать точку монтирования</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="139"/>
        <source>Auto Check For Updates</source>
        <translation>Автоматическая проверка обновлений</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="155"/>
        <source>Start Minimized</source>
        <translation>Стартовать свернутым</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="94"/>
        <source>Select Language</source>
        <translation>Выберите язык</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="307"/>
        <source>&amp;KWallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="333"/>
        <source>&amp;None</source>
        <translation>&amp;Не использовать</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="366"/>
        <source>Editable Options</source>
        <translation>Изменяемые параметры</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="459"/>
        <source>Set External Plugin Executable</source>
        <translation>Задать внешний исполняемый модуль</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="478"/>
        <source>Set Command To Run After Mount</source>
        <translation>Задать команду после монтирования</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="517"/>
        <source>Set Command To Run Before UnMount</source>
        <translation>Задать команду перед монтированием</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="184"/>
        <source>Auto Mount Favorites Volumes At Startup</source>
        <translation>Автоматическое монтирование тома при старте</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="219"/>
        <source>Auto Mount Favorites Volumes When Available</source>
        <translation>Автоматическое монтирование тома при его доступности</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="248"/>
        <source>Show Mount Dialog When Auto Mounting</source>
        <translation>Показывать диалог при автоматическом монтировании тома</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="257"/>
        <source>Manage Keys In Wallets</source>
        <translation>Управление ключами в хранилище</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="269"/>
        <source>Set Default Wallet To Retrieve Volume Keys</source>
        <translation>Укажите хранилище ключей по умолчанию</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="281"/>
        <location filename="../src/configoptions.cpp" line="176"/>
        <source>Internal Wallet</source>
        <translation>Внутренее хранилище</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="294"/>
        <source>&amp;Libsecret</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="178"/>
        <source>KWallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="320"/>
        <source>&amp;MACOS Keychain</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="347"/>
        <source>Change Internal Wallet Password</source>
        <translation>Изменить пароль внутренего хранилища</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="360"/>
        <source>&amp;Key Storage</source>
        <translation>&amp;Хранилище ключей</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="378"/>
        <source>Set File Manager</source>
        <translation>Задать диспетчер файлов</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="427"/>
        <source>Set Mount Point Prefix</source>
        <translation>Задать префикс монтирования</translation>
    </message>
    <message>
        <location filename="../src/configoptions.ui" line="538"/>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="80"/>
        <location filename="../src/configoptions.cpp" line="267"/>
        <source>Set Executables Search Path</source>
        <translation>Задать путь поиска исполняемых файлов</translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="177"/>
        <source>Libsecret</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/configoptions.cpp" line="179"/>
        <source>MACOS Keychain</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>cryfscreateoptions</name>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="14"/>
        <source>Select Volume Creation Options</source>
        <translation>Укажите параметры создания тома</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="36"/>
        <source>Cipher To Use For Encryption.</source>
        <translation>Шифр для использования шифрования.</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="55"/>
        <source>Cipher Text Block Size In Bytes.</source>
        <translation>Размер блока текста шифра в байтах.</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="81"/>
        <source>&amp;OK</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="94"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/cryfscreateoptions.ui" line="110"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation>Укажите путь для файла конфигурации (необязательно).</translation>
    </message>
</context>
<context>
    <name>dialogok</name>
    <message>
        <location filename="../src/dialogok.ui" line="17"/>
        <source>Dialog</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="29"/>
        <source>&amp;Ok</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="67"/>
        <source>&amp;Yes</source>
        <translation>&amp;Да</translation>
    </message>
    <message>
        <location filename="../src/dialogok.ui" line="80"/>
        <source>&amp;No</source>
        <translation>&amp;Нет</translation>
    </message>
</context>
<context>
    <name>ecryptfscreateoptions</name>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="14"/>
        <source>Select Volume Creation Options</source>
        <translation>Укажите параметры создания тома</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="26"/>
        <source>&amp;OK</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="39"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="52"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation>Укажите путь для файла конфигурации (необязательно).</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="138"/>
        <source>Do Not Encrypt File Names</source>
        <translation>Не шифровать имена файлов</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="154"/>
        <source>Encrypt File Names</source>
        <translation>Шифровать имена файлов</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="225"/>
        <source>Enable Plain Text Passthrough</source>
        <translation>Разрешить передачу обычного текста</translation>
    </message>
    <message>
        <location filename="../src/ecryptfscreateoptions.ui" line="209"/>
        <source>Do Not Enable Plain Text Passthrough</source>
        <translation>Не разрешать передачу обычного текста</translation>
    </message>
</context>
<context>
    <name>favorites</name>
    <message>
        <location filename="../src/favorites.ui" line="17"/>
        <source>Manage Favorites</source>
        <translation>Управление Избранным</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="91"/>
        <source>Config File Path (Optional)</source>
        <translation>Путь к файлу конфигурации (необязательно)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="107"/>
        <source>Idle TimeOut (Optional)</source>
        <translation>Время ожидания (опционально)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="196"/>
        <source>Mount Options</source>
        <translation>Параметры монтирования</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="207"/>
        <source>Auto Mount Volume</source>
        <translation>Автомонтирование тома</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="120"/>
        <source>&amp;Add</source>
        <translation>&amp;Добавить</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="156"/>
        <source>Volume ID</source>
        <translation>ID тома</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="164"/>
        <source>Mount Point</source>
        <translation>Точка монтирования</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="172"/>
        <source>Auto Mount</source>
        <translation>Автомонтирование</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="180"/>
        <source>Config File Path</source>
        <translation>Путь к файлу конфигурации</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="188"/>
        <source>Idle Time Out</source>
        <translation>Время ожидания</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="214"/>
        <source>Mount Options (Optional And Comma Separated)</source>
        <translation>Параметры монтирования (опционально и разделенные запятой)</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="26"/>
        <source>Encrypted Folder Path</source>
        <translation>Путь к зашифрованной папке</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="58"/>
        <source>Mount Point Path</source>
        <translation>Путь к точке монтирования</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="48"/>
        <source>open file dialog</source>
        <translation>укажите путь к файлу</translation>
    </message>
    <message>
        <location filename="../src/favorites.ui" line="130"/>
        <source>&amp;Done</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="206"/>
        <source>Toggle AutoMount</source>
        <translation>Изменить значение автомонтирования</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="211"/>
        <source>Remove Selected Entry</source>
        <translation>Удалить выбранную запись</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="216"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="304"/>
        <location filename="../src/favorites.cpp" line="308"/>
        <location filename="../src/favorites.cpp" line="314"/>
        <source>ERROR!</source>
        <translation>ОШИБКА!</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="304"/>
        <source>Encrypted Folder Address Field Is Empty</source>
        <translation>Поле &quot;Путь к зашифрованной папке&quot; пустое</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="308"/>
        <source>Mount Point Path Field Is Empty</source>
        <translation>Поле &quot;Путь к точке монтирования&quot; пустое</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="314"/>
        <source>Mount Options Can Not Contain &quot;-&quot;</source>
        <translation>Параметры монтирования не могут содержать &apos;-&apos;</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="359"/>
        <source>Path To A Config File</source>
        <translation>Путь к файлу конфигурации</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="400"/>
        <source>Path To An Encrypted Folder</source>
        <translation>Путь к зашифрованной папке</translation>
    </message>
    <message>
        <location filename="../src/favorites.cpp" line="410"/>
        <source>Path To Mount Folder</source>
        <translation>Путь к точке монтирования</translation>
    </message>
</context>
<context>
    <name>fileManager</name>
    <message>
        <location filename="../src/filemanager.ui" line="14"/>
        <location filename="../src/filemanager.cpp" line="49"/>
        <source>Set File Manager</source>
        <translation>Задать диспетчер файлов</translation>
    </message>
    <message>
        <location filename="../src/filemanager.ui" line="26"/>
        <source>TextLabel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/filemanager.ui" line="55"/>
        <source>&amp;Set</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="40"/>
        <source>Enter Below The Name Of The Application You Want To Be Used To Open Mount Points.</source>
        <translation>Введите название приложения, которое нужно использовать для открытия точек монтирования.</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="51"/>
        <source>Set Executable For &quot;ExternalExecutable&quot; Plugin</source>
        <translation>Задать внешний исполняемый модуль</translation>
    </message>
    <message>
        <location filename="../src/filemanager.cpp" line="53"/>
        <source>Enter Below The Name Of The External Executable And Its Arguments To Use When Invoking &quot;ExternalExecutable&quot; Plugin.</source>
        <translation>Введите ниже имя внешнего исполняемого файла и его аргументы для использования при вызове плагина «ExternalExecutable».</translation>
    </message>
</context>
<context>
    <name>gocryptfscreateoptions</name>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="14"/>
        <source>Select Volume Creation Options</source>
        <translation>Укажите параметры создания тома</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="36"/>
        <source>Cipher To Use For File Contents Encryption.</source>
        <translation>Шифр для использования шифрования.</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="55"/>
        <source>&amp;OK</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="68"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="81"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation>Укажите путь для файла конфигурации (необязательно).</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="167"/>
        <source>Do Not Encrypt File Names</source>
        <translation>Не шифровать имена файлов</translation>
    </message>
    <message>
        <location filename="../src/gocryptfscreateoptions.ui" line="183"/>
        <source>Encrypt File Names</source>
        <translation>Шифровать имена файлов</translation>
    </message>
</context>
<context>
    <name>help</name>
    <message>
        <location filename="../src/help.ui" line="14"/>
        <source>FAQ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="26"/>
        <source>&amp;Close</source>
        <translation>&amp;Закрыть</translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="54"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Noto Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;1.0 How do i change the default mount point prefix?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;By default,SiriKali uses a mount point prefix of &amp;quot;~/.SiriKali.tmp/&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;You can change it to something else by clicking &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Editable Options-&amp;gt;Set Mount Point Prefix&amp;quot; option and then set a folder you want to be used as a default mount point prefix.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-20-how-do-i-set-custom-mount-point-path-for-my-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;2&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i set custom mount point path for my volume?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Unique custom mount point path can be used through adding a volume to the favorites list and then setting custom mount point path in the &amp;quot;mount point path&amp;quot; field.The volume should then be accessed through the favorites list.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Favorites list is access through Menu-&amp;gt;Favorites-&amp;gt;Manage Favorites.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-30-how-do-i-start-the-application-minimized&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;3&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i start the application minimized?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Start the application with &amp;quot;-e&amp;quot; option or set it through GUI by setting &amp;quot;Menu-&amp;gt;Settings-&amp;gt;General Options-&amp;gt;Start Minimized&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-40-what-does-different-key-options-means-in-the-dialog-for-creatingunlocking-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;4&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What does different key options means in the dialog for creating/unlocking volume?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key&amp;quot; entry means the password you enter will be used to create/unlock the volume.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KeyFile&amp;quot; entry means the contents of a specified file will be used as a password to create/unlock the volume. This option is not very safe as the file contents will most likely be truncated on the first encountered new line character making effective password not as strong as expected. It is advised to use one of the next two options if a key file is to be used.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;HMAC+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and an empty password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,empty password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and a password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Internal Wallet&amp;quot; entry means the effective password will be retrieved from LXQt internal secure storage system. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KDE Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through KDE&apos;s KWallet backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;GNOME Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through libsecret backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;OSX keychain&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through OSX keychain backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-50-what-directories-does-sirikali-check-for-its-backend-executables&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;5&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What directories does SiriKali check for its backend executables?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Backend executables are searched in the following directories with the first entry searched first and the last entry searched last: &amp;quot;/usr/local/bin/&amp;quot;,&amp;quot;/usr/local/sbin/&amp;quot;,&amp;quot;/usr/bin/&amp;quot;,&amp;quot;/usr/sbin/&amp;quot;,&amp;quot;/bin/&amp;quot;,&amp;quot;/sbin/&amp;quot;, &amp;quot;/opt/local/bin&amp;quot;,&amp;quot;/opt/local/sbin&amp;quot;,&amp;quot;/opt/bin&amp;quot;,&amp;quot;/opt/sbin&amp;quot;,&amp;quot;~/bin&amp;quot;,&amp;quot;~/.bin&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-60-how-do-i-unlock-a-volume-through-a-favorite-entry-without-invoking-a-wallet&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;6&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature without invoking a wallet?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Disable the feature by setting an option through &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;none&amp;quot;&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-70-how-do-i-unlock-a-volume-through-a-favorite-entry-using-a-key-in-a-wallet-and-without-showing-mount-dialog-prompt&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;7&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature using a key in a wallet and without showing mount dialog prompt?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Set your preferred password storage system at &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Unset &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Auto Mount-&amp;gt;Show Mount Dialog When Auto Mounting&amp;quot;.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-80-how-do-i-add-a-key-to-a-secured-storage-system&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;8&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i add a key to a secured storage system?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Click &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;Key Storage&amp;quot; and then select your preferred key storage system.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,click &amp;quot;Add&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,add your password in the appropriate fields. &amp;quot;Volume ID&amp;quot; is the full path to the encrypted volume folder. Click the button to the right of the field to invoke file dialog window where you will get the opportunity to browse to where the folder is to select it.&lt;/li&gt;&lt;/ol&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translatorcomment>По умолчанию SiriKali использует префикс точки монтирования «~ / .SiriKali.tmp /».
Вы можете изменить его на что-то еще, нажав «Menu-&gt; Settings-&gt; Editable Options-&gt; Set Mount Prefix», а затем установите папку, которую вы хотите использовать в качестве префикса точки монтирования по умолчанию.</translatorcomment>
        <translation type="unfinished">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Noto Sans&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;1.0 Как я могу изменить префикс точки монтирования по умолчанию?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;По умолчанию SiriKali использует префикс точки монтирования &amp;quot;~/.SiriKali.tmp/&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Вы можете изменить его нажав &amp;quot;Меню-&amp;gt;Настройки-&amp;gt;Изменяемые параметры-&amp;gt;Задать префикс монтирования&amp;quot; , а затем установите папку, которую вы хотите использовать в качестве префикса точки монтирования по умолчанию.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-20-how-do-i-set-custom-mount-point-path-for-my-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;2&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 Как изменить путь точки монтирования для моего тома?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Пользовательский путь точки монтирования можно задать, добавив том в Избранное, а затем установить собственный путь точки монтирования в поле &amp;quot;Путь к точке монтирования&amp;quot;. Затем этот том должен быть доступен в Избранном.&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Список избранного можно изменить в Избранное-&amp;gt;Управление Избранным.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-30-how-do-i-start-the-application-minimized&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;3&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 Как запускать приложение свернутым?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Запустите приложение с параметром &amp;quot;-e&amp;quot; или настройте через графический интерфейс в&amp;quot;Меню-&amp;gt;Настройки-&amp;gt;Общие параметры-&amp;gt;Стартовать свернутым&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-40-what-does-different-key-options-means-in-the-dialog-for-creatingunlocking-volume&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;4&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What does different key options means in the dialog for creating/unlocking volume?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key&amp;quot; entry means the password you enter will be used to create/unlock the volume.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KeyFile&amp;quot; entry means the contents of a specified file will be used as a password to create/unlock the volume. This option is not very safe as the file contents will most likely be truncated on the first encountered new line character making effective password not as strong as expected. It is advised to use one of the next two options if a key file is to be used.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;HMAC+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and an empty password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,empty password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Key+KeyFile&amp;quot; entry means the effective password will be a combination of key file contents and a password. The effective password will be produced with the following formula: password = hmac_sha256( key file contents,password ).&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;Internal Wallet&amp;quot; entry means the effective password will be retrieved from LXQt internal secure storage system. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;KDE Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through KDE&apos;s KWallet backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;GNOME Wallet&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through libsecret backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&amp;quot;OSX keychain&amp;quot; entry means the effective password will be retrieved from LXQt secure storage system through OSX keychain backend. Section 8.0 has information on how to add passwords to this backend.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-50-what-directories-does-sirikali-check-for-its-backend-executables&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;5&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 What directories does SiriKali check for its backend executables?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Backend executables are searched in the following directories with the first entry searched first and the last entry searched last: &amp;quot;/usr/local/bin/&amp;quot;,&amp;quot;/usr/local/sbin/&amp;quot;,&amp;quot;/usr/bin/&amp;quot;,&amp;quot;/usr/sbin/&amp;quot;,&amp;quot;/bin/&amp;quot;,&amp;quot;/sbin/&amp;quot;, &amp;quot;/opt/local/bin&amp;quot;,&amp;quot;/opt/local/sbin&amp;quot;,&amp;quot;/opt/bin&amp;quot;,&amp;quot;/opt/sbin&amp;quot;,&amp;quot;~/bin&amp;quot;,&amp;quot;~/.bin&amp;quot;.&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-60-how-do-i-unlock-a-volume-through-a-favorite-entry-without-invoking-a-wallet&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;6&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature without invoking a wallet?&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Disable the feature by setting an option through &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;none&amp;quot;&lt;/p&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-70-how-do-i-unlock-a-volume-through-a-favorite-entry-using-a-key-in-a-wallet-and-without-showing-mount-dialog-prompt&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;7&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i unlock a volume through a favorite feature using a key in a wallet and without showing mount dialog prompt?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Set your preferred password storage system at &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Unset &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Auto Mount-&amp;gt;Show Mount Dialog When Auto Mounting&amp;quot;.&lt;/li&gt;&lt;/ol&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;user-content-80-how-do-i-add-a-key-to-a-secured-storage-system&quot;&gt;&lt;/a&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;8&lt;/span&gt;&lt;span style=&quot; font-size:x-large; font-weight:600;&quot;&gt;.0 How do i add a key to a secured storage system?&lt;/span&gt;&lt;/p&gt;
&lt;ol style=&quot;margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; -qt-list-indent: 1;&quot;&gt;&lt;li style=&quot; margin-top:12px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Click &amp;quot;Menu-&amp;gt;Settings-&amp;gt;Manage Keys In Wallets-&amp;gt;Key Storage&amp;quot; and then select your preferred key storage system.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,click &amp;quot;Add&amp;quot;.&lt;/li&gt;
&lt;li style=&quot; margin-top:0px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;On the dialog window that shows up,add your password in the appropriate fields. &amp;quot;Volume ID&amp;quot; is the full path to the encrypted volume folder. Click the button to the right of the field to invoke file dialog window where you will get the opportunity to browse to where the folder is to select it.&lt;/li&gt;&lt;/ol&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/help.ui" line="99"/>
        <source>Open &amp;PDF</source>
        <translation>Открыть &amp;PDF</translation>
    </message>
</context>
<context>
    <name>keyDialog</name>
    <message>
        <location filename="../src/keydialog.ui" line="29"/>
        <source>&amp;Open</source>
        <translation>&amp;Открыть</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="45"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="58"/>
        <location filename="../src/keydialog.cpp" line="208"/>
        <location filename="../src/keydialog.cpp" line="1247"/>
        <location filename="../src/keydialog.cpp" line="1387"/>
        <source>Key</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="100"/>
        <location filename="../src/keydialog.cpp" line="178"/>
        <source>Volume Name</source>
        <translation>Имя тома</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="142"/>
        <source>Mount In &amp;Read Only Mode</source>
        <translation>Монтировать в режиме только для &amp;чтения</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="220"/>
        <source>&amp;OK</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="290"/>
        <source>Set Key</source>
        <translation>Применить ключ</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="303"/>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="358"/>
        <source>Password</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="387"/>
        <source>TextLabel</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="155"/>
        <source>O&amp;ptions</source>
        <translation>&amp;Параметры</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="188"/>
        <source>Volume Path</source>
        <translation>Путь к тому</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="176"/>
        <source>&amp;Create</source>
        <translation>&amp;Создать</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="188"/>
        <location filename="../src/keydialog.cpp" line="372"/>
        <source>Unlocking &quot;%1&quot;</source>
        <translation>Разблокировать &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="190"/>
        <source>Mount Path</source>
        <translation>Путь к точке монтирования</translation>
    </message>
    <message>
        <location filename="../src/keydialog.ui" line="339"/>
        <location filename="../src/keydialog.cpp" line="209"/>
        <location filename="../src/keydialog.cpp" line="998"/>
        <location filename="../src/keydialog.cpp" line="1253"/>
        <location filename="../src/keydialog.cpp" line="1352"/>
        <source>KeyFile</source>
        <translation>Файл ключей</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="211"/>
        <location filename="../src/keydialog.cpp" line="1288"/>
        <source>HMAC+KeyFile</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="210"/>
        <location filename="../src/keydialog.cpp" line="1261"/>
        <location filename="../src/keydialog.cpp" line="1265"/>
        <location filename="../src/keydialog.cpp" line="1366"/>
        <source>Key+KeyFile</source>
        <translation>Ключ+Файл ключей</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="212"/>
        <location filename="../src/keydialog.cpp" line="1261"/>
        <source>ExternalExecutable</source>
        <translation>Внешнее приложение</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="252"/>
        <source>Check This Box To Make Password Visible</source>
        <translation>Установите этот флажок для отображения пароля</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="270"/>
        <source>(%1/%2) Unlocking &quot;%3&quot;</source>
        <translation>(%1/%2) Разблокировка &quot;%3&quot;</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="396"/>
        <source>Create A New &quot;%1&quot; Volume</source>
        <translation>Создать новый &quot;%1&quot; том</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="474"/>
        <source>Passphrase Quality: 0%</source>
        <translation>Сложность пароля: 0%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="476"/>
        <source>Passphrase Quality: %1%</source>
        <translation>Сложность пароля: %1%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="481"/>
        <location filename="../src/keydialog.cpp" line="1315"/>
        <source>Passphrase Quality: 100%</source>
        <translation>Сложность пароля: 100%</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="532"/>
        <location filename="../src/keydialog.cpp" line="555"/>
        <source>Select A Folder To Create A Mount Point In.</source>
        <translation>Выберите папку для создания точки монтирования.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="662"/>
        <location filename="../src/keydialog.cpp" line="676"/>
        <source>Select A File To Be Used As A Keyfile.</source>
        <translation>Выберите файл для использования в качестве файла ключа.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="702"/>
        <source>Volume Name Field Is Empty.</source>
        <translation>Поле &quot;Имя тома&quot; пустое.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="711"/>
        <source>Key Field Is Empty.</source>
        <translation>Поле &quot;Ключ&quot; пустое.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="764"/>
        <source>Internal Wallet Is Not Configured.</source>
        <translation>Внутренее хранилище не настроенно.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="854"/>
        <location filename="../src/keydialog.cpp" line="1280"/>
        <source>Upgrade File System</source>
        <translation>Обновление файловой системы</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="869"/>
        <source>Volume Created Successfully.</source>
        <translation>Том успешно создан.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="809"/>
        <source>Failed To Unlock A Cryfs Volume.
Wrong Password Entered.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="879"/>
        <source>Failed To Connect To The Remote Computer.
Wrong Password Entered.</source>
        <translation>Не удалось подключиться к удаленному компьютеру.
Введен неверный пароль.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="814"/>
        <source>Failed To Unlock An Encfs Volume.
Wrong Password Entered.</source>
        <translation>Не удалось разблокировать том Encfs.
Введен неверный пароль.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="819"/>
        <source>Failed To Unlock A Gocryptfs Volume.
Wrong Password Entered.</source>
        <translation>Не удалось разблокировать том Gocryptfs.
Введен неверный пароль.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="824"/>
        <source>Failed To Unlock An Ecryptfs Volume.
Wrong Password Entered.</source>
        <translation>Не удалось разблокировать том Ecryptfs.
Введен неверный пароль.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="829"/>
        <source>A Space Character Is Not Allowed In Paths When Using Ecryptfs Backend And Polkit.</source>
        <translation>Символ пробела не разрешается в пути при использовании Ecryptfs и Polkit.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="834"/>
        <source>This Backend Requires Root&apos;s Privileges And An attempt To Acquire Them Has Failed.</source>
        <translation>Этот бэкэнд требует привилегий Root, и попытка получить их не удалась.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="839"/>
        <source>Failed To Unlock A Securefs Volume.
Wrong Password Entered.</source>
        <translation>Не удалось разблокировать том Securefs. 
Введен неверный пароль.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="844"/>
        <source>Failed To Complete The Request.
Cryfs Executable Could Not Be Found.</source>
        <translation>Не удалось выполнить запрос. 
Исполняемый файл Cryfs не может быть найден.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="849"/>
        <source>SiriKali Can Not Unlock This Volume Because Its FileSystem Has To Manually Be Converted To The Version Of Cryfs That Is Currently In Use.

Run Cryfs With This Volume To Manually Update This Volume&apos;s FileSystem.</source>
        <translation>SiriKali не может разблокировать этот том, потому что его файловая система должна быть преобразована вручную в версию Cryfs, которая в настоящее время используется.

Запустите Cryfs вручную для этого тома, чтобы обновить файловую систему этого тома.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="854"/>
        <source>Failed To Complete The Request.
Encfs Executable Could Not Be Found.</source>
        <translation>Не удалось выполнить запрос.
Исполняемый файл Encfs не может быть найден.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="859"/>
        <source>Failed To Complete The Request.
Ecryptfs-simple Executable Could Not Be Found.</source>
        <translation>Не удалось выполнить запрос.
Исполняемый файл Ecryptfs-simple не может быть найден.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="864"/>
        <source>Failed To Complete The Request.
Gocryptfs Executable Could Not Be Found.</source>
        <translation>Не удалось выполнить запрос.
Исполняемый файл Gocryptfs не может быть найден.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="869"/>
        <source>Failed To Complete The Request.
Securefs Executable Could Not Be Found.</source>
        <translation>Не удалось выполнить запрос.
Исполняемый файл Securefs не может быть найден.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="874"/>
        <source>Failed To Create Mount Point.</source>
        <translation>Не удалось создать точку монтирования.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="879"/>
        <source>Failed To Unlock The Volume.
Not Supported Volume Encountered.</source>
        <translation>Не удалось разблокировать том.
Не поддерживается формат тома.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="886"/>
        <source>Failed To Complete The Task And Below Log was Generated By The Backend.
</source>
        <translation>Не удалось завершить задачу, журнал событий был создан на бэкенде.
</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1038"/>
        <source>Failed To Generate Key.</source>
        <translation>Не удалось создать ключ.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1292"/>
        <source>Select A KeyFile</source>
        <translation>Выберите файл ключа</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="947"/>
        <source>Encrypted Folder Path Is Already Taken.</source>
        <translation>Путь к зашифрованной папке уже указан.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="919"/>
        <source>This Volume Of Cryfs Needs To Be Upgraded To Work With The Version Of Cryfs You Are Using.

The Upgrade is IRREVERSIBLE And The Volume Will No Longer Work With Older Versions of Cryfs.

To Do The Upgrade, Check The &quot;Upgrade File System&quot; Option And Unlock The Volume Again.</source>
        <translation>Этот том Cryfs нуждается в обновлении для работы с версией Cryfs, которую вы используете.

Обновление является нерегулярным, и этот том больше не будет работать с более старыми версиями Cryfs.

Чтобы выполнить обновление, установите флажок «Обновить файловую систему» ​​и снова разблокируйте том.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="950"/>
        <source>Backend Could Not Load WinFsp. Please Make Sure You Have WinFsp Properly Installed</source>
        <translation>Бэкэнд не смог загрузить WinFsp. Пожалуйста, убедитесь, что WinFsp установлен правильно</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="956"/>
        <location filename="../src/keydialog.cpp" line="1108"/>
        <source>Mount Point Path Already Taken.</source>
        <translation>Путь точки монтирования уже указан.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="963"/>
        <location filename="../src/keydialog.cpp" line="1097"/>
        <location filename="../src/keydialog.cpp" line="1122"/>
        <source>Atleast One Required Field Is Empty.</source>
        <translation>По крайней мере одно обязательное поле пустое.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1115"/>
        <source>Encrypted Folder Appear To Not Be Present.</source>
        <translation>Зашифрованная папка может быть не указанна.</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1364"/>
        <location filename="../src/keydialog.cpp" line="1376"/>
        <source>Plugin name</source>
        <translation>Имя плагина</translation>
    </message>
    <message>
        <location filename="../src/keydialog.cpp" line="1401"/>
        <source>Keyfile path</source>
        <translation>Путь к файлу ключа</translation>
    </message>
</context>
<context>
    <name>oneinstance</name>
    <message>
        <location filename="../src/oneinstance.cpp" line="69"/>
        <source>Previous instance seem to have crashed,trying to clean up before starting</source>
        <translation>Предыдущий экземпляр завершился с ошибкой, пытаемся очистить системные данные программы перед запуском</translation>
    </message>
    <message>
        <location filename="../src/oneinstance.cpp" line="76"/>
        <source>There seem to be another instance running,exiting this one</source>
        <translation>Кажется, что еще один экземпляр программы запущен, завершаем этот экземпляр</translation>
    </message>
</context>
<context>
    <name>options</name>
    <message>
        <location filename="../src/options.ui" line="17"/>
        <source>Set Mount Options</source>
        <translation>Указать параметры монтирования</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="80"/>
        <source>Unlock A Cryfs/Gocryptfs/Securefs Volume With Specified Configuration File.</source>
        <translation>Разблокируйте том Cryfs/Gocryptfs/Securefs с указанного файла конфигурации.</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="109"/>
        <source>Automatically Unmount After Specified Minutes of Inactivity Is Reached.</source>
        <translation>Автоматическое отключение после того, как пройдет указанное количество минут бездействия программы.</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="138"/>
        <source>Mount The Volume With Below Mount Options.</source>
        <translation>Подключите том с указанными опциями монтирования.</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="157"/>
        <source>&amp;Set</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/options.ui" line="170"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="139"/>
        <source>Select Cryfs/Gocryptfs Configuration File</source>
        <translation>Выберите файл конфигурации Cryfs/Gocryptfs</translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="171"/>
        <source>ERROR</source>
        <translation>ОШИБКА</translation>
    </message>
    <message>
        <location filename="../src/options.cpp" line="171"/>
        <source>Idle Time Field Requires Digits Only If Not Empty.</source>
        <translation>Поле времени простоя требует только цифр, если поле не пустое.</translation>
    </message>
</context>
<context>
    <name>password_dialog</name>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="17"/>
        <source>lxqt wallet service</source>
        <translation>Сервис lxqt кошелька</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="45"/>
        <source>The application &apos;%1&apos; has requested to open the wallet &apos;%2&apos;.Enter the password below for this wallet to unlock it</source>
        <translation>Приложение «%1» попросило открыть кошелек «%2». Введите пароль для этого кошелька, чтобы разблокировать его</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="77"/>
        <source>Wallet &apos;%1&apos; does not exist,do you want to create it?</source>
        <translation>Кошелька «%1» не существует, вы хотите его создать?</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="93"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Wallet &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; does not exist, do you want to create it?&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;Кошелька &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; не существует, вы хотите его создать?&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="110"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;An application &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; has requested to open a wallet&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt; &apos;%2&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;. Enter the password below for this wallet to unlock it.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Monospace&apos;; font-size:10pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; Приложение &lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt;&apos;%1&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt; сделало запрос на открытие кошелька&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:600;&quot;&gt; &apos;%2&apos;&lt;/span&gt;&lt;span style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;. Введите пароль для этого кошелька, чтобы разблокировать его. &lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="127"/>
        <source>&amp;Unlock</source>
        <translation>&amp;Разблокировать</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="144"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="157"/>
        <source>ok</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/3rdParty/lxqt_wallet/frontend/password_dialog.ui" line="170"/>
        <source>&amp;Ok</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>plugin</name>
    <message>
        <location filename="../src/plugin.ui" line="17"/>
        <source>Key Generator Using A Passphrase And A KeyFile</source>
        <translation>Генератор ключей с использованием парольной фразы и ключа</translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="29"/>
        <source>&amp;Set Key</source>
        <translation>&amp;Задать ключ</translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="113"/>
        <source>Passphrase</source>
        <translation>Пароль</translation>
    </message>
    <message>
        <location filename="../src/plugin.ui" line="142"/>
        <location filename="../src/plugin.cpp" line="163"/>
        <source>KeyFile</source>
        <translation>Файл ключа</translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="113"/>
        <location filename="../src/plugin.cpp" line="152"/>
        <source>ERROR</source>
        <translation>ОШИБКА</translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="113"/>
        <source>KeyFile Not Set</source>
        <translation>Файл ключа не задан</translation>
    </message>
    <message>
        <location filename="../src/plugin.cpp" line="152"/>
        <source>Failed To Generate Key</source>
        <translation>Не удалось создать ключ</translation>
    </message>
</context>
<context>
    <name>readOnlyWarning</name>
    <message>
        <location filename="../src/readonlywarning.ui" line="17"/>
        <source>WARNING</source>
        <translation>ПРЕДУПРЕЖДЕНИЕ</translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="29"/>
        <source>Do Not Show This Message Again.</source>
        <translation>Не показывать больше это сообщение.</translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="42"/>
        <source>Setting This Option Will Cause The Volume To Open In Read Only Mode.</source>
        <translation>Установка этого параметра приведет к тому, что том будет открыт в режиме только для чтения.</translation>
    </message>
    <message>
        <location filename="../src/readonlywarning.ui" line="61"/>
        <source>&amp;Ok</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>securefscreateoptions</name>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="14"/>
        <source>Choose Format Type</source>
        <translation>Укажите тип формата</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="26"/>
        <source>The &quot;lite format&quot; simply encrypts filenames and file contents separately, similar to how encfs operates, although with more security.

The &quot;full format&quot; maps files, directories and symlinks in the virtual filesystem all to regular files in the underlying filesystem. The directory structure is flattened and recorded as B-trees in files.

The lite format has become the default on Unix-like operating systems as it is much faster and features easier conflict resolution, especially when used with DropBox, Google Drive, etc. The full format, however, leaks fewer information about the filesystem hierarchy, runs relatively independent of the features of the underlying filesystem, and is in general more secure.</source>
        <translation>«Упрощенное форматирование» просто шифрует имена файлов и содержимое файла отдельно, подобно тому, как работает encfs, хотя с большей степенью безопасности.

«Полное форматирование» отображает файлы, каталоги и символические ссылки в виртуальной файловой системе на обычные файлы в базовой файловой системе. Структура каталогов сглажена и записана в виде B-деревьев в файлах.

Упрощенное форматирование стало стандартным для Unix-подобных операционных систем, так как он намного быстрее и обеспечивает более легкое разрешение конфликтов, особенно при использовании с DropBox, Google Диском и т. д. Однако в полном форматировании доступно меньше информации о иерархии файловой системы, выполняется относительно независимо от особенностей базовой файловой системы и в целом более безопасно.</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="47"/>
        <source>Lite Format</source>
        <translation>Упрощенное форматирование</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="52"/>
        <source>Full Format</source>
        <translation>Полное форматирование</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="66"/>
        <source>&amp;OK</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="79"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/securefscreateoptions.ui" line="95"/>
        <source>Select A Folder To Create Config File In(Optional).</source>
        <translation>Укажите путь для файла конфигурации (необязательно).</translation>
    </message>
</context>
<context>
    <name>sirikali</name>
    <message>
        <location filename="../src/sirikali.ui" line="17"/>
        <source>SiriKali</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="55"/>
        <source>Volume Path</source>
        <translation>Путь к тому</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="63"/>
        <source>Mount Point Path</source>
        <translation>Путь к точке монтирования</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="71"/>
        <source>File System</source>
        <translation>Файловая Система</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="79"/>
        <source>Mode</source>
        <translation>Атрибуты Доступа</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="95"/>
        <source>&amp;Create Volume</source>
        <translation>&amp;Создать Том</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="108"/>
        <source>Mount &amp;Volume</source>
        <translation>С&amp;монтировать</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="115"/>
        <source>&amp;Refresh</source>
        <translation>&amp;Обновить</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="129"/>
        <source>&amp;Menu</source>
        <translation>&amp;Меню</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="327"/>
        <source>Unmount All</source>
        <translation>Отмонтировать все</translation>
    </message>
    <message>
        <location filename="../src/sirikali.ui" line="122"/>
        <location filename="../src/sirikali.cpp" line="380"/>
        <source>Favorites</source>
        <translation>Избранное</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="387"/>
        <source>Check For Updates</source>
        <translation>Проверка обновлений</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="390"/>
        <source>About</source>
        <translation>О программе</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="395"/>
        <source>Quit</source>
        <translation>Выход</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="392"/>
        <source>Show/Hide</source>
        <translation>Отобразить/Спрятать окно</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="837"/>
        <source>ERROR: Volume Path Not Given.</source>
        <translation>ОШИБКА: Путь к тому не указан.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="938"/>
        <source>ERROR: Key Not Found In The Backend.</source>
        <translation>ОШИБКА: Ключ не найден.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="943"/>
        <source>ERROR: Failed To Unlock Requested Backend.</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="706"/>
        <location filename="../src/sirikali.cpp" line="756"/>
        <location filename="../src/sirikali.cpp" line="1141"/>
        <location filename="../src/sirikali.cpp" line="1568"/>
        <location filename="../src/sirikali.cpp" line="1684"/>
        <source>ERROR</source>
        <translation>ОШИБКА</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1141"/>
        <source>Failed To Read Volume Properties</source>
        <translation>Не удалось прочитать Свойства тома</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1100"/>
        <location filename="../src/sirikali.cpp" line="1146"/>
        <source>INFORMATION</source>
        <translation>ИНФОРМАЦИЯ</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="118"/>
        <source>Close All Volumes Before Quitting The Application</source>
        <translation>Закройте все тома перед выходом из приложения</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="161"/>
        <location filename="../src/sirikali.cpp" line="163"/>
        <source>%1 Is Not Installed</source>
        <translation>%1 Не установлен</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="297"/>
        <location filename="../src/sirikali.cpp" line="365"/>
        <location filename="../src/sirikali.cpp" line="426"/>
        <location filename="../src/sirikali.cpp" line="467"/>
        <source>Internal Wallet</source>
        <translation>Внутренее хранилище</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="298"/>
        <location filename="../src/sirikali.cpp" line="427"/>
        <location filename="../src/sirikali.cpp" line="469"/>
        <location filename="../src/sirikali.cpp" line="550"/>
        <source>KDE Wallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="299"/>
        <location filename="../src/sirikali.cpp" line="428"/>
        <location filename="../src/sirikali.cpp" line="471"/>
        <location filename="../src/sirikali.cpp" line="554"/>
        <source>Gnome Wallet</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="300"/>
        <location filename="../src/sirikali.cpp" line="430"/>
        <location filename="../src/sirikali.cpp" line="473"/>
        <location filename="../src/sirikali.cpp" line="558"/>
        <source>OSX KeyChain</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="301"/>
        <location filename="../src/sirikali.cpp" line="429"/>
        <location filename="../src/sirikali.cpp" line="546"/>
        <source>None</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="306"/>
        <source>Auto Open Mount Point</source>
        <translation>Автоматически открывать точку монтирования</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="309"/>
        <source>Reuse Mount Point</source>
        <translation>Повторно использовать точку монтирования</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="312"/>
        <source>Autocheck For Updates</source>
        <translation>Автоматическая проверка обновлений</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="315"/>
        <source>Start Minimized</source>
        <translation>Стартовать свернутым</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="318"/>
        <source>Set Mount Point Prefix</source>
        <translation>Задать префикс для точки монтирования</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="321"/>
        <source>Set File Manager</source>
        <translation>Задать файловый менеджер</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="324"/>
        <source>Set External Plugin Executable</source>
        <translation>Задать внешний исполняемый модуль</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="335"/>
        <source>AutoMount Favorites</source>
        <translation>Автоматическое монтирование томов в избранном</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="337"/>
        <source>AutoMount Key Source</source>
        <translation>Источник ключа для автоматического монтирования</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="347"/>
        <source>AutoMount Favorite Volumes At Start Up</source>
        <translation>Автоматическое монтирование тома при старте</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="352"/>
        <source>AutoMount Favorite Volumes When Available</source>
        <translation>Автоматическое монтирование тома когда он доступен</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="357"/>
        <source>Show Mount Dialog When AutoMounting</source>
        <translation>Показывать диалог при автоматическом монтировании тома</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="367"/>
        <source>Change Password</source>
        <translation>Сменить пароль</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="375"/>
        <source>Key Storage</source>
        <translation>Тип хранилища</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="330"/>
        <source>Unmount All And Quit</source>
        <translation>Отмонтировать все и выйти</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="384"/>
        <source>Select Language</source>
        <translation>Локализация</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="391"/>
        <source>FAQ</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="478"/>
        <source>Failed To Locate &quot;securefs&quot; Executable.

Go To &quot;Menu-&gt;Settings-&gt;Editable Options-&gt;Set Executable Search Path&quot;

 And Then Set A Path To Where &quot;securefs&quot; Executable Is Located On The Computer And Restart.</source>
        <translation>Не удалось найти исполняемый файл securefs.

Перейдите в «Меню-&gt; Настройки-&gt; Редактируемые параметры-&gt; Установить исполняемый путь поиска&apos;

И затем установите путь туда, где находится исполняемый файл «securefs» на компьютере и перезагрузите программу.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="706"/>
        <source>SiriKali Failed To Connect To siriPolkit.
Please Report This Serious Bug.</source>
        <translation>SiriKali не удалось подключиться к siriPolkit.
Пожалуйста, сообщите об этой серьезной ошибке.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="756"/>
        <source>&quot;%1&quot; Folder Must Be Writable</source>
        <translation>Папка &quot;%1&quot; должна быть доступна для записи</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="592"/>
        <location filename="../src/sirikali.cpp" line="617"/>
        <source>Manage Favorites</source>
        <translation>Управление Избранным</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="596"/>
        <location filename="../src/sirikali.cpp" line="618"/>
        <source>Mount All</source>
        <translation>Смонтировать все</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1185"/>
        <source>Block Size: %1</source>
        <translation>Размер блока: %1</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1186"/>
        <source>Used Blocks: %2</source>
        <translation>Используемых блоков: %2</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1187"/>
        <source>Free Blocks: %3</source>
        <translation>Свободных блоков:%3</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1188"/>
        <source>Total Blocks %4</source>
        <translation>Всего блоков:%4</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1189"/>
        <source>Used Space: %5</source>
        <translation>Используется места:%5</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1190"/>
        <source>Free Space: %6</source>
        <translation>Свободно места: %6</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1191"/>
        <source>Total Space: %7</source>
        <translation>Всего места: %7</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1192"/>
        <source>Used %: %8</source>
        <translation>Используется %: %8</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1343"/>
        <source>Unmount</source>
        <translation>Отмонтировать</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1341"/>
        <source>Open Folder</source>
        <translation>Открыть директорию</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="386"/>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1345"/>
        <source>Properties</source>
        <translation>Свойства</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1382"/>
        <source>Close Menu</source>
        <translation>Закрыть меню</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1434"/>
        <source>WARNING</source>
        <translation>ПРЕДУПРЕЖДЕНИЕ</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1435"/>
        <source>Could Not Open Mount Point Because &quot;%1&quot; Tool Does Not Appear To Be Working Correctly.</source>
        <translation>Не удалось открыть точку монтирования, потому что инструмент «%1» не работает корректно.</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1482"/>
        <source>&amp;Quit</source>
        <translation>&amp;Выход</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1569"/>
        <source>Permission To Access The Volume Was Denied
Or
The Volume Is Not Supported</source>
        <translation>Нет доступа к тому
или
формат тома не поддерживается</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1589"/>
        <source>Select An Encrypted Volume Directory</source>
        <translation>Выберите папку зашифрованного тома</translation>
    </message>
    <message>
        <location filename="../src/sirikali.cpp" line="1684"/>
        <source>Failed To Unmount %1 Volume</source>
        <translation>Не удалось отключить том %1</translation>
    </message>
</context>
<context>
    <name>walletconfig</name>
    <message>
        <location filename="../src/walletconfig.ui" line="17"/>
        <source>Manage Volumes In A Wallet</source>
        <translation>Управление томами в кошельке</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="32"/>
        <source>&amp;Add</source>
        <translation>&amp;Добавить</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="51"/>
        <source>&amp;Delete</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="64"/>
        <source>Do&amp;ne</source>
        <translation>&amp;Готово</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="111"/>
        <source>Volume ID</source>
        <translation>ID Тома</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.ui" line="116"/>
        <source>Comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="104"/>
        <source>Delete Entry</source>
        <translation>Удалить запись</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="117"/>
        <source>WARNING!</source>
        <translation>ПРЕДУПРЕЖДЕНИЕ!</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="117"/>
        <source>Are you sure you want to delete a volume with an id of &quot;%1&quot;?</source>
        <translation>Вы действительно хотите удалить том с ID &quot;%1&quot;?</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="201"/>
        <source>ERROR!</source>
        <translation>ОШИБКА!</translation>
    </message>
    <message>
        <location filename="../src/walletconfig.cpp" line="201"/>
        <source>Failed To Add the Key In The Wallet.</source>
        <translation>Не удалось добавить ключ в кошелек.</translation>
    </message>
</context>
<context>
    <name>walletconfiginput</name>
    <message>
        <location filename="../src/walletconfiginput.ui" line="17"/>
        <source>Add An Entry To Wallet</source>
        <translation>Добавление записи в кошелек</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="29"/>
        <source>&amp;Add</source>
        <translation>&amp;Добавить</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="42"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="64"/>
        <source>Volume ID</source>
        <translation>ID тома</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="83"/>
        <source>Comment</source>
        <translation>Комментарий</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="102"/>
        <source>Key</source>
        <translation>Ключ</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.ui" line="121"/>
        <source>Repeat Key</source>
        <translation>Повторите ключ</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="102"/>
        <location filename="../src/walletconfiginput.cpp" line="109"/>
        <source>ERROR!</source>
        <translation>ОШИБКА!</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="102"/>
        <source>Atleast one required field is empty</source>
        <translation>По крайней мере одно обязательное поле пустое</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="109"/>
        <source>Passphrases do not match</source>
        <translation>Пароль не может быть пустым</translation>
    </message>
    <message>
        <location filename="../src/walletconfiginput.cpp" line="132"/>
        <source>Select A Volume</source>
        <translation>Выберите том</translation>
    </message>
</context>
</TS>
