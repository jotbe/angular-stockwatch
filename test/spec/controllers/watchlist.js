'use strict';

describe('Controller: WatchlistCtrl', function () {

  // load the controller's module
  beforeEach(module('stockwatchApp'));

  var WatchlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatchlistCtrl = $controller('WatchlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.watchlists.length).toBe(3);
  });
});
