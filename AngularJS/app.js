const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function routeProvider($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: './templates/home.html',
      controller: 'AppController',
    })
    .when('/about', {
      templateUrl: './templates/about.html',
    })
    .when('/services', {
      templateUrl: './templates/services.html',
    })
    .when('/contact', {
      templateUrl: './templates/contact.html',
    })
    .otherwise({
      redirectTo: '/home',
    });
}]);

app.controller('AppController', ['$scope', function controller($scope) {
  $scope.message = 'Controller active!';
}]);
