'use strict';

describe('Controller: QuoteCtrl', function () {
  // load the controller's module
  beforeEach(module('stockwatchApp'));

  var QuoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $routeParams) {
    scope = $rootScope.$new();
    var routeParams = $routeParams;
    routeParams.watchlistId = 1;
    routeParams.symbol = 'GFT.DE';

    QuoteCtrl = $controller('QuoteCtrl', {
      $scope: scope,
      $routeParams: $routeParams
    });
  }));

  it('should have the right symbol attached to the scope', function () {
    expect(scope.symbol).toBe('GFT.DE');
  });
});
