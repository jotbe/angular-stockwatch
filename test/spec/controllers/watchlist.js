'use strict';

describe('Controller: WatchlistCtrl', function () {

  // load the controller's module
  beforeEach(module('stockwatchApp'));

  var WatchlistCtrl,
      scope,
      _httpBackend;

  beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {
      scope = $rootScope.$new();
      _httpBackend = $httpBackend;
      _httpBackend.when('GET', 'data/watchlists.json').respond([{}, {}, {}]);
      WatchlistCtrl = $controller('WatchlistCtrl', {
          $scope: scope,
          $http: $http
        });
    }));

  it('should attach a list of watchlists to the scope', function () {
    _httpBackend.flush();
    expect(scope.watchlists.length).toBe(3);
  });
});
