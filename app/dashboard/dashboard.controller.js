(function(){
	'use strict'
	
	angular.module('app')
		  .controller("DashboardController", ["$scope", DashboardController]);
		  
	function DashboardController($scope)
	{
		var vm = this;
		
		
		vm.message = 'I am in DashboardController';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
	
}());