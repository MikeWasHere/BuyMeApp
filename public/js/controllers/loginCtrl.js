angular.module('LoginCtrl', []).controller('LoginController', function($scope, Authentification, $firebaseAuth, $firebaseObject, $firebaseArray) {

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


  // CREATE A REFERENCE TO FIREBASE
  var messagesRef = new Firebase('https://offerup-clone.firebaseio.com/');
  var convosRef = messagesRef.child('convos');
  
  $scope.elMessage = $firebaseObject(convosRef);
  $scope.authObj = $firebaseAuth(convosRef);

  console.log('elmessages ', $scope.elMessage);

  $scope.authObj.$onAuth(function(authData) {

    $scope.authData = authData;
    // If local login? 
    if(authData.password != null){
        $scope.chatUsername = authData.password.email;
    } 
})

  $scope.messages = $firebaseArray(convosRef);

    $scope.addMessage = function(chatMessage) {
        $scope.messages.$add({
            from: $scope.chatUsername, 
            content: this.chatMessage
        });
    }

});