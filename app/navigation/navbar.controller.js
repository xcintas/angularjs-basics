(function(){
	'use strict'
	
	angular.module('app')
		  .controller("NavbarController", ["$scope", NavbarController]);
		  
	function NavbarController($scope)
	{
		var vm = this;
		
		
		vm.message = 'I am in NavbarController';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
	
}());