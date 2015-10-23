function PowerController($scope) {

	$scope.monitorPower = function () {
		var remote = require('remote');
		var powerMonitor = remote.require('power-monitor');
		powerMonitor.on('on-ac', function() {
			console.log('The machine has been plugged into a power source.');
		});
		powerMonitor.on('on-battery', function () {
			console.log('The machine has been unplugged from a power source.');
		});
	}
}

module.exports = PowerController;