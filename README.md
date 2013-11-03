# README zur Stockwatch-Anwendung

Autor: Jan Beilicke <dev@jotbe-fx.de>

## Mögliche Fehlerquellen

Tests lassen sich mit `$ grunt test` ausführen. Beim ersten Aufruf kann der Befehl je nach Karma-Version mit Fehlern quittiert werden:

    ...
    Running "karma:unit" (karma) task
    WARN [config]: JASMINE is not supported anymore.
            Please use `frameworks = ["jasmine"];` instead.
    WARN [config]: JASMINE_ADAPTER is not supported anymore.
            Please use `frameworks = ["jasmine"];` instead.
    WARN [config]: LOG_INFO is not supported anymore.
      Please use `karma.LOG_INFO` instead.
    ERROR [config]: Config file must export a function!
      module.exports = function(config) {
        config.set({
          // your config
        });
      };

Hier löscht man als Workaround die Datei `karma.conf.js` und generiert eine aktuelle, passend zur jeweiligen Karma-Version. Es ist darauf zu achten, die Angular-Komponenten `app/bower_components/angular/angular.js`, `app/bower_components/angular-mocks/angular-mocks.js` sowie weitere abhängige Quellen mit anzugeben. Falls man in einem zu testenden Modul eine Abhängigkeit eingetragen hat, beispielsweise `angular.module('stockwatchApp', ['ui'])`, muss man in der Datei `karma.conf.js` auf jeden Fall den Pfad zur JavaScript-Datei der Angular-UI(`ui`) angeben. Nach dem Speichern der Änderungen sind bereits laufende Karma-Instanzen neuzustarten, damit die geänderte Konfiguration Berücksichtigung findet.

Für die E2E-Konfiguration speichert man die neu generierte `karma.conf.js` unter dem Namen `karma-e2e.conf.js` und passt sie leicht an:

    frameworks: ['ng-scenario'],
    port: 9877,
    proxies: {
      '/': 'http://localhost:9000/'
    },
    urlRoot: '/_karma_/',
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/*.js',
      'app/scripts/**/*.js',
      'test/e2e/*.js'
    ],

Nach dem Erstellen des Verzeichnises `test/e2e/` legt man dort sämtliche E2E-Tests ab.

Läuft beim Aufruf von `grunt test` bereits ein `grunt server`, erscheint ebenfalls eine Fehlermeldung:

    $ grunt test
    Running "clean:server" (clean) task

    Running "concurrent:test" (concurrent) task

        Running "coffee:dist" (coffee) task

        Running "coffee:test" (coffee) task

        Done, without errors.

    Running "connect:test" (connect) task
    Fatal error: Port 9000 is already in use by another process.

Will man beide parallel betreiben, ist `Gruntfile.js` der `config.test.options.port` mit dem Wert `9001` hinzuzufügen.

Zugriff von außen ist möglich, wenn man den Grunt-Server nicht an `localhost` bindet, sondern an einen Hostnamen, der im lokalen Netzwerk erreichbar ist, die IP-Adresse `0.0.0.0` oder eine feste. Hierbei sollte man immer mögliche Sicherheitsprobleme bedenken.

Möchte man den Server beispielsweise über `stockwatch-server.lan` aufrufen, trägt man diesen Hostnamen als Wert in `connect.options.hostname` ein. Zusätzlich ersetzt man den Wert in `open.server.url` mit `'http://<%= connect.options.hostname %>:<%= connect.options.port %>'`.

Weitere Fehlermeldungen können beim Ausführen von `$ grunt server` auftreten:

    Running "watch" task
    Waiting...Fatal error: Port 35729 is already in use by another process.

In diesem Fall hat man vermutlich in seiner IDE ein Live-Reload-Plug-in laufen, das standardmäßig den Port 35729 verwendet. Grunt achtet auf Veränderungen in den Projektdateien und lädt bei Bedarf automatisch die Umgebung neu. Hier hilft es, im `Gruntfile` den `LIVE_RELOAD_PORT` zu ändern, beispielsweise auf Port 35728.

Zuletzt wirft `grunt server` eventuell den Ausnahmefehler `Error: watch ENOSPC`. Das bedeutet meist, dass die Anzahl der zu beobachtenden Dateien überschritten wurde. Erhöhen lässt sich das Limit in der VM mit dem Befehl `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`.
