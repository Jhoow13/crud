(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteReadController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Read";

      }]);
})();
