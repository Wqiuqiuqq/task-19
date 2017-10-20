var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("service",{
			url:"/service/:id",
			templateUrl:"App/View/ser.html",
			controller:"serfController"
		})
	$urlRouterProvider.otherwise("/service/ser")
})