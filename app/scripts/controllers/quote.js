'use strict';

angular.module('stockwatchApp')
  .controller('QuoteCtrl', function ($scope, $routeParams, $http, $injector, YqlQuotes) {
    $injector.invoke(function ($controller) { $controller('WatchitemCtrl', {'$scope': $scope}); });

    $scope.symbol = $routeParams.symbol;

    var promiseQuote = YqlQuotes.getQuote($routeParams.symbol);
    promiseQuote.then(function(data){
      $scope.quote = data;
    });

    var currentDate = new Date();
    var startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - 1);
    var startDateString = startDate.toISOString().split('T')[0];
    var currentDateString = currentDate.toISOString().split('T')[0];

    var promiseHistorical = YqlQuotes.getHistoricalQuotes($routeParams.symbol, startDateString, currentDateString);
    promiseHistorical.then(function(data) {
      $scope.histQuotes = data;
    });
  });
