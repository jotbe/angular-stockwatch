'use strict';

describe('Controller: WatchitemCtrl', function () {
  var mockedWatchlistFactory,
      createController,
      $scope,
      $httpBackend,
      routeParams,
      watchlistJSON,
      controller;

  beforeEach(module('stockwatchApp', 'mockedWatchlist', function($provide) {
    mockedWatchlistFactory = {
      'query': jasmine.createSpy()
    };
    $provide.value('Watchlist', mockedWatchlistFactory);
  }));

  beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, $routeParams) {
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams;
      controller = $controller;
      $scope = $rootScope.$new();

      routeParams.watchlistId = 1;

      createController = function() {
        return $controller('WatchitemCtrl', { '$scope': $rootScope, '$routeParams': $routeParams });
      };
    }));

  it('should query the Watchlist factory', function () {
    controller = createController();
    expect(mockedWatchlistFactory.query).toHaveBeenCalled();
  });

  it('should have the right watchlistId', function () {
    controller = createController();
    expect($scope.$routeParams.watchlistId).toBe(1);
  });
});
