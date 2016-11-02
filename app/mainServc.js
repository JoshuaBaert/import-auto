/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main').service('mainServc', function ($http, $q) {
	
	var makes = [
		{
			make: 'volvo',
			image: '../img/cars/volvo.jpg',
			desc: [
					'paragraph 1',
					'paragraph 2',
			],
		}
	];
	
	var hours = [
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
			hours: '8 AM - 5 PM'
		},
	]
	
	
});