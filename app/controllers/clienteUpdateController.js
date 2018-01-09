(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteUpdateController',
             ['$scope','$location','$routeParams', 'clienteModel','clienteHttpServices',
      function($scope,$location,$routeParams,clienteModel,clienteHttpServices){

        var idParam = $routeParams.id;
        $scope.titulo = "Editar";

        clienteHttpServices.clientesReadService().then(function(response){
          //usar filter para pegar registro igual ao id
          //tu é burro e ta pegando a posição do array seu animal

          var clientes = response.data;
          $scope.cliente = clientes.find(function(itemCliente){
            return itemCliente.id == idParam;
          });

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
