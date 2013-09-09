'use strict';

angular.module('stockwatchApp')
  .controller('QuoteCtrl', function($scope, $routeParams, $injector, YqlQuotes, WatchlistStorage) {
    var storage = WatchlistStorage.open();
    storage.then(function() {
      $scope.targetWatchlists = WatchlistStorage.getItems();
    });

    $scope.symbol = $routeParams.symbol;

    var fetchQuote = (function(sym) {
          var promiseQuote = YqlQuotes.getQuote(sym);
          promiseQuote.then(function(data){
            $scope.quote = data.quote;
          });
        })($scope.symbol);

    $scope.fetchQuote = fetchQuote;

    var currentDate = new Date();
    var startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - 1);
    var startDateString = startDate.toISOString().split('T')[0];
    var currentDateString = currentDate.toISOString().split('T')[0];

    var promiseHistorical = YqlQuotes.getHistoricalQuotes($routeParams.symbol, startDateString, currentDateString);
    promiseHistorical.then(function(data) {
      $scope.histQuotes = data.quote;
    });

    $scope.addSymbolToWatchlist = function() {
      console.log('Adding symbol to Watchlist:',
        [this.targetWatchlist.name, this.targetWatchlist.id, $scope.quote]);
      $injector.invoke(function($controller) { $controller('WatchlistCtrl', {'$scope': $scope}); });
      $scope.$emit('AddQuoteToWatchList');
    };

  });
