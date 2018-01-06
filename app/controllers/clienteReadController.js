(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteReadController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Read";
        $scope.modalIsOpen = false;

        $scope.modalStatus = function(){
          $scope.modalIsOpen = !$scope.modalIsOpen;
          var modal = document.getElementById("modalDelete");
          if($scope.modalIsOpen){
            modal.style.display = "block";
          }else{
            modal.style.display = "none";
          }
        }

        $scope.closeModal = function(status){
          $scope.modalStatus(status);
        }


      }]);
})();
