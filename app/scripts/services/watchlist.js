'use strict';

angular.module('stockwatchServices', ['ngResource'])
  .factory('Watchlist', ['$resource', function($resource) {
    // Public API here
    return $resource('data/watchlists.json', {}, {
      query: {method: 'GET', params: {}, isArray: true}
    });
  }])
  .factory('WatchlistStorage', function($q, $rootScope) {
    var storage;
    var scope = $rootScope;

    var open = function() {
      var deferred = $q.defer();
      storage = new IDBStore({
        dbVersion: 1,
        storeName: 'stockwatch',
        keyPath: 'id',
        autoIncrement: true,
        onStoreReady: function(){
          console.log('Stockwatch storage ready!');
          scope.$apply(function(){
            deferred.resolve(storage);
          });
        },
        onError: function(err) {
          console.log('Error opening the database!');
          scope.$apply(function() {
            deferred.reject(err);
          });
        }
      });
      return deferred.promise;
    };

    function getAll() {
      var deferred = $q.defer();

      function onGetAllSuccess(data) {
        console.log('getAllSuccess: ', data);
        scope.$apply(function() {
          deferred.resolve(data);
        });
      }

      function onError(err) {
        console.log('Storage error: ', err);
        scope.$apply(function() {
          deferred.reject(err);
        });
      }

      console.log('Getting all records');
      storage.getAll(onGetAllSuccess, onError);

      return deferred.promise;
    }

    function getItem(id) {
      var deferred = $q.defer();

      function onGetSuccess(data) {
        console.log('getSuccess: ', data);
        scope.$apply(function() {
          deferred.resolve(data);
        });
      }

      function onError(err) {
        console.log('Storage error: ', err);
        scope.$apply(function() {
          deferred.reject(err);
        });
      }

      console.log('Getting record:', id);
      storage.get(parseInt(id, 10), onGetSuccess, onError);

      return deferred.promise;
    }

    function addItem(item) {
      var deferred = $q.defer();

      function onPutSuccess(id) {
        console.log('putSuccess: ', id);
        scope.$apply(function() {
          deferred.resolve(id);
        });
      }

      function onError(err) {
        console.log('Storage error: ', err);
        scope.$apply(function() {
          deferred.reject(err);
        });
      }

      console.log('Storing item: ', item);
      storage.put(item, onPutSuccess, onError);

      return deferred.promise;
    }

    function deleteItem(id) {
      var deferred = $q.defer();

      function onDeleteSuccess(id) {
        console.log('removeSuccess: ', id);
        scope.$apply(function() {
          deferred.resolve(id);
        });
      }

      function onError(err) {
        console.log('Storage error: ', err);
        scope.$apply(function() {
          deferred.reject(err);
        });
      }

      console.log('Deleting item: ', id);
      storage.remove(id, onDeleteSuccess, onError);

      return deferred.promise;
    }

    return {
      open: function() {
        return open();
      },
      getItems: function() {
        return getAll();
      },
      getItem: function(id) {
        return getItem(id);
      },
      addItem: function(item) {
        return addItem(item);
      },
      deleteItem: function(id) {
        // In live environments this should require a confirmation.
        return deleteItem(id);
      }
    };
  })
  .factory('YqlQuotes', ['$q', '$http', function($q, $http) {
    var yqlQueryUrl = 'http://query.yahooapis.com/v1/public/yql?q=';
    var yqlOptions = '&format=json&callback=JSON_CALLBACK';

    function buildQuery(yqlArray) {
      return yqlQueryUrl + encodeURIComponent(yqlArray.join(' ')) + yqlOptions;
    }

    function executeQuery(queryUrl, deferObj) {
      console.log(queryUrl);
      $http.jsonp(queryUrl)
        .success(function(data) {
          var result;

          if(data && data.hasOwnProperty('query')) {
            result = data.query.results;
            deferObj.resolve(result);
          } else {
            result = 'No data received.';
            console.log(result);
            deferObj.reject(result);
          }

        })
        .error(function(data, status) {
          var result = 'Error while fetching quotes.';
          console.error(result, data, status);
          deferObj.reject(result);
        });
    }

    return {

      getSymbol: function(str) {
        var deferred = $q.defer();

        /***
         *  USE "https://gist.github.com/jotbe/ee2bd20184b936a5a731/raw" AS symbol;
         *  SELECT * FROM symbol
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
          'SELECT * FROM symbol WHERE symbol = "' + str + '"'
        ];

        var query = buildQuery(yqlQuery);
        // console.log('Executing Query:', query);
        executeQuery(query, deferred);

        return deferred.promise;
      },

      getQuotes: function(syms) {
        if (typeof(syms) === 'string') {
          syms = [syms];
        }
        var symbols = syms.join('","');
        var deferred = $q.defer();

        /***
         *  USE "https://gist.github.com/jotbe/e3117bcdcbf1f3cc6c89/raw" as quote;
         *  SELECT * FROM quote
         *  WHERE symbol = "GFT.DE";
         *
         *  REST-Query:
         *  http://query.yahooapis.com/v1/public/yql?q=
         *  USE%20%22https%3A%2F%2Fgist.github.com%2Fjotbe%2Fe3117bcdcbf1f3cc6c89%2Fraw%22%20AS%20quote%3B%20
         *  SELECT%20*%20from%20quote%20WHERE%20symbol%20IN%20(%22GFT.DE%22)
         *  &format=json&callback=JSON_CALLBACK
         */
        var yqlQuery = [
          'USE "https://gist.github.com/jotbe/e3117bcdcbf1f3cc6c89/raw" as quote;',
          'SELECT * FROM quote',
          'WHERE symbol IN ("' + symbols + '")'
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
         *  &format=json&callback=JSON_CALLBACK
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
