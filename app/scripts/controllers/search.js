'use strict';

angular.module('stockwatchApp')
  .controller('SearchCtrl', function ($scope, $routeParams, $http, $injector, YqlQuotes, $document) {

    $scope.noSearchResult = true;

    // That's bad practice!
    // Don't include view related functions into a controller.
    // TODO: Transform search into a custom directive.
    $document.mouseup(function(event){
      var resContainer = angular.element('#searchResult');
      if (resContainer.is(':visible') && angular.element(event.target).parents('#searchResult').length === 0) {
        $scope.noSearchResult = true;
        $scope.$apply();
      }
    });

    $scope.findSymbol = function() {
      var searchStr = $scope.searchString;
      if (searchStr) {
        console.log('Fetching symbol: ' + searchStr);
        var promiseQuote = YqlQuotes.getSymbol(searchStr);
        promiseQuote.then(function(data){
          if (!data.stock.hasOwnProperty('item')) {
            console.log('No item found for search string:', searchStr);
            $scope.noSearchResult = true;
            return;
          } else{
            $scope.noSearchResult = false;
          }
          var res = [];
          if (!angular.isArray(data.stock.item)) {
            res.push(data.stock.item);
          } else {
            res = data.stock.item;
          }
          $scope.searchResult = res;
          // console.log('Search returned:', data);
        });
      }
    };

    // Uncommenting the next line will activate real-time instant search.
    $scope.$watch('searchString', $scope.findSymbol, true);
  });
