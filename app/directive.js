/**
 * Created by Joshua Baert on 11/2/2016.
 */

angular.module('main')
		.directive('homeBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("img/cars/Porsche2.jpg")')
					window.document.title = 'Home'
				}
			}
		});