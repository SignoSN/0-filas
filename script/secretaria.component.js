angular.module('secretaria')
  .component('secretaria',{
    templateUrl: 'pags/secre.vista.html',
    controller: function SecretariaController($http, $routeParams){
      var self = this;
      self.link = $routeParams.link;

      $http.get('secretarias/' + $routeParams.link + '.json').then(function(response){
        self.secre = response.data;
      });
    }
  });
