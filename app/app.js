(function(){
    
    var app = angular.module('app', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'app/dashboard/dashboard.html',   controller: "DashboardController"}).
            otherwise({redirectTo: '/'});
    });
}());