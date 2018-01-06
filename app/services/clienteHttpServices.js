(function(){
  'use strict';
  angular.module('crudCliente')
      .factory('clienteHttpServices', ['$http', function ($http){

          var clienteUrl = 'http://dev04.sequenza.com.br:9090/swagger/ui/index#/Cliente/';

          var _clienteCreateHttp = function(){
            return $http({
                method: 'POST',
                url: clienteUrl
            });
          };

          var _clienteReadHttp = function(){
            return $http({
                method: 'GET',
                url: clienteUrl
            });
          };

          var _clienteUpdateHttp = function(id){
            return $http({
                method: 'PUT',
                url: clienteUrl + id
            });
          };

          var _clienteDeleteHttp = function(id){
            return $http({
                method: 'DELETE',
                url: clienteUrl + id
            });
          };

          return {
              clienteCreateService: _clienteCreateHttp,
              clienteReadService: _clienteReadHttp,
              clienteUpdateService: _clienteUpdateHttp,
              clienteDeleteService: _clienteDeleteHttp
          };

      }]);
}());
