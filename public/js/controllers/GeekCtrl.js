(function (){

angular.module('GeekCtrl', []).controller('GeekController', function($scope,$firebaseArray) {

	console.log("Loading the controller correctly");	

	var URL = "https://offerup-clone.firebaseio.com/";
    var list = $firebaseArray(new Firebase(URL));
    $scope.items = list;
    console.log("Firebase Data", $scope.items);

});



})();