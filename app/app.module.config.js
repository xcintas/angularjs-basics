(function(){
	'use strict'

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', configRoutes]);
    
    function configRoutes($stateProvider, $urlRouterProvider){
        var navbar = {
            name: 'navbar',
            templateUrl: "/navigation/navbar.html",
            controller: 'NavbarController' 
        };
        
        var dashboard = {
            name: 'dashboard',
            templateUrl: "/dashboard/dashboard.html",
            controller: 'DashboardController'
        };
        
        /*
        $stateProvider
            .state('dashboard',{
                views:{
                    'navbar':{
                        templateUrl: "/navigation/navbar.html",
                        controller: 'NavbarController'
                    },
                    'default':{
                        templateUrl: "/dashboard/dashboard.html",
                        controller: 'DashboardController'
                    }
                },
                url: '/',
                templateUrl: "/dashboard/dashboard.html",
            });
            */
            
        $stateProvider
            .state('home', {
                url: '/',
                //templateUrl: '/dashboard/dashboard.html',
                //template:'<div>okey</div>',
                //controller: 'DashboardController'
            })
            
            /*
                views: {
                    'navbar':{
                        templateUrl: "/navigation/navbar.html",
                        controller: 'NavbarController'
                    },
                    'default':{
                        templateUrl: "/dashboard/dashboard.html",
                        controller: 'DashboardController'
                    }
                },
                abstract: true
            })*/
            
            /*.state('base.dashboard', {
                url: '/',
                templateUrl: "/dashboard/dashboard.html",
            })
            .state('base.product', {
                url: '/product',
                templateUrl: "/product/product.html",
            })*/

        $urlRouterProvider.otherwise('/');
    }   
         
}());