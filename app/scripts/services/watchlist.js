'use strict';

angular.module('stockwatchServices', ['ngResource'])
  .factory('Watchlist', ['$resource', function($resource) {
    // Public API here
    return $resource('data/watchlists.json', {}, {
      query: {method: 'GET', params: {}, isArray: true}
    });
  }])
  .factory('YqlQuotes', ['$q', '$http', function($q, $http) {
    var yqlQueryUrl = 'http://query.yahooapis.com/v1/public/yql?q=';
    var yqlOptions = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';

    function buildQuery(yqlArray) {
      return yqlQueryUrl + encodeURIComponent(yqlArray.join(' ')) + yqlOptions;
    }

    function executeQuery(queryUrl, deferObj) {
      $http.jsonp(queryUrl)
        .success(function(data) {
          var result = data.query.results;
          deferObj.resolve(result);
        })
        .error(function(data, status) {
          console.error('Error while fetching quotes: ', data, status);
        });
    }

    return {

      getSymbol: function(str) {
        var deferred = $q.defer();

        /***
         *  SELECT * FROM yahoo.finance.quote
         *  WHERE symbol = "GFT.DE";
         *
         *  REST-Query:
         *  http://query.yahooapis.com/v1/public/yql?q=
         *  USE%20%22https%3A%2F%2Fgist.github.com%2Fjotbe%2Fee2bd20184b936a5a731%2Fraw%22%20AS%20symbol%3B%20
         *  SELECT%20*%20FROM%20symbol%20WHERE%20symbol%20%3D%20%22post%22
         *  &format=json&callback=JSON_CALLBACK
         */
        var yqlQuery = [
          'USE "https://gist.github.com/jotbe/ee2bd20184b936a5a731/raw" AS symbol;',
          'SELECT * FROM symbol WHERE symbol = "' + encodeURIComponent(str) + '"'
        ];

        var query = buildQuery(yqlQuery);
        // console.log('Executing Query:', query);
        executeQuery(query, deferred);

        return deferred.promise;
      },

      getQuote: function(sym) {
        var deferred = $q.defer();

        /***
         *  SELECT * FROM yahoo.finance.quote
         *  WHERE symbol = "GFT.DE";
         *
         *  REST-Query:
         *  http://query.yahooapis.com/v1/public/yql?q=
         *  SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%20%3D%20%22GFT.DE%22
         *  &format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
         *  &callback=JSON_CALLBACK
         */
        var yqlQuery = [
          'SELECT * FROM yahoo.finance.quote',
          'WHERE symbol = "' + sym + '"'
        ];

        var query = buildQuery(yqlQuery);
        executeQuery(query, deferred);

        return deferred.promise;
      },

      getHistoricalQuotes: function(sym, fromDate, toDate) {
        var deferred = $q.defer();

        /***
         *  USE 'https://gist.github.com/jotbe/3f35ceb0f3496c3e2869/raw' as stockhist;
         *  SELECT * FROM stockhist
         *  WHERE symbol = "GFT.DE" AND startDate = "2013-01-01" AND endDate = "2013-07-31"
         *
         *  REST-Query (remove line breaks):
         *  http://query.yahooapis.com/v1/public/yql?q=
         *  USE%20'https%3A%2F%2Fgist.github.com%2Fjotbe%2F3f35ceb0f3496c3e2869%2Fraw'%20as%20stockhist%3B%20
         *  SELECT%20*%20from%20stockhist%20WHERE%20symbol%20%3D%20%22GFT.DE%22%20AND%20
         *  startDate%20%3D%20%222013-01-01%22%20AND%20endDate%20%3D%20%222013-07-31%22
         *  &format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
         *  &callback=JSON_CALLBACK
         */
        var yqlQuery = [
          'USE "https://gist.github.com/jotbe/3f35ceb0f3496c3e2869/raw" AS stockhist;',
          'SELECT * FROM stockhist',
          'WHERE symbol = "' + sym + '"',
          'AND startDate = "' + fromDate + '"',
          'AND endDate = "' + toDate + '"'
        ];

        var query = buildQuery(yqlQuery);
        executeQuery(query, deferred);

        return deferred.promise;
      }
    };
  }]);
