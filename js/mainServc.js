/**
 * Created by Joshua Baert on 10/28/2016.
 */

var makes = [
	{
		make: 'IAC',
		image: 'img/IACcar.png',
		desc: [
			'paragraph 1',
			'paragraph 2',
		],
	},
	{
		make: 'funny',
		image: 'img/cars/funny1.jpg',
		desc: [
			'paragraph 1',
			'paragraph 2',
		],
	},
	{
		make: 'funny',
		image: 'img/cars/funny2.jpg',
		desc: [
			'paragraph 1',
			'paragraph 2',
		],
	},
	{
		make: 'funny',
		image: 'img/cars/funny3.jpg',
		desc: [
			'paragraph 1',
			'paragraph 2',
		],
	},
	{
		make: 'Land Rover',
		image: 'img/land-rover.png',
		desc: [
			'paragraph 1',
			'paragraph 2',
		],
	}
	
	
	
];

var schedule = [
	{
		day: 'Monday',
		hours: '8 AM - 5 PM'
	},
	{
		day: 'Tuesday',
		hours: '8 AM - 5 PM'
	},
	{
		day: 'Wednesday',
		hours: '8 AM - 5 PM'
	},
	{
		day: 'Thursday',
		hours: '8 AM - 5 PM'
	},
	{
		day: 'Friday',
		hours: '8 AM - 5 PM'
	},
	{
		day: 'Saturday & Sunday',
		hours: 'Closed'
	},
];

angular.module('main').service('mainServc', function ($http, $q) {
	
	this.getSchedule = function () {
		return schedule
	};
	
	this.getMakes = function () {
		return makes
	};
	
	
	
});