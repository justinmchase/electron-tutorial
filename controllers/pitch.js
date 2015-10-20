
function PitchController($scope, $) {

	var carousel = $('.carousel')

	$scope.next = function () {
		carousel.carousel('next');
	}

	$scope.prev = function () {
		carousel.carousel('prev');
	}

	carousel.on('slid.bs.carousel', function () {
		carousel.carousel('pause');
	})

}

module.exports = PitchController;