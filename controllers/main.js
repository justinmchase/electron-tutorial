
function MainController($scope, $state) {

	$scope.save = function () {
		localStorage['categories'] = JSON.stringify($scope.categories);
	}

	if (localStorage['categories']) {
		$scope.categories = JSON.parse(localStorage['categories']);
	} else {
		$scope.categories = [
			{
				name: 'The Basics',
				topics: [
					{ name: 'Setup', state: 'setup' },
					{ name: 'New Project', state: 'new' },
					{ name: 'Angular', state: 'angular' },
				]
			},
			{
				name: 'Apis',
				topics: [
					{ name: 'app', state: 'app' },
					{ name: 'browser-window', state: 'browser-window' },
					{ name: 'dialog', state: 'dialog' },
					{ name: 'global-shortcut', state: 'global-shortcut' },
					{ name: 'ipc', state: 'ipc' },
					{ name: 'tray', state: 'tray' },
					{ name: 'menus', state: 'menus' },
					{ name: 'power', state: 'power' },
					{ name: 'clipboard', state: 'clipboard' },
					{ name: 'other', state: 'other' },
				]
			},
			{
				name: 'Advanced',
				topics: [
					{ name: 'Debugging', state: 'debugging' },
					{ name: 'Native Addons', state: 'native' },
					{ name: 'Packaging', state: 'packaging' },
					{ name: 'Deployment', state: 'deployment' },
					{ name: 'Auto Updates', state: 'updates' },
				]
			}
		];
	}

	$scope.navigate = function (topic) {
		topic.visited = true;
		$scope.save();
		$state.go(topic.state)
	}


}


module.exports = MainController;