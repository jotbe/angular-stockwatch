'use strict';

angular.module('stockwatchApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/watchlist', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl'
      })
      /*.when('/watchlist/:watchlistId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistItemsCtrl'
      })*/
      .otherwise({
        redirectTo: '/watchlist'
      });
  });
