(function(){
	'use sctrict'

	angular.module('app', [])
  		.controller('DashboardController', DashboardController);
		  
	DashboardController.$inject = ['$q', '$http'];
	
	function DashboardController($q, $http)
	{
		var vm = this;
		vm.mesage = 'Everything is running ok';
		
		
		init();
		
		function init(){
			activate();
			
			function activate(){
				
			}
		}
	}	
})