(function(){
    
    var app = angular.module('app', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
            $routeProvider.
                    when('/', {templateUrl: 'dashboard/dashboard.html',   controller: "DashboardController"}).
                    //when('/list', {templateUrl: 'list.html',   controller: ListCtrl}).
                    //when('/detail/:itemId', {templateUrl: 'detail.html',   controller: DetailCtrl}).
                    //when('/settings', {templateUrl: 'settings.html',   controller: SettingsCtrl}).
                    otherwise({redirectTo: '/'});
    });
})