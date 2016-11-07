/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main').controller('mainCtrl', function ($scope, mainServc) {
	
	$scope.schedule = mainServc.getSchedule();
	
	$scope.makes = mainServc.getMakes();
	
	$scope.clickMe = function () {
		$('#map').on('click', function () {
			$('#map').css('pointer-events', 'auto')
		});
	}
	
});