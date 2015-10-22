

function BrowserWindow($scope) {

	$scope.launch = function () {

		var remote = require('remote');
		var BrowserWindow = remote.require('browser-window');

		var win = new BrowserWindow({ width: 800, height: 600 });
		win.on('closed', function() {
			win = null;
		});
		win.loadUrl('https://github.com');
		win.show();

	}

}

module.exports = BrowserWindow;