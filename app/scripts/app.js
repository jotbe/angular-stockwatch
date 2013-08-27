'use strict';

angular.module('stockwatchApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
