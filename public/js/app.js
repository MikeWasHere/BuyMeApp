$(document).foundation();

var myApp = angular.module('sampleApp', ['ngRoute', 'firebase', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'AuthService', 'LoginCtrl'])
	.constant('FIREBASE_URL', 'https://offerup-clone.firebaseio.com/');

	myApp.run(['$rootScope', '$location',
		function($rootScope, $location) {
			$rootScope.$on('$routeChangeError', 
				function(event, next, previous, error) {
					if (error=='AUTH_REQUIRED') {
						$rootScope.message = 'Sorry, You must be logged in to access this page';
						$location.path('/login');
					} // AUTH REQUIRED
				}); //event info
		}]); //run

	myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

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

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'LoginController'
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
			controller: 'LoginController',
			resolve: {
				"currentAuth": ["Authentification", function(Authentification) {
					console.log(Authentification);
					return Authentification.requireAuth();
				}] //Current Auth
			} //Resolve
		})
		
		.otherwise({
			redirectTo: '/login'
		});

	// $locationProvider.html5Mode(true);

}]);