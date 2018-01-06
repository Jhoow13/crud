(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteCreateController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Create";

      }]);
})();
