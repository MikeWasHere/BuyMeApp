angular.module('LoginCtrl', []).controller('LoginController', function($scope, Authentification) {

	$scope.login = function() {
		Authentification.login($scope.user);
	}; //Login

	$scope.logout = function() {

		console.log("trigger call to logged out", Authentification);
		Authentification.logout();
	}; //Logout

	$scope.register = function() {
		Authentification.register($scope.user);
	}; //Register

    $scope.myVar = false;
    $scope.toggle = function() {
    $scope.myVar = !$scope.myVar;
    }; //Controlls the ng-hide/show through a button

});