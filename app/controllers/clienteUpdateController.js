(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteUpdateController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Update";


      }]);
})();
