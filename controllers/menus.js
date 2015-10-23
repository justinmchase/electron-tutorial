function MenusController($scope) {

	$scope.show = function () {
		var remote = require('remote');
		var path = require('path');
		var Tray = remote.require('tray');
		var Menu = remote.require('menu');
		var template = [
		  {
		    label: 'Surly Darkness',
		    click: function (item, focusedWindow) {
		      console.log('Surly it is!');
		    }
		  },
		  {
		  	label: 'More Surly Darkness',
		  	click: function (item, focusedWindow) {
		      console.log('Yay!');
		  	}
		  }
		];
		var menu = Menu.buildFromTemplate(template);
		$scope.tray = new Tray(path.join(__dirname, '../images/beer.png'));
		$scope.tray.setToolTip('Buy me a beer!');
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