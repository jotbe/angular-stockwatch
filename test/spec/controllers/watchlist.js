'use strict';

describe('Controller: WatchlistCtrl', function () {

  beforeEach(module('stockwatchApp', 'mockedWatchlist'));

  var ctrl,
      scope,
      _httpBackend;

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, watchlistJSON, $http) {
      scope = $rootScope.$new();
      _httpBackend = $httpBackend;
      _httpBackend.when('GET', 'data/watchlists.json').respond(watchlistJSON);
      ctrl = $controller('WatchlistCtrl', {
          $scope: scope,
          $http: $http
        });
    }));

  it('should attach a list of watchlists to the scope', function () {
    _httpBackend.flush();
    expect(scope.watchlists.length).toBe(3);
  });
});
