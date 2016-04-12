'use strict';

var app = angular.module('clApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'angular-loading-bar',
  'ui.bootstrap',
]);

app.constant('cmsRoot', 'http://127.0.0.1:3000');

app.config([
  '$routeProvider',
  '$locationProvider',
  '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'views/products/index.html',
        controller: 'ProductCtrl'
      })
      .when('/products/:id', {
        templateUrl: 'views/products/show.html',
        controller: 'ProductShowCtrl',
      })
      .otherwise({
        redirectTo: '/products'
      });
   }
  ]);
