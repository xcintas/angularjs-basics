(function(){
	'use strict'
	
    angular.module('app').run(appConfig);
	
	appConfig.$inject = ['$rootScope', '$state'];
	
	function appConfig($rootScope, $state){
		 $rootScope.$state = $state;
  		
		$rootScope.$on("$stateChangeStart", function(evt, to, toP, from, fromP) { console.log("Start:   " + message(to, toP, from, fromP)); });
		$rootScope.$on("$stateChangeSuccess", function(evt, to, toP, from, fromP) { console.log("Success: " + message(to, toP, from, fromP)); });
		$rootScope.$on("$stateChangeError", function(evt, to, toP, from, fromP, err) { console.log("Error:   " + message(to, toP, from, fromP), err); });
	}
	
	function message(to, toP, from, fromP) { 
		return from.name  + angular.toJson(fromP) + " -> " + to.name + angular.toJson(toP); 
	}
	
}());