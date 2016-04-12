'use strict';

app.controller('ProductShowCtrl', [
  '$scope',
  'Product',
  '$routeParams',
  function ($scope, Product, $routeParams) {
    Product.get({id: $routeParams.id})
      .$promise.then(function(data){
        $scope.product = data;
      });
  }
]);

