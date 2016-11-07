/**
 * Created by Joshua Baert on 10/28/2016.
 */

angular.module('main', ['ui.router'])
		.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
					.state('home', {
						url: '/',
						templateUrl: 'views/home.html',
					})
					.state('restoration', {
						url: '/restoration',
						templateUrl: 'views/restoration.html',
					})
					.state('services', {
						url: '/services',
						templateUrl: 'views/services.html',
					})
					.state('contact', {
						url: '/contact',
						templateUrl: 'views/contact.html'
					});
			$urlRouterProvider.otherwise('/')
		});
