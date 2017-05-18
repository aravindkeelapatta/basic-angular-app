var app = angular.module("myApp", ["ngRoute"])
                 .config(["$locationProvider","$routeProvider", function($locationProvider,$routeProvider) {
                 	$locationProvider.hashPrefix('')
               
			       $routeProvider
				    .when("/", {
					   templateUrl: "pages/index.html",
					   controller : "indexController"
					})
					.when("/home", {
						templateUrl : "pages/home.html",
						controller  : "homeController"
					})
					.when("/register", {
					   templateUrl: "pages/register.html",
					   controller : "registerController"
					})
					.when("/login", {
					   templateUrl: "pages/login.html",
					   controller : "loginController"
					})
				 }])
				 .controller("indexController", function($scope) {
					 $scope.message = "Index Page"
				 })
				 .controller("homeController", function($scope) {
					 $scope.message = "Home Page"
				 })
				 .controller("registerController", function($scope) {
					 $scope.message = "Register Page"
				 })
				 .controller("loginController", function($scope) {
					 $scope.message = "Login Page"
				 })