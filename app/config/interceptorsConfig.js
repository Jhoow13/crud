(function(){
  'use strict';
  angular.module('crudCliente').config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('loadingInterceptor');
    }]);
})();

