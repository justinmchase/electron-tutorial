var path = require('path');

window.jQuery = require('jquery');
require('bootstrap');

angular
	.module('main', ['ui.router', 'uiRouterStyles'])
	.value('$', window.jQuery)
	.controller('PitchController', require('./controllers/pitch'))
	.controller('MainController', require('./controllers/main'))
	.config(require('./configs/router'))
	.run(require('./configs/run'));
	