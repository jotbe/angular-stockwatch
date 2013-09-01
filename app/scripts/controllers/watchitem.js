'use strict';

angular.module('stockwatchApp')
  .controller('WatchitemCtrl', function ($scope, $routeParams, Watchlist) {
    $scope.$routeParams = $routeParams;
    var watchlists = Watchlist.query(function() {
      for (var wl in watchlists) {
        if (watchlists[wl].id === parseInt($routeParams.watchlistId, 10)) {
          $scope.watchlist = watchlists[wl];
        }
      }
    });

    $scope.deleteItem = function(idx) {
      console.log('deleting: ' + idx);
      this.watchlist.securities.splice(idx, 1);
    };
  });
