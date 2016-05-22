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

  // ******** REGISTER DOM ELEMENTS ********

  // Registers the message field
  // var messageField = $('#messageInput');
  // // Registers the name field
  // var nameField = $('#nameInput');
  // // Registers where the messages show up
  // var messageList = $('#example-messages');

  // // LISTEN FOR KEYPRESS EVENT
  // messageField.keypress(function (e) {
  //   if (e.keyCode == 13) {
  //     //FIELD VALUES
  //     var username = nameField.val();
  //     var message = messageField.val();

  //     //SAVE DATA TO FIREBASE AND EMPTY FIELD
  //     messagesRef.push({name:username, text:message});
  //     messageField.val(''); // <--- Why is this here??
  //   }
  // });

  // // Add a callback that is triggered for each chat message.
  // convosRef.limitToLast(10).on('child_added', function (snapshot) {
  //   //GET DATA
  //   var data = snapshot.val();
  //   var username = data.name || "anonymous";
  //   var message = data.text;

  //   $scope.currentConvo.push({
  //     author: data.name || "anonymous",
  //     text: data.text
  //   });

  //   //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
  //   var messageElement = $("<li>");
  //   var nameElement = $("<strong class='example-chat-username'></strong>")
  //   nameElement.text(username);
  //   messageElement.text(message).prepend(nameElement);

  //   //ADD MESSAGE
  //   messageList.append(messageElement)

  //   //SCROLL TO BOTTOM OF MESSAGE LIST
  //   messageList[0].scrollTop = messageList[0].scrollHeight;
  // });

});