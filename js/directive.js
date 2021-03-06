/**
 * Created by Joshua Baert on 11/2/2016.
 */

angular.module('main')
		.directive('homeBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("https://github.com/JoshuaBaert/import-auto/blob/master/img/cars/Saab.jpg?raw=true")');
					window.document.title = 'Home Provo Auto Repair'
				}
			}
		})
		.directive('contactBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("img/cars/Porsche.jpg")');
					window.document.title = 'Contact Provo Auto Repair'
				}
			}
		})
		.directive('restorationBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("img/cars/healey.jpg")');
					window.document.title = 'restoration Provo Auto Repair'
				}
			}
		})
		.directive('servicesBackground', function () {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.css('background-image', 'url("img/cars/mercedes-benz.jpg")');
					window.document.title = 'services Provo Auto Repair'
				}
			}
		})
		.directive('hours', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/hours-mini.html',
			}
		})
		.directive('contact', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/contact-mini.html',
			}
		})
		.directive('services', function () {
			return {
				restrict: 'A',
				templateUrl: 'views/services-mini.html',
				link: function (scope, element, attrs) {
					
				}
			}
		})
		.directive('mapsClick', function () {
			return {
				restrict: 'EA',
				link: function (scope, element, attrs) {
					$(element).on('click', function () {
						$('#map').css('pointer-events', 'auto');
					});
				}
			}
		})
		.directive('menu', function () {
			return {
				restrict: 'E',
				link: function (scope, element, attrs) {
					$(document).ready(function () {
						$('.logo').attr('src','./img/orangeLogo.png')
					});
					$(window).on('scroll', function () {
						var winScroll = $(this).scrollTop();
						console.log(winScroll);
						
						if (winScroll > 50) {
							$('header').addClass('scroll-menu');
							$('.logo').addClass('logo-small logo-black').removeClass('logo-large');
							setTimeout(function () {
									$('.logo').attr('src', './img/blackLogo.png');
							}, 550)
						}
						if (winScroll <= 50) {
							$('header').removeClass('scroll-menu');
							$('.logo').removeClass('logo-small logo-black').addClass('logo-large');
							setTimeout(function () {
								$('.logo').attr('src', './img/orangeLogo.png');
							},550);
							
						}
					})
				}
			}
		});