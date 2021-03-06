'use strict';

/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home.html'
	}).state('restoration', {
		url: '/restoration',
		templateUrl: 'views/restoration.html'
	}).state('services', {
		url: '/services',
		templateUrl: 'views/services.html'
	}).state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html'
	});
	$urlRouterProvider.otherwise('/');
});
'use strict';

/**
 * Created by Joshua Baert on 11/2/2016.
 */

angular.module('main').directive('homeBackground', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			element.css('background-image', 'url("https://github.com/JoshuaBaert/import-auto/blob/master/img/cars/Saab.jpg?raw=true")');
			window.document.title = 'Home Provo Auto Repair';
		}
	};
}).directive('contactBackground', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			element.css('background-image', 'url("img/cars/Porsche.jpg")');
			window.document.title = 'Contact Provo Auto Repair';
		}
	};
}).directive('restorationBackground', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			element.css('background-image', 'url("img/cars/healey.jpg")');
			window.document.title = 'restoration Provo Auto Repair';
		}
	};
}).directive('servicesBackground', function () {
	return {
		restrict: 'A',
		link: function link(scope, element, attrs) {
			element.css('background-image', 'url("img/cars/mercedes-benz.jpg")');
			window.document.title = 'services Provo Auto Repair';
		}
	};
}).directive('hours', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/hours-mini.html'
	};
}).directive('contact', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/contact-mini.html'
	};
}).directive('services', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/services-mini.html',
		link: function link(scope, element, attrs) {}
	};
}).directive('mapsClick', function () {
	return {
		restrict: 'EA',
		link: function link(scope, element, attrs) {
			$(element).on('click', function () {
				$('#map').css('pointer-events', 'auto');
			});
		}
	};
}).directive('menu', function () {
	return {
		restrict: 'E',
		link: function link(scope, element, attrs) {
			$(document).ready(function () {
				$('.logo').attr('src', './img/orangeLogo.png');
			});
			$(window).on('scroll', function () {
				var winScroll = $(this).scrollTop();
				console.log(winScroll);

				if (winScroll > 50) {
					$('header').addClass('scroll-menu');
					$('.logo').addClass('logo-small logo-black').removeClass('logo-large');
					setTimeout(function () {
						$('.logo').attr('src', './img/blackLogo.png');
					}, 550);
				}if (winScroll <= 50) {
					$('header').removeClass('scroll-menu');
					$('.logo').removeClass('logo-small logo-black').addClass('logo-large');
					setTimeout(function () {
						$('.logo').attr('src', './img/orangeLogo.png');
					}, 550);
				}
			});
		}
	};
});
'use strict';

/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main').controller('mainCtrl', function ($scope, mainServc) {

	$scope.schedule = mainServc.getSchedule();

	$scope.makes = mainServc.getMakes();

	$scope.clickMe = function () {
		$('#map').on('click', function () {
			$('#map').css('pointer-events', 'auto');
		});
	};
});
'use strict';

/**
 * Created by Joshua Baert on 10/28/2016.
 */

var makes = [{
	make: 'IAC',
	image: 'img/IACcar.png',
	desc: ['paragraph 1', 'paragraph 2']
}, {
	make: 'funny',
	image: 'img/cars/funny1.jpg',
	desc: ['paragraph 1', 'paragraph 2']
}, {
	make: 'funny',
	image: 'img/cars/funny2.jpg',
	desc: ['paragraph 1', 'paragraph 2']
}, {
	make: 'funny',
	image: 'img/cars/funny3.jpg',
	desc: ['paragraph 1', 'paragraph 2']
}, {
	make: 'Land Rover',
	image: 'img/land-rover.png',
	desc: ['paragraph 1', 'paragraph 2']
}];

var schedule = [{
	day: 'Monday',
	hours: '8 AM - 5 PM'
}, {
	day: 'Tuesday',
	hours: '8 AM - 5 PM'
}, {
	day: 'Wednesday',
	hours: '8 AM - 5 PM'
}, {
	day: 'Thursday',
	hours: '8 AM - 5 PM'
}, {
	day: 'Friday',
	hours: '8 AM - 5 PM'
}, {
	day: 'Saturday & Sunday',
	hours: 'Closed'
}];

angular.module('main').service('mainServc', function ($http, $q) {

	this.getSchedule = function () {
		return schedule;
	};

	this.getMakes = function () {
		return makes;
	};
});
//# sourceMappingURL=maps/bundle.js.map
