(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteDeleteController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Delete";

      }]);
})();
