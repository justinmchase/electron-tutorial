var path = require('path');

if(localStorage) localStorage.clear();

window.jQuery = require('jquery');
require('bootstrap');

angular
	.module('main', ['ui.router', 'uiRouterStyles'])
	.value('$', window.jQuery)
	.controller('PitchController', require('./controllers/pitch'))
	.controller('MainController', require('./controllers/main'))
	.controller('SetupController', require('./controllers/setup'))
	.controller('NewController', require('./controllers/new'))
	.controller('AppController', require('./controllers/app'))
	.controller('AngularController', require('./controllers/angular'))
	.controller('BrowserWindowController', require('./controllers/browserWindow'))
	.controller('DialogController', require('./controllers/dialog'))
	.controller('MenusController', require('./controllers/menus'))
	.controller('PowerController', require('./controllers/power'))
	.controller('TrayController', require('./controllers/tray'))
	.controller('ClipboardController', require('./controllers/clipboard'))
	.controller('NativeController', require('./controllers/native'))
	.config(require('./configs/router'))
	.run(require('./configs/run'));
	