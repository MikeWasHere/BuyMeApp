angular.module('AuthService', []).factory('Authentification', ['$http', '$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL', function($http, $rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {
	console.log("Auth service up and running")

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	auth.$onAuth(function(authUser) {
		if (authUser) {
			var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid );
			var userObj = $firebaseObject(userRef);
			$rootScope.currentUser = userObj;
		} else {
			$rootScope.currentUser = '';
		}
	});

	return {
		login: function(user) {
			auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then(function(regUser) {
				$location.path('/master');
			}).catch(function(error) {
				$rootScope.message = error.message;
			}); 
		}, //login end

		logout: function() {
			return auth.$unauth();
		}, //logout end

		requireAuth: function() {
			return auth.$requireAuth();
		}, //Require Authentification

		register: function(user) {
			auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function(regUser) {

				var regRef = new Firebase(FIREBASE_URL + 'users')
				.child(regUser.uid).set({
					date: Firebase.ServerValue.TIMESTAMP,
					regUser: regUser.uid,
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email
				}); // Store user info in database

				$rootScope.message = "Hi " + user.firstname + ", Thanks for registering";
			}).catch(function(error) {
				$rootScope.message = error.message;
			}); //create user end
		} //register end
	};
	

}]); //factory end