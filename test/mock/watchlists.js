'use strict';

angular.module('mockedWatchlist', [])
  .value('watchlistJSON',
    [
      { "id": 1, "name": "Watchlist 1", "date_added": "1373760000000",
        "securities": [
          { "id": 1, "name": "GFT Technologies AG", "symbol": "GFT.DE" },
          { "id": 2, "name": "Bechtle AG", "symbol": "BC8.DE" },
          { "id": 3, "name": "Tesla Motors, Inc.", "symbol": "TSLA" }
        ]
      },
      { "id": 2, "name": "Watchlist 2", "date_added": "1375488000000"  },
      { "id": 3, "name": "Watchlist 3", "date_added": "1376956800000"  }
    ]
  );
