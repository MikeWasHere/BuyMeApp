angular.module('LoginCtrl', []).controller('LoginController', function($scope, Authentification) {

	$scope.login = function() {
		Authentification.login($scope.user);
	}; //Login

	$scope.logout = function() {
		Authentification.logout();
	}; //Logout

	$scope.register = function() {
		Authentification.register($scope.user);
	}; //Register

    $scope.myVar = false;
    $scope.toggle = function() {
    $scope.myVar = !$scope.myVar;
    };

});





// ******************** CREATING USER ACCOUNT WITH FIREBASE ********************

// var ref = new Firebase("https://offerup-clone.firebaseio.com");
// ref.createUser({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//   }
// });

// ******************** LOGGING THE USER WITH FIREBASE ********************

// var ref = new Firebase("https://offerup-clone.firebaseio.com");
// ref.authWithPassword({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });