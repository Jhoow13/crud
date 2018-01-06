(function(){
  'use strict';

  angular.module('crudCliente').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'app/views/cliente.html',
        controller: 'clienteReadController'
      })

      .when('/cadastro',{
        templateUrl: 'app/views/cliente.html',
        controller: 'clienteCreateController'
      })

      .when('/cliente/:id',{
        templateUrl: 'app/views/cliente.html',
        controller: 'clienteUpdateController'
      })

      .otherwise({redirectTo: '/'});


      $locationProvider.hashPrefix('');

    }]);
})();

