(function() {
  'use strict';
  angular.module('crudCliente', ['ngRoute', 'ngMessages','ui.utils.masks']);

})();

(function(){
  'use strict';
  angular.module('crudCliente').config(['$httpProvider',
    function($httpProvider) {
      $httpProvider.interceptors.push('loadingInterceptor');
    }]);
})();


(function(){
  'use strict';

  angular.module('crudCliente').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'app/views/cliente.html',
        controller: 'clienteReadController'
      })

      .when('/cliente',{
        templateUrl: 'app/views/cadastro.html',
        controller: 'clienteCreateController'
      })

      .when('/cliente/:id',{
        templateUrl: 'app/views/cadastro.html',
        controller: 'clienteUpdateController'
      })

      .otherwise({redirectTo: '/'});


      $locationProvider.hashPrefix('');

    }]);
})();


(function(){
  'use strict';
  angular.module('crudCliente')
      .factory('clienteHttpServices', ['$http', function ($http){

          // var clienteUrl = 'http://dev04.sequenza.com.br:9090/swagger/ui/index#/Cliente/';
          var clienteUrl = '../../clientes.json';

          var _clienteCreateHttp = function(){
            return $http({
                method: 'POST',
                url: clienteUrl
            });
          };

          var _clientesReadHttp = function(){
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
              clientesReadService: _clientesReadHttp,
              clienteUpdateService: _clienteUpdateHttp,
              clienteDeleteService: _clienteDeleteHttp
          };

      }]);
}());

(function(){
  'use strict';
  angular.module('crudCliente')
      .factory('clienteModel', [function(){

        var _testeModel = function(response){
          var model = [];
          response.forEach(function(itemResponse){
            model.push({

            })
          });

          return model;
        }

        return{
          testeModel: _testeModel,
        }

      }]);
}());

(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteCreateController',
             ['$scope','$location','clienteModel','clienteHttpServices',
      function($scope,$location,clienteModel,clienteHttpServices){

        $scope.titulo = "Novo";

        $scope.cliente = {};

        $scope.salvar = function(){
          alert(($scope.cliente.nome || 'cliente') + ' salvo com sucesso');
          $location.path('/');
        }

        $scope.voltar = function(){
          $location.path('/');
        };

      }]);
})();

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

(function(){
  'use strict';
  angular.module('crudCliente').controller('clienteUpdateController',
             ['$scope','$location','$routeParams', 'clienteModel','clienteHttpServices',
      function($scope,$location,$routeParams,clienteModel,clienteHttpServices){

        var idParam = $routeParams.id;
        $scope.titulo = "Editar";

        clienteHttpServices.clientesReadService().then(function(response){
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
