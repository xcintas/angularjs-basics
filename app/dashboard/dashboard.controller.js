(function(){
	'use sctrict'

	angular.module('app', [])
  		.controller('DashboardController', DashboardController);
		  
	DashboardController.$inject = ['$scope', '$q', '$http'];
	
	function DashboardController($scope, $q, $http)
	{
		var vm = this;
		vm.message = 'Everything is running ok';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
})