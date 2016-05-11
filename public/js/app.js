$(document).foundation();

var myApp = angular.module('sampleApp', ['ngRoute', 'appRoutes', 'firebase', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'AuthService', 'LoginCtrl'])
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