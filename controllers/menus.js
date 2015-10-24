function MenusController($scope) {

	$scope.show = function () {
		var remote = require('remote');
		var path = require('path');
		var Tray = remote.require('tray');
		var Menu = remote.require('menu');
		var template = [
		  {
		    label: 'Jason Bock!',
		    click: function (item, focusedWindow) {
		      console.log('Jason Bock!');
		    }
		  },
		  {
		  	label: 'Had lucious locks!',
		  	click: function (item, focusedWindow) {
		      console.log('Had lucious locks!');
		  	}
		  }
		];
		var menu = Menu.buildFromTemplate(template);
		$scope.tray = new Tray(path.join(__dirname, '../images/jason.png'));
		$scope.tray.setToolTip('Jason Bock!');
		$scope.tray.setContextMenu(menu);
	}

	$scope.hide = function () {
		if ($scope.tray) {
			$scope.tray.destroy();
			$scope.tray = null;
		}
	}

}

module.exports = MenusController;