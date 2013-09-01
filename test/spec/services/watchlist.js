'use strict';

describe('Service: stockwatchServices', function () {
  var $httpBackend, Watchlist;

  beforeEach(module('stockwatchServices', 'mockedWatchlist'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    var watchlistJSON = $injector.get('watchlistJSON');
    $httpBackend.when('GET', 'data/watchlists.json').respond(watchlistJSON);
    Watchlist = $injector.get('Watchlist');
  }));

  it('should get 3 items', inject(function (Watchlist) {
    var watchlist = Watchlist.query();
    $httpBackend.flush();
    expect(watchlist.length).toBe(3);
  }));

});
