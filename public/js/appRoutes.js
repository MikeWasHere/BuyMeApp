angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/store', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		})

		.when('/about', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'	
		})

		.when('/ingredients', {
			templateUrl: 'views/ingredients.html',
			controller: 'NerdController'
		})

		.when('/social', {
			templateUrl: 'views/social.html',
			controller: 'NerdController'	
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'NerdController'	
		})

		.when('/master', {
			templateUrl: 'views/master.html',
			controller: 'NerdController'	
		});

	// $locationProvider.html5Mode(true);

}]);