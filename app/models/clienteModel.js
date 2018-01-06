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
