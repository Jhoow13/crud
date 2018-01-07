(function(){
  'use strict';
  angular.module('crudCliente')
      .factory('loadingInterceptor', ['$q','$rootScope', '$timeout', function ($q, $rootScope, $timeout){

        var _request = function(config){
          $rootScope.carregando = true;

          return config;
        }

        var _requestError = function(rejection){
          $rootScope.carregando = false;

          return $q.reject(rejection);
        }

        var _response = function(response){
          $timeout(function(){
            $rootScope.carregando = false;
          },500)

          return response;
        }

        var _responseError = function(rejection){
           $rootScope.carregando = false;
          return $q.reject(rejection);
        }

        return{
          request: _request,
          requestError: _requestError,
          response: _response,
          responseError: _responseError
        }

      }]);
}());
