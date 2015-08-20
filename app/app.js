/*angular.module('app', [
  'DashboardController'
]);*/

angular.module('app', ['DashboardController'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/', {templateUrl: 'dashboard.html',   controller: DashboardController}).
                //when('/list', {templateUrl: 'list.html',   controller: ListCtrl}).
                //when('/detail/:itemId', {templateUrl: 'detail.html',   controller: DetailCtrl}).
                //when('/settings', {templateUrl: 'settings.html',   controller: SettingsCtrl}).
                otherwise({redirectTo: '/'});
}]);
