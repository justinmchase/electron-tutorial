function DialogController($scope) {

	$scope.openFile = function () {
		var remote = require('remote');
		var dialog = remote.require('dialog');
		dialog.showOpenDialog({
			title: 'Open Text Files',
			properties: ['openFile', 'multiSelections'],
			filters: [
				{ name: 'Text Files', extensions: ['txt'] },
				{ name: 'All Files', extensions: ['*'] }
			]
		}, function (files) {
			dialog.showMessageBox({
				type: 'info',
				title: 'Selected Files',
				buttons: ['Ok'],
				message: 'The files you selected were:',
				detail: files.join('\n')
			});
		});
	}

}

module.exports = DialogController;