(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteReadController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.modalIsOpen = false;


        clienteHttpServices.clientesReadService().then(function(response){
          $scope.clientes = response.data;
        });

        $scope.modalStatus = function(id,nome){

          $scope.modalIsOpen = !$scope.modalIsOpen;
          var modal = document.getElementById("modalDelete");

          if($scope.modalIsOpen){
            modal.style.display = "block";
          }else{
            modal.style.display = "none";
          }

          $scope.objCliente = {
            id: id,
            nome: nome,
            deletar: function(){
              alert('Cliente: ' + nome +' deletado');
              modal.style.display = "none";
            }
          }

        };

        $scope.closeModal = function(status){
          $scope.modalStatus(status);
        };

        $scope.novoCadastro = function(){
          $location.path('/cliente');
        };

        $scope.editarCadastro = function(id){
          $location.path('/cliente/' + id);
        };

      }]);
})();
