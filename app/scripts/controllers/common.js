'use strict';

app.controller('CommonCtrl', ['$scope', function ($scope) {
  $scope.$back = function() {
    window.history.back();
  };
}]);