'use strict';

angular.module('stockwatchApp')
  .controller('QuoteCtrl', function ($scope, $routeParams, $http, $injector) {
    $injector.invoke(function ($controller) { $controller('WatchitemCtrl', {'$scope': $scope}); });

    $scope.symbol = $routeParams.symbol;

    /***
     * SELECT * FROM yahoo.finance.quote
     * WHERE symbol = "GFT.DE";
     *
     * REST-Query:
     * http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%20%3D%20%22GFT.DE%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
     */
    var yqlQuoteQuery = 'SELECT * FROM yahoo.finance.quote';
    var yqlQuoteWhere = ' WHERE symbol = "' + $routeParams.symbol + '"';
    var yqlQueryUrl = 'http://query.yahooapis.com/v1/public/yql?q=';
    var yqlOptions = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
    var query = yqlQueryUrl + encodeURIComponent(yqlQuoteQuery + yqlQuoteWhere) + yqlOptions;

    $http.jsonp(query)
        .success(function(data, status) {
            $scope.quote = data.query.results.quote;
            $scope.yqlQuoteStatus = status;
        })
        .error(function(data, status) {
            console.error('Error while fetching quotes: ', data, status);
            $scope.yqlQuoteErrData = data;
            $scope.yqlQuoteStatus = status;
        });

    var currentDate = new Date();
    var startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - 1);
    var startDateString = startDate.toISOString().split('T')[0];
    var currentDateString = currentDate.toISOString().split('T')[0];

    /***
     *   USE 'https://gist.github.com/jotbe/3f35ceb0f3496c3e2869/raw' as stockhist;
     *   SELECT * FROM stockhist
     *   WHERE symbol = "GFT.DE" AND startDate = "2013-01-01" AND endDate = "2013-07-31"
     *
     *   REST-Query:
     *   http://query.yahooapis.com/v1/public/yql?q=USE%20'https%3A%2F%2Fgist.github.com%2Fjotbe%2F3f35ceb0f3496c3e2869%2Fraw'%20as%20stockhist%3B%20SELECT%20*%20from%20stockhist%20WHERE%20symbol%20%3D%20%22GFT.DE%22%20AND%20startDate%20%3D%20%222013-01-01%22%20AND%20endDate%20%3D%20%222013-07-31%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
     */
    var yqlHistQuery = 'USE "https://gist.github.com/jotbe/3f35ceb0f3496c3e2869/raw" as stockhist;select * from stockhist';
    var yqlHistWhere = ' where symbol = "' + $routeParams.symbol + '" and startDate = "' + startDateString + '" and endDate = "' + currentDateString + '"';
    var histQuery = yqlQueryUrl + encodeURIComponent(yqlHistQuery + yqlHistWhere) + yqlOptions;

    $http.jsonp(histQuery)
        .success(function(data, status) {
            $scope.histQuotes = data.query.results.quote;
            $scope.yqlHistStatus = status;
        })
        .error(function(data, status) {
            console.error('Error while fetching quotes: ', data, status);
            $scope.yqlHistErrData = data;
            $scope.yqlHistStatus = status;
        });

  });
