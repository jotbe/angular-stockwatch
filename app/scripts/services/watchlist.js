'use strict';

angular.module('stockwatchServices', ['ngResource'])
  .factory('Watchlist', ['$resource', function ($resource) {
      // Public API here
      return $resource('data/watchlists.json', {}, {
        query: {method: 'GET', params: {}, isArray: true}
      });
    }]);
