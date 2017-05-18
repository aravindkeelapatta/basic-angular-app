var app = angular.module("myApp", ["ui.router"])
                 .config(["$locationProvider","$stateProvider", function($locationProvider,$stateProvider) {
                 	$locationProvider.hashPrefix('')
               
			       $stateProvider
				    .state("index", {
				    	url : '/',
					   templateUrl: "pages/index.html",
					   controller : "indexController",
					   caseInsensitiveMatch : true
					})
					.state("home", {
						url : '/home',
						templateUrl : "pages/home.html",
						controller  : "homeController"
					})
					.state("register", {
						url : '/register',
					   templateUrl: "pages/register.html",
					   controller : "registerController"
					})
					.state("login", {
						url : '/login',
					   templateUrl: "pages/login.html",
					   controller : "loginController",
					   caseInsensitiveMatch : true
					})
				 }])
				 .controller("indexController", function($scope) {
					 $scope.message = "Index Page";
				 })
				 .controller("homeController", function($scope) {
					 $scope.message = "Home Page";
				 })
				 .controller("registerController", function($scope) {
					 $scope.message = "Register Page";
				 })
				 .controller("loginController", function($scope) {
					 $scope.message = "Login Page";
				 })