var path = require('path');

function AppController($scope) {

	$scope.quit = function () {
		var remote = require('remote');
		var app = remote.require('app');
		app.quit();
	}

	$scope.setUserTasks = function () {
		var remote = require('remote');
		var app = remote.require('app');
		app.setUserTasks([
			{ 
				title: 'Example!',
				program: process.execPath,
				arguments: '',
				description: 'Just an example of a user task.'
			},
			{
				title: 'Another Task',
				program: process.execPath,
				arguments: '',
				description: 'Another example of a user task.'
			}
		]);
	}

	$scope.clearUserTasks = function () {
		var remote = require('remote');
		var app = remote.require('app');
		app.setUserTasks([]);
	}

}

module.exports = AppController;