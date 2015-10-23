function ClipboardController($scope) {

	$scope.pasted = ' ';

	$scope.copy = function () {
		var clipboard = require('clipboard');
		clipboard.writeText('Hello World!');
	}

	$scope.paste = function () {
		var clipboard = require('clipboard');
		$scope.pasted = clipboard.readText();
	}
}

module.exports = ClipboardController;