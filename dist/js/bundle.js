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
		templateURL: 'views/restoration.html'
	}).state('services', {
		url: 'services',
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
			element.css('background-image', 'url("img/cars/Porsche.jpg")');
			window.document.title = 'Home';
		}
	};
}).directive('hours', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/hours-mini.html',
		link: function link(scope, element, attrs) {
			element.css('background', 'rgba(154, 143, 151, 0.79)');
		}
	};
}).directive('contact', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/contact-mini.html',
		link: function link(scope, element, attrs) {}
	};
}).directive('services', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/services-mini.html',
		link: function link(scope, element, attrs) {}
	};
});
'use strict';

/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main').controller('mainCtrl', function ($scope, mainServc) {

	$scope.notWorking = 'Working';

	$scope.schedule = mainServc.getSchedule();
});
'use strict';

/**
 * Created by Joshua Baert on 10/28/2016.
 */

var makes = [{
	make: 'volvo',
	image: '../img/cars/volvo.jpg',
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
