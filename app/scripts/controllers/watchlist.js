'use strict';

angular.module('stockwatchApp')
  .controller('WatchlistCtrl', function ($scope) {
    $scope.watchlists = [
      { 'id': 1, 'name': 'Watchlist 1', 'date_added': '1373760000000',
        'securities': [
          { 'id': 1, 'name': 'GFT Technologies AG', 'symbol': 'GFT.DE' },
          { 'id': 2, 'name': 'Bechtle AG', 'symbol': 'BC8.DE' },
          { 'id': 3, 'name': 'Tesla Motors, Inc.', 'symbol': 'TSLA' },
        ]
      },
        { 'id': 2, 'name': 'Watchlist 2', 'date_added': '1375488000000',  },
        { 'id': 3, 'name': 'Watchlist 3', 'date_added': '1376956800000',  },
      ];

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
  });
