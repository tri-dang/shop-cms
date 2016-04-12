'use strict';

app.controller('ProductCtrl', [
  '$scope',
  'Product',
  '$location',
  '$filter',
  function ($scope, Product, $location, $filter) {
    $scope.products = Product.query();
    $scope.order_by = 'id'
    $scope.reverse = "false"
    var orderBy = $filter('orderBy');

    $scope.product_detail = function(product_id) {
      $location.path('/products/' + product_id)
    }

    $scope.thank_you = function() {
      alert('Thanks for loving me! :)')
    }

    $scope.order = function() {
      $scope.products = orderBy($scope.products, $scope.order_by, $scope.reverse);
    };
  }
]);
