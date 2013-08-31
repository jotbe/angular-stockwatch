'use strict';

angular.module('stockwatchApp')
  .controller('WatchlistCtrl', ['$scope', 'Watchlist', function ($scope, Watchlist) {
    $scope.watchlists = Watchlist.query();

    $scope.addWatchlist = function() {
      if (this.watchlistName) {
        var date = new Date();
        var dateAdded =  date.getTime();
        this.watchlists.push({
          'id': this.watchlists.length + 1,
          'name': this.watchlistName,
          'date_added': dateAdded,
          'pl_percentage': 0.00
        });
        this.watchlistName = '';
      }
    };

    $scope.deleteWatchlist = function(idx) {
      console.log('deleting: ' + idx);
      this.watchlists.splice(idx, 1);
    };


  }]);
