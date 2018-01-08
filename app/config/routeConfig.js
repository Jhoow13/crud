(function(){
  'use strict';

  angular.module('crudCliente').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'src/html/cliente.html',
        controller: 'clienteReadController'
      })

      .when('/cliente',{
        templateUrl: 'src/html/cadastro.html',
        controller: 'clienteCreateController'
      })

      .when('/cliente/:id',{
        templateUrl: 'src/html/cadastro.html',
        controller: 'clienteUpdateController'
      })

      .otherwise({redirectTo: '/'});


      $locationProvider.hashPrefix('');

    }]);
})();

