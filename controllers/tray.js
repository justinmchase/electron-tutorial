var path = require('path');

function TrayController($scope) {

	$scope.show = function () {
		var remote = require('remote');
		var Tray = remote.require('tray');
		$scope.appIcon = new Tray(path.join(__dirname, '../images/beer.png'));
		$scope.appIcon.setToolTip('Buy me a beer!');
	}

	$scope.hide = function () {
		if ($scope.appIcon) {
			$scope.appIcon.destroy();
			$scope.appIcon = null;
		}
	}
}

module.exports = TrayController;