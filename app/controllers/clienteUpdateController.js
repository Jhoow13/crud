(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteUpdateController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Editar";

        $scope.voltar = function(){
          $location.path('/');
        };

      }]);
})();
