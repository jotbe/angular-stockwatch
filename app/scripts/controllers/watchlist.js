'use strict';

angular.module('stockwatchApp')
  .controller('WatchlistCtrl', ['$scope', '$routeParams', 'WatchlistStorage', function ($scope, $routeParams, WatchlistStorage) {

    var storage = WatchlistStorage.open();

    if ($routeParams.watchlistId) {
      var watchlistId = $routeParams.watchlistId;
      console.log('Got watchlistId:', watchlistId);

      storage
        .then(function() {
          WatchlistStorage.getItem(watchlistId)
            .then(function(result) {
              $scope.watchlist = result;
            });
        });
    } else {
      // default
      storage.then(function() {
        $scope.watchlists = WatchlistStorage.getItems();
      });
    }

    $scope.addWatchlist = function() {
      if (this.watchlistName) {
        var name = this.watchlistName;
        var date = new Date();
        var dateAdded =  date.getTime();

        storage
          .then(function() {
            return WatchlistStorage.addItem({
              'name': name,
              'date_added': dateAdded,
              'pl_percentage': 0.00,
              'securities': [
                { 'id': 1, 'name': 'GFT Technologies AG', 'symbol': 'GFT.DE' },
                { 'id': 2, 'name': 'Bechtle AG', 'symbol': 'BC8.DE' },
                { 'id': 3, 'name': 'Tesla Motors, Inc.', 'symbol': 'TSLA' }
              ]
            });
          })
          .then(function() {
            $scope.watchlists = WatchlistStorage.getItems();
          });

        this.watchlistName = '';
      }
    };

    $scope.deleteWatchlist = function(id) {
      console.log('delete', storage);

      storage
        .then(function() {
          return WatchlistStorage.deleteItem(id).then(function() {
            $scope.watchlists = WatchlistStorage.getItems();
          });
        });
    };

    $scope.deleteSecurity = function(idx) {
      console.log('deleting: ' + idx);
      var watchlist = this.watchlist;
      watchlist.securities.splice(idx, 1);
      storage
        .then(function() {
          console.log('Updating watchlist');
          return WatchlistStorage.addItem(watchlist);
        });
    };
  }]);
