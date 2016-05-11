
angular.module('MainCtrl', ['firebase']).controller('MainController', function($scope, $http, $firebaseArray) {

	var URL = "https://offerup-clone.firebaseio.com/";
  var list = $firebaseArray(new Firebase(URL));
  $scope.items = list;
  console.log("Firebase Data", $scope.items);

    // ***************** ADDING A PRODUCT *****************
    $scope.addProduct = function () {
      console.log("form data", $scope.product);
      list.$add($scope.product).then(function(ref) {
        var id = ref.key();
        console.log("added product with id " + id);
        list.$indexFor(id); // returns location in the array
        });
      }

    // ***************** REMOVING A PRODUCT *****************    
    $scope.removeProduct = function (index) {
      console.log("index", index);
      list.$remove(index).then(function(ref) {
        ref.key() === list.$id; // true
        });
      };-0

    // ***************** EDIT A PRODUCT *****************
    $scope.editProduct = function (product) {
      console.log("index", product);
      list.$save(product).then(function(ref) {
        ref.key() === product.$id;
        $scope.edit = false // true
        });
      };	

});