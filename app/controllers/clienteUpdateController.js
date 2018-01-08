(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteUpdateController',
             ['$scope','$location','$routeParams', 'clienteModel','clienteHttpServices',
      function($scope,$location,$routeParams,clienteModel,clienteHttpServices){

        $scope.titulo = "Editar";

        clienteHttpServices.clientesReadService().then(function(response){
          console.log($routeParams.id);
          $scope.cliente = response.data[$routeParams.id];

        });

        $scope.salvar = function(){
          alert($scope.cliente.nome + ' Salvo com sucesso');
          $location.path('/');
        }

        $scope.voltar = function(){
          $location.path('/');
        };

      }]);
})();
