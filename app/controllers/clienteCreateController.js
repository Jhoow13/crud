(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteCreateController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Novo";

        $scope.cliente = {};

        $scope.salvar = function(){
          alert(($scope.cliente.nome || 'cliente') + ' salvo com sucesso');
          $location.path('/');
        }

        $scope.voltar = function(){
          $location.path('/');
        };

      }]);
})();
