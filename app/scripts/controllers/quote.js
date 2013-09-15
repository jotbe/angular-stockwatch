'use strict';

angular.module('stockwatchApp')
  .controller('QuoteCtrl', function($scope, $routeParams, $injector, YqlQuotes, WatchlistStorage) {

    // Storage initialization
    var storage = WatchlistStorage.open();
    storage.then(function() {
      $scope.targetWatchlists = WatchlistStorage.getItems();
    });

    var symbol = $routeParams.symbol;

    // Fetch current quote
    var fetchQuote = (function(sym) {
      var promiseQuote = YqlQuotes.getQuotes(sym);
      promiseQuote.then(function(data){
        $scope.quote = data.quote;
      });
    })(symbol);

    $scope.fetchQuote = fetchQuote;

    // Date range for quotes
    var dateOffset = 3;
    var currentDate = new Date();
    var startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - dateOffset);
    var startDateString = startDate.toISOString().split('T')[0];
    var currentDateString = currentDate.toISOString().split('T')[0];

    var quotesToHighStockArray = function(arr, isOhlc) {
      var res = [];
      var range=arr.length-1;

      if (isOhlc === true) {
        var ohlc = [];
        var volume = [];
        for (var i=range; i>=0; i--) {
          ohlc.push([
            new Date(arr[i]['Date']).getTime(),
            parseFloat(arr[i]['Open']),
            parseFloat(arr[i]['High']),
            parseFloat(arr[i]['Low']),
            parseFloat(arr[i]['Close'])
          ]);
          volume.push([
            new Date(arr[i]['Date']).getTime(),
            parseFloat(arr[i]['Volume'])
          ]);
        }
        res.push(ohlc, volume);
      } else {
        for (var i=range; i>=0; i--) {
          res.push([
            new Date(arr[i]['Date']).getTime(),
            parseFloat(arr[i]['Close'])
          ]);
        }
      }
      return res;
    };

    // Fetch historical quotes
    var promiseHistorical = YqlQuotes.getHistoricalQuotes(symbol, startDateString, currentDateString);
    promiseHistorical
      .then(function(data) {
        $scope.histQuotes = data.quote;

        var simpleChartData = quotesToHighStockArray(data.quote);
        var ohlcChartData = quotesToHighStockArray(data.quote, true);

        // console.log('simple', simpleChartData);
        // console.log('ohlc', ohlcChartData[0]);
        // console.log('volume', ohlcChartData[1]);

        var groupingUnits = [[
          'week',
          [1]
        ], [
          'month',
          [1, 2, 3, 4, 6]
        ]];

        $scope.ohlcChart = {
          useHighStocks: true,
          rangeSelector: {
            enabled: true,
            selected: 1
          },
          title: {
            text: 'Candlestick'
          },
          yAxis: [{
            title: {
              text: 'OHLC'
            },
            height: 200,
            lineWidth: 2
          }/*, {
            title: {
              text: 'Volume'
            },
            top: 300,
            height: 100,
            offset: 0,
            lineWidth: 2
          }*/],
          series: [{
            type: 'candlestick',
            name: 'Candlestick-Chart',
            data: ohlcChartData[0],
            dataGrouping: {
              units: groupingUnits
            }
          }/*, {
            type: 'column',
            name: 'Volume',
            data: ohlcChartData[1],
            yAxis: 1,
            dataGrouping: {
              units: groupingUnits
            }
          }*/]
        };

        $scope.simpleChart = {
          useHighStocks: true,
          rangeSelector : {
            enabled: true,
            selected : 1
          },
          title : {
            text : 'Schlusskurse (Close)'
          },
          series : [{
            name : symbol,
            data : simpleChartData,
            tooltip: {
              valueDecimals: 2
            }
          }]
        };
      });

    $scope.addSymbolToWatchlist = function() {
      console.log('Adding symbol to Watchlist:',
        [this.targetWatchlist.name, this.targetWatchlist.id, $scope.quote]);
      $injector.invoke(function($controller) { $controller('WatchlistCtrl', {'$scope': $scope}); });
      $scope.$emit('AddQuoteToWatchList');
    };

  });
