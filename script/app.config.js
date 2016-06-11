angular.module('ceroFilas').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/menu', {
          template: '<menu-gob></menu-gob>'
        }).
        when('/secretaria/:link', {
          template: '<secretaria></secretaria>'
        }).
        otherwise('/menu');
    }
  ]);
