(function (){

angular.module('GeekCtrl', []).controller('GeekController', function($scope,$firebaseArray) {

	console.log("Loading the controller correctly");	

	var URL = "https://bbaklava.firebaseio.com/";
    var list = $firebaseArray(new Firebase(URL));
    $scope.items = list;
    console.log("Firebase Data", $scope.items);

	// $scope.baklavas = [
	// {
	// 	name: 'Baklava with Walnuts',
	// 	price: 5.00,
	// 	description: 'Comes with 4 Pieces',
	// 	canPurchase: true,
	// 	images: [{
	// 		full: '',
	// 		thumb: 'http://i.imgur.com/EzXGl0J.jpg'
	// 	},
	// 	]
	// },
	// {
	// 	name: 'Baklava with Almonds',
	// 	price: 5.00,
	// 	description: 'Comes with 4 Pieces',
	// 	canPurchase: true,
	// 	images: [{
	// 		full: '',
	// 		thumb: 'http://i.imgur.com/L6sqa9b.jpg'
	// 	},
	// 	]
	// },
	// {
	// 	name: 'Baklava with Pastachio',
	// 	price: 5.00,
	// 	description: 'Comes with 4 Pieces',
	// 	canPurchase: true,
	// 	images: [{
	// 		full: '',
	// 		thumb: 'http://i.imgur.com/Rpcm2zs.jpg'
	// 	},
	// 	]
	// },
	// {
	// 	name: 'Baklava with Pastachio',
	// 	price: 5.00,
	// 	description: 'Comes with 4 Pieces',
	// 	canPurchase: true,
	// 	images: [{
	// 		full: '',
	// 		thumb: 'http://i.imgur.com/Rpcm2zs.jpg'
	// 	},
	// 	]
	// }
	// ]

	// var list = $firebaseArray(new Firebase("https://bbaklava.firebaseio.com/"));
	// console.log($scope.baklavas.length)
	// for (var i = $scope.baklavas.length - 1; i >= 0; i--) {
	// 	list.$add($scope.baklavas[i]);
	// };

});



})();