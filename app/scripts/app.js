'use strict';

angular.module('stockwatchApp', ['ngRoute', 'stockwatchServices'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/watchlist', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
      })
      .when('/watchlist/:watchlistId', {
        templateUrl: 'views/watchitem.html',
        controller: 'WatchitemCtrl'
      })
      .otherwise({
        redirectTo: '/watchlist'
      });
  });
