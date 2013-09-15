'use strict';

describe('Service: stockwatchServices: Watchlist', function () {
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

describe('Service: stockwatchServices: YqlQuotes', function () {
  var $httpBackend;

  beforeEach(module('stockwatchServices', 'mockedWatchlist'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');

    var quoteJSON = $injector.get('quoteJSON');
    var queryQuoteUrl = 'http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%20IN%20(%22GFT.DE%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
    $httpBackend.when('JSONP', queryQuoteUrl)
      .respond(quoteJSON);

    var histQuotesJSON = $injector.get('historicalQuotesJSON');
    var queryHistUrl = 'http://query.yahooapis.com/v1/public/yql?q=USE%20%22https%3A%2F%2Fgist.github.com%2Fjotbe%2F3f35ceb0f3496c3e2869%2Fraw%22%20AS%20stockhist%3B%20SELECT%20*%20FROM%20stockhist%20WHERE%20symbol%20%3D%20%22GFT.DE%22%20AND%20startDate%20%3D%20%222013-01-01%22%20AND%20endDate%20%3D%20%222013-07-31%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
    $httpBackend.when('JSONP', queryHistUrl)
      .respond(histQuotesJSON);

    var symbolJSON = $injector.get('symbolJSON');
    var querySymbolUrl = 'http://query.yahooapis.com/v1/public/yql?q=USE%20%22https%3A%2F%2Fgist.github.com%2Fjotbe%2Fee2bd20184b936a5a731%2Fraw%22%20AS%20symbol%3B%20SELECT%20*%20FROM%20symbol%20WHERE%20symbol%20%3D%20%22post%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK';
    $httpBackend.when('JSONP', querySymbolUrl)
      .respond(symbolJSON);

  }));

  it('should request a quote passed as a string', inject(function ($rootScope, YqlQuotes) {
    var promise = YqlQuotes.getQuotes('GFT.DE');
    var res;
    $httpBackend.flush();
    promise.then(function(data) {
      res = data.quote;
    });
    $rootScope.$apply();
    expect(res.symbol).toEqual('GFT.DE');
  }));

  it('should request a quote passed as an array', inject(function ($rootScope, YqlQuotes) {
    var promise = YqlQuotes.getQuotes(['GFT.DE']);
    var res;
    $httpBackend.flush();
    promise.then(function(data) {
      res = data.quote;
    });
    $rootScope.$apply();
    expect(res.symbol).toEqual('GFT.DE');
  }));

  it('should request some historical quotes', inject(function ($rootScope, YqlQuotes) {
    var promise = YqlQuotes.getHistoricalQuotes('GFT.DE', '2013-01-01', '2013-07-31');
    var res;
    $httpBackend.flush();
    promise.then(function(data) {
      res = data.quote;
    });
    $rootScope.$apply();
    expect(res.length).toBe(152);
  }));

  it('should find stock symbols', inject(function ($rootScope, YqlQuotes) {
    var promise = YqlQuotes.getSymbol('post');
    var res;
    $httpBackend.flush();
    promise.then(function(data) {
      res = data.stock;
    });
    $rootScope.$apply();
    expect(res.symbol).toBe('post');
    expect(res.item.length).toBe(6);
    expect(res.item[2].symbol).toBe('DPW.DE');
    expect(res.item[2].name).toBe('Deutsche Post AG');
    expect(res.item[2].type).toBe('Stock');
    expect(res.item[2].exchange).toBe('GER');
  }));
});
