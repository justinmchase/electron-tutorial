function MenusController($scope) {

	$scope.setMenu = function () {
		var remote = require('remote');
		var Menu = remote.require('menu');
		var template = [
			{
				label: 'Hello World!',
				submenu: [
					{
						label: 'To Console',
						accerator: 'CmdOrCtrl+H',
						click: function (item, focusedWindow) {
							console.log('Hello World!');
						}
					}
				]
			}
		];
		menu = Menu.buildFromTemplate(template);
		Menu.setApplicationMenu(menu);
	}

}

module.exports = MenusController;