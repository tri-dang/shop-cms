'use strict';

app.factory('Conf', [
  '$location',
  '$rootScope',
  function ($location, $rootScope) {
    var config = {
      'apiBase': 'http://127.0.0.1:3000'
    };
    return config;
}]);
