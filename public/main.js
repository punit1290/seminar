angular.module('myapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'sign-up.html',
        controller: ''
      });
      .otherwise({
        redirectTo:'/'
      })
  });