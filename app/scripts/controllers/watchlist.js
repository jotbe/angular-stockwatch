'use strict';

angular.module('stockwatchApp')
  .controller('WatchlistCtrl', ['$scope', '$routeParams', 'YqlQuotes', 'WatchlistStorage', function ($scope, $routeParams, YqlQuotes, WatchlistStorage) {
    var storage = WatchlistStorage.open();

    // Requests quote information for the securities and updates them.
    var updateSecurities = function(data) {
      if (!data.hasOwnProperty('securities')) {
        return;
      }
      var symbols = [];
      var sec = data.securities;

      for (var i in sec) {
        symbols.push(sec[i].symbol);
      }

      console.log('watchlist:', symbols);

      var promiseQuotes = YqlQuotes.getQuotes(symbols);
      promiseQuotes
        .then(function(quotesData) {
          console.log(quotesData.quote);

          var quotes = {};
          for (var i in quotesData.quote) {
            quotes[quotesData.quote[i].symbol] = quotesData.quote[i];
          }

          var tradePriceTotal = 0,
              lastTradePriceTotal = 0,
              changeTotal = 0,
              changeDayTotal = 0,
              changeDayTotalPercent = 0;

          data.trade_price_total = 0;
          data.last_trade_price_total = 0;
          data.change_total = 0;
          data.change_total_percent = 0;
          data.change_day_total = 0;
          data.change_day_total_percent = 0;

          for (var i in sec) {
            if (quotes.hasOwnProperty(sec[i].symbol)) {
              var quote = quotes[sec[i].symbol];
              var change = parseFloat(quote.Change.replace('+', '')),
                  lastTradePrice = parseFloat(quote.LastTradePriceOnly);

              sec[i].last_trade_price = lastTradePrice;
              sec[i].change_total_percent = (sec[i].last_trade_price - sec[i].trade_price) / sec[i].trade_price * 100;
              sec[i].change = change;
              sec[i].change_percent = change / (lastTradePrice - change) * 100;
              changeDayTotal += change;
              tradePriceTotal += sec[i].trade_price;
              lastTradePriceTotal += lastTradePrice;
            }
          }

          changeTotal = (lastTradePriceTotal - tradePriceTotal);
          data.change_total = changeTotal;
          data.change_total_percent = changeTotal / tradePriceTotal * 100;
          data.change_day_total = changeDayTotal;
          data.change_day_total_percent = changeDayTotal / (tradePriceTotal - changeDayTotal) * 100;
        });

      console.log('Updated:', data);
      return data;
    };

    // We are requesting a certain watchlist
    if ($routeParams.watchlistId) {
      var watchlistId = $routeParams.watchlistId;

      storage
        .then(function() {
          return WatchlistStorage.getItem(watchlistId);
        })
        .then(function(data) {
          return updateSecurities(data);
        })
        .then(function(data) {
          $scope.watchlist = data;
          $scope.securities = data.securities;
        });

    } else {
      // default
      storage.then(function() {
        return WatchlistStorage.getItems();
      })
      .then(function(data) {
        var watchlists = data;

        for (var i in watchlists) {
          watchlists[i] = updateSecurities(watchlists[i]);
        }

        console.log("Updated watchlists:", watchlists);
        $scope.watchlists = watchlists;
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
              'securities': [
                { 'id': 1, 'name': 'GFT Technologies AG', 'symbol': 'GFT.DE', 'date_added': 1376092800000, 'trade_price': 5.18 },
                { 'id': 2, 'name': 'Bechtle AG', 'symbol': 'BC8.DE', 'date_added': 1376352000000, 'trade_price': 37.74 },
                { 'id': 3, 'name': 'Tesla Motors, Inc.', 'symbol': 'TSLA', 'date_added': 1375574400000, 'trade_price': 144.68 }
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
      console.log('deleting', storage);

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

    var addQuoteToWatchList = function(watchlistId, quote) {
      console.log('Adding symbol to watchlist');
      storage
        .then(function() {
          return WatchlistStorage.getItem(watchlistId);
        })
        .then(function(item) {
          function findSecurityBySymbol(sym) {
            console.log('Searching symbol in securities');
            for(var i in item.securities) {
              if (item.securities[i].symbol === sym) {
                console.log('Already in watchlist.');
                return i;
              }
            }
          }
          console.log('Found item:', item, item.securities);

          if (typeof(item.securities) === 'undefined') {
            item.securities = [];
          }

          if (angular.isArray(item.securities)) {
            if (!findSecurityBySymbol(quote.symbol)) {
              var symbolRecord = {
                'id': item.securities.length + 1,
                'name': quote.Name,
                'symbol': quote.Symbol,
                'date_added': new Date().getTime(),
                'trade_price': parseFloat(quote.LastTradePriceOnly)
              };

              item.securities.push(symbolRecord);

              console.log('Storing item', item);
              return WatchlistStorage.addItem(item);
            }
          } else {
            return false;
          }
        })
        .then(function() {
          console.log('Added symbol');
        }, function() {
          console.log('An error occurred when trying to add a new symbol.');
        });
    };

    // Subscribe event
    $scope.$on('AddQuoteToWatchList', function(e) {
      e.stopPropagation();
      console.log('Received event AddQuoteToWatchList:', e);
      addQuoteToWatchList(e.targetScope.targetWatchlist.id, e.targetScope.quote);
    });

  }]);
