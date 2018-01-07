(function(){
  'use strict';

  angular.module('crudCliente').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'app/views/cliente.html',
        controller: 'clienteReadController'
      })

      .when('/cliente',{
        templateUrl: 'app/views/cadastro.html',
        controller: 'clienteCreateController'
      })

      .when('/cliente/:id',{
        templateUrl: 'app/views/cadastro.html',
        controller: 'clienteUpdateController'
      })

      .otherwise({redirectTo: '/'});


      $locationProvider.hashPrefix('');

    }]);
})();

