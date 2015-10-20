
function run($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.history = [];
    $rootScope.$on("$stateChangeSuccess",  function(event, toState, toParams, fromState, fromParams) {
        // to be used for back button //won't work when page is reloaded.
        if (!fromState.name) fromState.name = 'main';
        $rootScope.history.push({
        	name: fromState.name,
        	params: fromParams
        });
    });
    //back button function called from back button's ng-click="back()"
    $rootScope.back = function() {
    	if ($rootScope.history.length) {
	    	var last = $rootScope.history.pop();
	        $state.go(last.name, last.params);
	    } else {
	    	$state.go('main');
	    }
    };
}


module.exports = run;