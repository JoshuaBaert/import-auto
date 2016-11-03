/**
 * Created by Joshua Baert on 11/2/2016.
 */

angular.module('main')
		.directive('homeBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("img/cars/Porsche.jpg")');
					window.document.title = 'Home'
				}
			}
		})
		.directive('hours', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/hours-mini.html',
				link: function (scope, element, attrs) {
					element.css('background', 'rgba(154, 143, 151, 0.79)');
				}
			}
		})
		.directive('contact', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/contact-mini.html',
				link: function (scope, element, attrs) {
					
				}
			}
		})
		.directive('services', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/services-mini.html',
				link: function (scope, element, attrs) {
					
				}
			}
		});