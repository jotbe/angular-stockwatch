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
        controller: 'WatchlistCtrl'
      })
      .when('/watchlist/:watchlistId/quote/:symbol', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteCtrl'
      })
      .when('/quote/:symbol', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteCtrl'
      })      .otherwise({
        redirectTo: '/watchlist'
      });
  });
