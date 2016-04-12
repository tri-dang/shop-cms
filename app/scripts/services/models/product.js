'use strict';

app.factory('Product', ['$resource', 'Conf', function ($resource, Conf) {
  var baseUrl = Conf.apiBase;
  var products = $resource(baseUrl + '/products/:id',
    {
      id: '@id'
    }
  );
  return products;
}]);
