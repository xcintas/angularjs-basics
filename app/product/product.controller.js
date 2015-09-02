(function(){
	'use strict'
	
	angular.module('app')
		.controller("ProductController", ["$scope", ProductController]);
		  
	function ProductController($scope)
	{
		var vm = this;
		
		
		vm.message = 'I am in ProductController';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
	
}());