var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : "pages/home.html",
		controller : "homeController"
	})
	.when('/mainPage', {
		templateUrl : "pages/mainPage.html",
		controller : "mainController"
	})
	.when('/restartPage', {
		templateUrl: 'pages/restartPage.html',
		controller: 'restartController'
	})
});