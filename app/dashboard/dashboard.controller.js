(function(){
	/*'use strict'*/
	
	angular.module('app')
		  .controller("DashboardController", ["$scope", DashboardController]);
		  
	function DashboardController($scope)
	{
		//var vm = this;
		$scope.message = 'Everything is running ok';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
	
}());
