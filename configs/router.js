
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
}

module.exports = routerConfig;