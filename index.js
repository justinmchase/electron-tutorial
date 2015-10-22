var path = require('path');

window.jQuery = require('jquery');
require('bootstrap');

angular
	.module('main', ['ui.router', 'uiRouterStyles'])
	.value('$', window.jQuery)
	.controller('PitchController', require('./controllers/pitch'))
	.controller('MainController', require('./controllers/main'))
	.controller('SetupController', require('./controllers/setup'))
	.controller('NewController', require('./controllers/new'))
	.controller('AngularController', require('./controllers/angular'))
	.controller('BrowserWindowController', require('./controllers/browserWindow'))
	.controller('DialogController', require('./controllers/dialog'))
	.config(require('./configs/router'))
	.run(require('./configs/run'));
	