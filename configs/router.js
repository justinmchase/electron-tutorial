
function routerConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/main');
	$stateProvider
		.state('main', {
			url: '/main',
			controller: 'MainController',
			templateUrl: path.join(__dirname, '../views/main.html'),
			data: {
				css: 'styles/main.css'
			}
		})
		.state('pitch', {
			url: '/pitch',
			controller: 'PitchController',
			templateUrl: path.join(__dirname, '../views/pitch.html'),
			data: {
				css: 'styles/pitch.css'
			}
		})
		.state('setup', {
			url: '/setup', 
			controller: 'SetupController',
			templateUrl: path.join(__dirname, '../views/setup.html'),
			data: {
				css: 'styles/setup.css'
			}
		})
		.state('new', {
			url: '/new', 
			controller: 'NewController',
			templateUrl: path.join(__dirname, '../views/new.html'),
			data: {
				css: 'styles/new.css'
			}
		})
		.state('angular', {
			url: '/angular',
			controller: 'AngularController',
			templateUrl: path.join(__dirname, '../views/angular.html'),
			data: {
				css: 'styles/angular.css'
			}
		})
		.state('app', {
			url: '/app',
			controller: 'AppController',
			templateUrl: path.join(__dirname, '../views/app.html'),
			data: {
				css: 'styles/app.css'
			}
		})
		.state('browser-window', {
			url: '/browser-window',
			controller: 'BrowserWindowController',
			templateUrl: path.join(__dirname, '../views/browser-window.html'),
			data: {
				css: 'styles/browser-window.css'
			}
		})
		.state('dialog', {
			url: '/dialog',
			controller: 'DialogController',
			templateUrl: path.join(__dirname, '../views/dialog.html'),
			data: {
				css: 'styles/dialog.css'
			}
		})
		.state('global-shortcut', {
			url: '/global-shortcut',
			templateUrl: path.join(__dirname, '../views/global-shortcut.html'),
		})
		.state('ipc', {
			url: '/ipc',
			templateUrl: path.join(__dirname, '../views/ipc.html'),
		})
		.state('menus', {
			url: '/menus',
			templateUrl: path.join(__dirname, '../views/menus.html'),
			controller: 'MenusController',
		})
		.state('power', {
			url: '/power',
			templateUrl: path.join(__dirname, '../views/power.html'),
			controller: 'PowerController'
		})
		.state('tray', {
			url: '/tray',
			templateUrl: path.join(__dirname, '../views/tray.html'),
			controller: 'TrayController'
		})
		.state('clipboard', {
			url: '/clipboard',
			templateUrl: path.join(__dirname, '../views/clipboard.html'),
			controller: 'ClipboardController'
		})
		.state('other', {
			url: '/other',
			templateUrl: path.join(__dirname, '../views/other.html')
		})
		.state('debugging', {
			url: '/debugging',
			templateUrl: path.join(__dirname, '../views/debugging.html')
		})
		.state('native', {
			url: '/native',
			templateUrl: path.join(__dirname, '../views/native.html'),
			controller: 'NativeController'
		})
		.state('deployment', {
			url: '/deployment',
			templateUrl: path.join(__dirname, '../views/deployment.html'),
		})
		.state('updates', {
			url: '/updates',
			templateUrl: path.join(__dirname, '../views/updates.html')
		})
}

module.exports = routerConfig;