'use strict';

angular.module('stockwatchApp')
  .controller('WatchlistCtrl', function ($scope) {
    $scope.watchlists = [
      { 'id': 1, 'name': 'Watchlist 1' },
      { 'id': 2, 'name': 'Watchlist 2' },
      { 'id': 3, 'name': 'Watchlist 3' },
    ];
  });
