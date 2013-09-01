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
  )
  .value('stockinfoJSON',
    /* curl -L "http://query.yahooapis.com/v1/public/yql?q=use%20'https%3A%2F%2Fgist.github.com%2Fjotbe%2F36245986f6fa00a0cfac%2Fraw'%20as%20mytable%3B%20select%20*%20from%20mytable%20where%20symbol%3D'GFT.DE'&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys" */
    [
      {
        "query": {
          "count": 1,
          "created": "2013-08-28T06:37:58Z",
          "lang": "en-US",
          "results": {
            "stock": {
              "symbol": "TSLA",
              "CompanyName": "Tesla Motors, Inc. (TSLA)",
              "StartDate": "2010-06-29",
              "EndDate": "2013-08-28",
              "Indexes": {
                "Index": {
                  "symbol": "^NDX",
                  "content": "Nasdaq 100"
                }
              },
              "Sector": "Consumer Goods",
              "Industry": "Auto Manufacturers - Major",
              "FullTimeEmployees": "2964",
              "Executives": null
            }
          }
        }
      },
      {
        "query": {
          "count": 1,
          "created": "2013-08-28T06:38:30Z",
          "lang": "en-US",
          "results": {
            "stock": {
              "symbol": "BC8.DE",
              "CompanyName": "Bechtle AG (BC8.DE)",
              "StartDate": "2000-03-30",
              "EndDate": "2013-08-28",
              "Indexes": null,
              "Sector": "Technology",
              "Industry": "Information Technology Services",
              "FullTimeEmployees": "6053",
              "Executives": null
            }
          }
        }
      },
      {
        "query": {
          "count": 1,
          "created": "2013-08-28T06:38:52Z",
          "lang": "en-US",
          "results": {
            "stock": {
              "symbol": "GFT.DE",
              "CompanyName": "GFT Technologies AG (GFT.DE)",
              "Indexes": null,
              "Sector": "Technology",
              "Industry": "Information Technology Services",
              "FullTimeEmployees": "1503",
              "Executives": null
            }
          }
        }
      }
    ]
  )
  .value('historicalQuotesJSON',
    /*http://query.yahooapis.com/v1/public/yql?q=use%20'https%3A%2F%2Fgist.github.com%2Fjotbe%2F3f35ceb0f3496c3e2869%2Fraw'%20as%20stockhist%3B%20select%20*%20from%20stockhist%20where%20symbol%20%3D%20%22GFT.DE%22%20and%20startDate%20%3D%20%222013-01-01%22%20and%20endDate%20%3D%20%222013-07-31%22&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys*/
    {
      "query": {
        "count": 152,
        "created": "2013-08-28T06:51:14Z",
        "lang": "en-US",
        "results": {
          "quote": [
            {
              "date": "2013-07-31",
              "Date": "2013-07-31",
              "Open": "5.00",
              "High": "5.00",
              "Low": "4.33",
              "Close": "4.68",
              "Volume": "363700",
              "Adj_Close": "4.68"
            },
            {
              "date": "2013-07-30",
              "Date": "2013-07-30",
              "Open": "5.00",
              "High": "5.06",
              "Low": "4.95",
              "Close": "5.02",
              "Volume": "62700",
              "Adj_Close": "5.02"
            },
            {
              "date": "2013-07-29",
              "Date": "2013-07-29",
              "Open": "4.87",
              "High": "5.19",
              "Low": "4.87",
              "Close": "5.06",
              "Volume": "142300",
              "Adj_Close": "5.06"
            },
            {
              "date": "2013-07-26",
              "Date": "2013-07-26",
              "Open": "4.75",
              "High": "5.00",
              "Low": "4.75",
              "Close": "4.84",
              "Volume": "111700",
              "Adj_Close": "4.84"
            },
            {
              "date": "2013-07-25",
              "Date": "2013-07-25",
              "Open": "4.70",
              "High": "4.77",
              "Low": "4.66",
              "Close": "4.77",
              "Volume": "44000",
              "Adj_Close": "4.77"
            },
            {
              "date": "2013-07-24",
              "Date": "2013-07-24",
              "Open": "4.74",
              "High": "4.74",
              "Low": "4.62",
              "Close": "4.62",
              "Volume": "52100",
              "Adj_Close": "4.62"
            },
            {
              "date": "2013-07-23",
              "Date": "2013-07-23",
              "Open": "4.63",
              "High": "4.73",
              "Low": "4.61",
              "Close": "4.73",
              "Volume": "47300",
              "Adj_Close": "4.73"
            },
            {
              "date": "2013-07-22",
              "Date": "2013-07-22",
              "Open": "4.64",
              "High": "4.67",
              "Low": "4.55",
              "Close": "4.61",
              "Volume": "108800",
              "Adj_Close": "4.61"
            },
            {
              "date": "2013-07-19",
              "Date": "2013-07-19",
              "Open": "4.54",
              "High": "4.54",
              "Low": "4.48",
              "Close": "4.52",
              "Volume": "22800",
              "Adj_Close": "4.52"
            },
            {
              "date": "2013-07-18",
              "Date": "2013-07-18",
              "Open": "4.54",
              "High": "4.54",
              "Low": "4.51",
              "Close": "4.54",
              "Volume": "18400",
              "Adj_Close": "4.54"
            },
            {
              "date": "2013-07-17",
              "Date": "2013-07-17",
              "Open": "4.45",
              "High": "4.54",
              "Low": "4.45",
              "Close": "4.54",
              "Volume": "11100",
              "Adj_Close": "4.54"
            },
            {
              "date": "2013-07-16",
              "Date": "2013-07-16",
              "Open": "4.55",
              "High": "4.59",
              "Low": "4.51",
              "Close": "4.56",
              "Volume": "35900",
              "Adj_Close": "4.56"
            },
            {
              "date": "2013-07-15",
              "Date": "2013-07-15",
              "Open": "4.33",
              "High": "4.65",
              "Low": "4.32",
              "Close": "4.46",
              "Volume": "78200",
              "Adj_Close": "4.46"
            },
            {
              "date": "2013-07-12",
              "Date": "2013-07-12",
              "Open": "4.28",
              "High": "4.31",
              "Low": "4.20",
              "Close": "4.27",
              "Volume": "33800",
              "Adj_Close": "4.27"
            },
            {
              "date": "2013-07-11",
              "Date": "2013-07-11",
              "Open": "4.10",
              "High": "4.30",
              "Low": "4.07",
              "Close": "4.29",
              "Volume": "50400",
              "Adj_Close": "4.29"
            },
            {
              "date": "2013-07-10",
              "Date": "2013-07-10",
              "Open": "4.05",
              "High": "4.10",
              "Low": "4.00",
              "Close": "4.10",
              "Volume": "5300",
              "Adj_Close": "4.10"
            },
            {
              "date": "2013-07-09",
              "Date": "2013-07-09",
              "Open": "4.05",
              "High": "4.06",
              "Low": "4.03",
              "Close": "4.06",
              "Volume": "3300",
              "Adj_Close": "4.06"
            },
            {
              "date": "2013-07-08",
              "Date": "2013-07-08",
              "Open": "3.99",
              "High": "4.06",
              "Low": "3.99",
              "Close": "4.06",
              "Volume": "10300",
              "Adj_Close": "4.06"
            },
            {
              "date": "2013-07-05",
              "Date": "2013-07-05",
              "Open": "4.01",
              "High": "4.03",
              "Low": "3.99",
              "Close": "4.03",
              "Volume": "6000",
              "Adj_Close": "4.03"
            },
            {
              "date": "2013-07-04",
              "Date": "2013-07-04",
              "Open": "4.00",
              "High": "4.05",
              "Low": "3.99",
              "Close": "4.00",
              "Volume": "10700",
              "Adj_Close": "4.00"
            },
            {
              "date": "2013-07-03",
              "Date": "2013-07-03",
              "Open": "4.10",
              "High": "4.10",
              "Low": "4.00",
              "Close": "4.00",
              "Volume": "24500",
              "Adj_Close": "4.00"
            },
            {
              "date": "2013-07-02",
              "Date": "2013-07-02",
              "Open": "4.05",
              "High": "4.12",
              "Low": "4.05",
              "Close": "4.11",
              "Volume": "14800",
              "Adj_Close": "4.11"
            },
            {
              "date": "2013-07-01",
              "Date": "2013-07-01",
              "Open": "4.06",
              "High": "4.09",
              "Low": "4.00",
              "Close": "4.05",
              "Volume": "9200",
              "Adj_Close": "4.05"
            },
            {
              "date": "2013-06-28",
              "Date": "2013-06-28",
              "Open": "4.14",
              "High": "4.14",
              "Low": "3.98",
              "Close": "4.09",
              "Volume": "22100",
              "Adj_Close": "4.09"
            },
            {
              "date": "2013-06-27",
              "Date": "2013-06-27",
              "Open": "4.02",
              "High": "4.14",
              "Low": "4.02",
              "Close": "4.14",
              "Volume": "15800",
              "Adj_Close": "4.14"
            },
            {
              "date": "2013-06-26",
              "Date": "2013-06-26",
              "Open": "3.95",
              "High": "4.01",
              "Low": "3.95",
              "Close": "3.99",
              "Volume": "10100",
              "Adj_Close": "3.99"
            },
            {
              "date": "2013-06-25",
              "Date": "2013-06-25",
              "Open": "3.95",
              "High": "3.98",
              "Low": "3.92",
              "Close": "3.93",
              "Volume": "20200",
              "Adj_Close": "3.93"
            },
            {
              "date": "2013-06-24",
              "Date": "2013-06-24",
              "Open": "4.13",
              "High": "4.16",
              "Low": "3.95",
              "Close": "3.98",
              "Volume": "59800",
              "Adj_Close": "3.98"
            },
            {
              "date": "2013-06-21",
              "Date": "2013-06-21",
              "Open": "4.05",
              "High": "4.13",
              "Low": "4.05",
              "Close": "4.12",
              "Volume": "20400",
              "Adj_Close": "4.12"
            },
            {
              "date": "2013-06-20",
              "Date": "2013-06-20",
              "Open": "4.17",
              "High": "4.17",
              "Low": "4.07",
              "Close": "4.07",
              "Volume": "15700",
              "Adj_Close": "4.07"
            },
            {
              "date": "2013-06-19",
              "Date": "2013-06-19",
              "Open": "4.18",
              "High": "4.20",
              "Low": "4.17",
              "Close": "4.20",
              "Volume": "22800",
              "Adj_Close": "4.20"
            },
            {
              "date": "2013-06-18",
              "Date": "2013-06-18",
              "Open": "4.19",
              "High": "4.22",
              "Low": "4.17",
              "Close": "4.18",
              "Volume": "13500",
              "Adj_Close": "4.18"
            },
            {
              "date": "2013-06-17",
              "Date": "2013-06-17",
              "Open": "4.15",
              "High": "4.24",
              "Low": "4.15",
              "Close": "4.20",
              "Volume": "15700",
              "Adj_Close": "4.20"
            },
            {
              "date": "2013-06-14",
              "Date": "2013-06-14",
              "Open": "4.12",
              "High": "4.20",
              "Low": "4.09",
              "Close": "4.09",
              "Volume": "33100",
              "Adj_Close": "4.09"
            },
            {
              "date": "2013-06-13",
              "Date": "2013-06-13",
              "Open": "4.09",
              "High": "4.13",
              "Low": "3.88",
              "Close": "4.13",
              "Volume": "82300",
              "Adj_Close": "4.13"
            },
            {
              "date": "2013-06-12",
              "Date": "2013-06-12",
              "Open": "4.07",
              "High": "4.14",
              "Low": "4.07",
              "Close": "4.14",
              "Volume": "18500",
              "Adj_Close": "4.14"
            },
            {
              "date": "2013-06-11",
              "Date": "2013-06-11",
              "Open": "4.15",
              "High": "4.17",
              "Low": "4.10",
              "Close": "4.11",
              "Volume": "21400",
              "Adj_Close": "4.11"
            },
            {
              "date": "2013-06-10",
              "Date": "2013-06-10",
              "Open": "4.05",
              "High": "4.16",
              "Low": "4.05",
              "Close": "4.16",
              "Volume": "62200",
              "Adj_Close": "4.16"
            },
            {
              "date": "2013-06-07",
              "Date": "2013-06-07",
              "Open": "4.05",
              "High": "4.05",
              "Low": "4.00",
              "Close": "4.05",
              "Volume": "24800",
              "Adj_Close": "4.05"
            },
            {
              "date": "2013-06-06",
              "Date": "2013-06-06",
              "Open": "4.09",
              "High": "4.09",
              "Low": "3.99",
              "Close": "4.05",
              "Volume": "73800",
              "Adj_Close": "4.05"
            },
            {
              "date": "2013-06-05",
              "Date": "2013-06-05",
              "Open": "4.08",
              "High": "4.09",
              "Low": "4.05",
              "Close": "4.09",
              "Volume": "31500",
              "Adj_Close": "4.09"
            },
            {
              "date": "2013-06-04",
              "Date": "2013-06-04",
              "Open": "4.10",
              "High": "4.11",
              "Low": "4.06",
              "Close": "4.08",
              "Volume": "23400",
              "Adj_Close": "4.08"
            },
            {
              "date": "2013-06-03",
              "Date": "2013-06-03",
              "Open": "4.08",
              "High": "4.10",
              "Low": "3.96",
              "Close": "4.09",
              "Volume": "54900",
              "Adj_Close": "4.09"
            },
            {
              "date": "2013-05-31",
              "Date": "2013-05-31",
              "Open": "4.00",
              "High": "4.09",
              "Low": "3.99",
              "Close": "4.00",
              "Volume": "70600",
              "Adj_Close": "4.00"
            },
            {
              "date": "2013-05-30",
              "Date": "2013-05-30",
              "Open": "3.89",
              "High": "3.90",
              "Low": "3.84",
              "Close": "3.90",
              "Volume": "14700",
              "Adj_Close": "3.90"
            },
            {
              "date": "2013-05-29",
              "Date": "2013-05-29",
              "Open": "3.91",
              "High": "3.93",
              "Low": "3.85",
              "Close": "3.89",
              "Volume": "13000",
              "Adj_Close": "3.89"
            },
            {
              "date": "2013-05-28",
              "Date": "2013-05-28",
              "Open": "3.85",
              "High": "3.90",
              "Low": "3.85",
              "Close": "3.90",
              "Volume": "19300",
              "Adj_Close": "3.90"
            },
            {
              "date": "2013-05-27",
              "Date": "2013-05-27",
              "Open": "3.85",
              "High": "3.91",
              "Low": "3.77",
              "Close": "3.84",
              "Volume": "11300",
              "Adj_Close": "3.84"
            },
            {
              "date": "2013-05-24",
              "Date": "2013-05-24",
              "Open": "3.85",
              "High": "3.89",
              "Low": "3.75",
              "Close": "3.78",
              "Volume": "36800",
              "Adj_Close": "3.78"
            },
            {
              "date": "2013-05-23",
              "Date": "2013-05-23",
              "Open": "3.78",
              "High": "3.85",
              "Low": "3.75",
              "Close": "3.85",
              "Volume": "32800",
              "Adj_Close": "3.85"
            },
            {
              "date": "2013-05-22",
              "Date": "2013-05-22",
              "Open": "3.72",
              "High": "3.83",
              "Low": "3.72",
              "Close": "3.83",
              "Volume": "34100",
              "Adj_Close": "3.83"
            },
            {
              "date": "2013-05-21",
              "Date": "2013-05-21",
              "Open": "3.72",
              "High": "3.78",
              "Low": "3.68",
              "Close": "3.70",
              "Volume": "69700",
              "Adj_Close": "3.70"
            },
            {
              "date": "2013-05-20",
              "Date": "2013-05-20",
              "Open": "3.83",
              "High": "3.83",
              "Low": "3.72",
              "Close": "3.77",
              "Volume": "10600",
              "Adj_Close": "3.77"
            },
            {
              "date": "2013-05-17",
              "Date": "2013-05-17",
              "Open": "3.80",
              "High": "3.80",
              "Low": "3.70",
              "Close": "3.75",
              "Volume": "42000",
              "Adj_Close": "3.75"
            },
            {
              "date": "2013-05-16",
              "Date": "2013-05-16",
              "Open": "3.81",
              "High": "3.84",
              "Low": "3.75",
              "Close": "3.75",
              "Volume": "59800",
              "Adj_Close": "3.75"
            },
            {
              "date": "2013-05-15",
              "Date": "2013-05-15",
              "Open": "3.79",
              "High": "3.85",
              "Low": "3.76",
              "Close": "3.85",
              "Volume": "109100",
              "Adj_Close": "3.85"
            },
            {
              "date": "2013-05-14",
              "Date": "2013-05-14",
              "Open": "3.78",
              "High": "3.79",
              "Low": "3.73",
              "Close": "3.78",
              "Volume": "13100",
              "Adj_Close": "3.78"
            },
            {
              "date": "2013-05-13",
              "Date": "2013-05-13",
              "Open": "3.77",
              "High": "3.81",
              "Low": "3.73",
              "Close": "3.78",
              "Volume": "45800",
              "Adj_Close": "3.78"
            },
            {
              "date": "2013-05-10",
              "Date": "2013-05-10",
              "Open": "3.68",
              "High": "3.79",
              "Low": "3.66",
              "Close": "3.75",
              "Volume": "29100",
              "Adj_Close": "3.75"
            },
            {
              "date": "2013-05-09",
              "Date": "2013-05-09",
              "Open": "3.67",
              "High": "3.73",
              "Low": "3.67",
              "Close": "3.73",
              "Volume": "5000",
              "Adj_Close": "3.73"
            },
            {
              "date": "2013-05-08",
              "Date": "2013-05-08",
              "Open": "3.62",
              "High": "3.73",
              "Low": "3.60",
              "Close": "3.73",
              "Volume": "43700",
              "Adj_Close": "3.73"
            },
            {
              "date": "2013-05-07",
              "Date": "2013-05-07",
              "Open": "3.62",
              "High": "3.62",
              "Low": "3.54",
              "Close": "3.62",
              "Volume": "11500",
              "Adj_Close": "3.62"
            },
            {
              "date": "2013-05-06",
              "Date": "2013-05-06",
              "Open": "3.48",
              "High": "3.60",
              "Low": "3.48",
              "Close": "3.60",
              "Volume": "46100",
              "Adj_Close": "3.60"
            },
            {
              "date": "2013-05-03",
              "Date": "2013-05-03",
              "Open": "3.57",
              "High": "3.57",
              "Low": "3.50",
              "Close": "3.50",
              "Volume": "9000",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-05-02",
              "Date": "2013-05-02",
              "Open": "3.55",
              "High": "3.55",
              "Low": "3.49",
              "Close": "3.50",
              "Volume": "22800",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-05-01",
              "Date": "2013-05-01",
              "Open": "3.54",
              "High": "3.54",
              "Low": "3.54",
              "Close": "3.54",
              "Volume": "000",
              "Adj_Close": "3.54"
            },
            {
              "date": "2013-04-30",
              "Date": "2013-04-30",
              "Open": "3.55",
              "High": "3.58",
              "Low": "3.50",
              "Close": "3.54",
              "Volume": "15000",
              "Adj_Close": "3.54"
            },
            {
              "date": "2013-04-29",
              "Date": "2013-04-29",
              "Open": "3.58",
              "High": "3.58",
              "Low": "3.48",
              "Close": "3.54",
              "Volume": "9900",
              "Adj_Close": "3.54"
            },
            {
              "date": "2013-04-26",
              "Date": "2013-04-26",
              "Open": "3.57",
              "High": "3.57",
              "Low": "3.50",
              "Close": "3.51",
              "Volume": "2900",
              "Adj_Close": "3.51"
            },
            {
              "date": "2013-04-25",
              "Date": "2013-04-25",
              "Open": "3.53",
              "High": "3.60",
              "Low": "3.52",
              "Close": "3.57",
              "Volume": "17300",
              "Adj_Close": "3.57"
            },
            {
              "date": "2013-04-24",
              "Date": "2013-04-24",
              "Open": "3.52",
              "High": "3.54",
              "Low": "3.52",
              "Close": "3.53",
              "Volume": "3400",
              "Adj_Close": "3.53"
            },
            {
              "date": "2013-04-23",
              "Date": "2013-04-23",
              "Open": "3.58",
              "High": "3.62",
              "Low": "3.54",
              "Close": "3.59",
              "Volume": "14200",
              "Adj_Close": "3.59"
            },
            {
              "date": "2013-04-22",
              "Date": "2013-04-22",
              "Open": "3.50",
              "High": "3.58",
              "Low": "3.50",
              "Close": "3.58",
              "Volume": "300",
              "Adj_Close": "3.58"
            },
            {
              "date": "2013-04-19",
              "Date": "2013-04-19",
              "Open": "3.55",
              "High": "3.57",
              "Low": "3.50",
              "Close": "3.50",
              "Volume": "4000",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-04-18",
              "Date": "2013-04-18",
              "Open": "3.55",
              "High": "3.55",
              "Low": "3.44",
              "Close": "3.44",
              "Volume": "18700",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-04-17",
              "Date": "2013-04-17",
              "Open": "3.59",
              "High": "3.64",
              "Low": "3.55",
              "Close": "3.61",
              "Volume": "4600",
              "Adj_Close": "3.61"
            },
            {
              "date": "2013-04-16",
              "Date": "2013-04-16",
              "Open": "3.57",
              "High": "3.59",
              "Low": "3.55",
              "Close": "3.59",
              "Volume": "25300",
              "Adj_Close": "3.59"
            },
            {
              "date": "2013-04-15",
              "Date": "2013-04-15",
              "Open": "3.52",
              "High": "3.58",
              "Low": "3.47",
              "Close": "3.58",
              "Volume": "23200",
              "Adj_Close": "3.58"
            },
            {
              "date": "2013-04-12",
              "Date": "2013-04-12",
              "Open": "3.49",
              "High": "3.58",
              "Low": "3.44",
              "Close": "3.52",
              "Volume": "38100",
              "Adj_Close": "3.52"
            },
            {
              "date": "2013-04-11",
              "Date": "2013-04-11",
              "Open": "3.53",
              "High": "3.53",
              "Low": "3.49",
              "Close": "3.49",
              "Volume": "30800",
              "Adj_Close": "3.49"
            },
            {
              "date": "2013-04-10",
              "Date": "2013-04-10",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.47",
              "Close": "3.48",
              "Volume": "6000",
              "Adj_Close": "3.48"
            },
            {
              "date": "2013-04-09",
              "Date": "2013-04-09",
              "Open": "3.49",
              "High": "3.49",
              "Low": "3.49",
              "Close": "3.49",
              "Volume": "900",
              "Adj_Close": "3.49"
            },
            {
              "date": "2013-04-08",
              "Date": "2013-04-08",
              "Open": "3.40",
              "High": "3.50",
              "Low": "3.40",
              "Close": "3.50",
              "Volume": "25700",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-04-05",
              "Date": "2013-04-05",
              "Open": "3.56",
              "High": "3.56",
              "Low": "3.40",
              "Close": "3.43",
              "Volume": "27900",
              "Adj_Close": "3.43"
            },
            {
              "date": "2013-04-04",
              "Date": "2013-04-04",
              "Open": "3.55",
              "High": "3.56",
              "Low": "3.48",
              "Close": "3.52",
              "Volume": "12600",
              "Adj_Close": "3.52"
            },
            {
              "date": "2013-04-03",
              "Date": "2013-04-03",
              "Open": "3.50",
              "High": "3.55",
              "Low": "3.50",
              "Close": "3.55",
              "Volume": "8100",
              "Adj_Close": "3.55"
            },
            {
              "date": "2013-04-02",
              "Date": "2013-04-02",
              "Open": "3.50",
              "High": "3.50",
              "Low": "3.42",
              "Close": "3.50",
              "Volume": "22200",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-04-01",
              "Date": "2013-04-01",
              "Open": "3.44",
              "High": "3.44",
              "Low": "3.44",
              "Close": "3.44",
              "Volume": "000",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-03-29",
              "Date": "2013-03-29",
              "Open": "3.44",
              "High": "3.44",
              "Low": "3.44",
              "Close": "3.44",
              "Volume": "000",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-03-28",
              "Date": "2013-03-28",
              "Open": "3.49",
              "High": "3.49",
              "Low": "3.43",
              "Close": "3.44",
              "Volume": "13700",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-03-27",
              "Date": "2013-03-27",
              "Open": "3.46",
              "High": "3.49",
              "Low": "3.42",
              "Close": "3.49",
              "Volume": "9800",
              "Adj_Close": "3.49"
            },
            {
              "date": "2013-03-26",
              "Date": "2013-03-26",
              "Open": "3.46",
              "High": "3.46",
              "Low": "3.39",
              "Close": "3.46",
              "Volume": "17800",
              "Adj_Close": "3.46"
            },
            {
              "date": "2013-03-25",
              "Date": "2013-03-25",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.45",
              "Close": "3.45",
              "Volume": "4500",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-03-22",
              "Date": "2013-03-22",
              "Open": "3.45",
              "High": "3.48",
              "Low": "3.41",
              "Close": "3.41",
              "Volume": "17700",
              "Adj_Close": "3.41"
            },
            {
              "date": "2013-03-21",
              "Date": "2013-03-21",
              "Open": "3.39",
              "High": "3.45",
              "Low": "3.39",
              "Close": "3.45",
              "Volume": "22400",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-03-20",
              "Date": "2013-03-20",
              "Open": "3.39",
              "High": "3.39",
              "Low": "3.36",
              "Close": "3.39",
              "Volume": "5300",
              "Adj_Close": "3.39"
            },
            {
              "date": "2013-03-19",
              "Date": "2013-03-19",
              "Open": "3.39",
              "High": "3.39",
              "Low": "3.39",
              "Close": "3.39",
              "Volume": "11800",
              "Adj_Close": "3.39"
            },
            {
              "date": "2013-03-18",
              "Date": "2013-03-18",
              "Open": "3.45",
              "High": "3.45",
              "Low": "3.36",
              "Close": "3.38",
              "Volume": "31400",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-03-15",
              "Date": "2013-03-15",
              "Open": "3.34",
              "High": "3.40",
              "Low": "3.33",
              "Close": "3.40",
              "Volume": "23300",
              "Adj_Close": "3.40"
            },
            {
              "date": "2013-03-14",
              "Date": "2013-03-14",
              "Open": "3.34",
              "High": "3.40",
              "Low": "3.34",
              "Close": "3.34",
              "Volume": "9300",
              "Adj_Close": "3.34"
            },
            {
              "date": "2013-03-13",
              "Date": "2013-03-13",
              "Open": "3.36",
              "High": "3.37",
              "Low": "3.32",
              "Close": "3.32",
              "Volume": "10400",
              "Adj_Close": "3.32"
            },
            {
              "date": "2013-03-12",
              "Date": "2013-03-12",
              "Open": "3.40",
              "High": "3.40",
              "Low": "3.35",
              "Close": "3.38",
              "Volume": "15200",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-03-11",
              "Date": "2013-03-11",
              "Open": "3.35",
              "High": "3.40",
              "Low": "3.35",
              "Close": "3.35",
              "Volume": "4400",
              "Adj_Close": "3.35"
            },
            {
              "date": "2013-03-08",
              "Date": "2013-03-08",
              "Open": "3.37",
              "High": "3.40",
              "Low": "3.34",
              "Close": "3.40",
              "Volume": "7400",
              "Adj_Close": "3.40"
            },
            {
              "date": "2013-03-07",
              "Date": "2013-03-07",
              "Open": "3.33",
              "High": "3.39",
              "Low": "3.33",
              "Close": "3.35",
              "Volume": "8000",
              "Adj_Close": "3.35"
            },
            {
              "date": "2013-03-06",
              "Date": "2013-03-06",
              "Open": "3.33",
              "High": "3.39",
              "Low": "3.33",
              "Close": "3.38",
              "Volume": "19600",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-03-05",
              "Date": "2013-03-05",
              "Open": "3.33",
              "High": "3.36",
              "Low": "3.33",
              "Close": "3.36",
              "Volume": "12000",
              "Adj_Close": "3.36"
            },
            {
              "date": "2013-03-04",
              "Date": "2013-03-04",
              "Open": "3.33",
              "High": "3.35",
              "Low": "3.30",
              "Close": "3.35",
              "Volume": "6300",
              "Adj_Close": "3.35"
            },
            {
              "date": "2013-03-01",
              "Date": "2013-03-01",
              "Open": "3.38",
              "High": "3.38",
              "Low": "3.36",
              "Close": "3.38",
              "Volume": "9900",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-02-28",
              "Date": "2013-02-28",
              "Open": "3.39",
              "High": "3.39",
              "Low": "3.34",
              "Close": "3.38",
              "Volume": "45500",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-02-27",
              "Date": "2013-02-27",
              "Open": "3.45",
              "High": "3.45",
              "Low": "3.38",
              "Close": "3.39",
              "Volume": "6500",
              "Adj_Close": "3.39"
            },
            {
              "date": "2013-02-26",
              "Date": "2013-02-26",
              "Open": "3.42",
              "High": "3.45",
              "Low": "3.41",
              "Close": "3.41",
              "Volume": "20300",
              "Adj_Close": "3.41"
            },
            {
              "date": "2013-02-25",
              "Date": "2013-02-25",
              "Open": "3.41",
              "High": "3.45",
              "Low": "3.41",
              "Close": "3.45",
              "Volume": "5800",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-02-22",
              "Date": "2013-02-22",
              "Open": "3.42",
              "High": "3.46",
              "Low": "3.42",
              "Close": "3.46",
              "Volume": "31900",
              "Adj_Close": "3.46"
            },
            {
              "date": "2013-02-21",
              "Date": "2013-02-21",
              "Open": "3.45",
              "High": "3.45",
              "Low": "3.42",
              "Close": "3.42",
              "Volume": "11900",
              "Adj_Close": "3.42"
            },
            {
              "date": "2013-02-20",
              "Date": "2013-02-20",
              "Open": "3.47",
              "High": "3.48",
              "Low": "3.47",
              "Close": "3.48",
              "Volume": "16300",
              "Adj_Close": "3.48"
            },
            {
              "date": "2013-02-19",
              "Date": "2013-02-19",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.45",
              "Close": "3.48",
              "Volume": "14200",
              "Adj_Close": "3.48"
            },
            {
              "date": "2013-02-18",
              "Date": "2013-02-18",
              "Open": "3.45",
              "High": "3.48",
              "Low": "3.45",
              "Close": "3.48",
              "Volume": "10500",
              "Adj_Close": "3.48"
            },
            {
              "date": "2013-02-15",
              "Date": "2013-02-15",
              "Open": "3.43",
              "High": "3.46",
              "Low": "3.43",
              "Close": "3.43",
              "Volume": "6900",
              "Adj_Close": "3.43"
            },
            {
              "date": "2013-02-14",
              "Date": "2013-02-14",
              "Open": "3.43",
              "High": "3.44",
              "Low": "3.40",
              "Close": "3.44",
              "Volume": "21200",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-02-13",
              "Date": "2013-02-13",
              "Open": "3.44",
              "High": "3.46",
              "Low": "3.44",
              "Close": "3.46",
              "Volume": "10700",
              "Adj_Close": "3.46"
            },
            {
              "date": "2013-02-12",
              "Date": "2013-02-12",
              "Open": "3.41",
              "High": "3.43",
              "Low": "3.40",
              "Close": "3.40",
              "Volume": "8000",
              "Adj_Close": "3.40"
            },
            {
              "date": "2013-02-11",
              "Date": "2013-02-11",
              "Open": "3.39",
              "High": "3.42",
              "Low": "3.39",
              "Close": "3.41",
              "Volume": "3900",
              "Adj_Close": "3.41"
            },
            {
              "date": "2013-02-08",
              "Date": "2013-02-08",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.41",
              "Close": "3.45",
              "Volume": "8200",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-02-07",
              "Date": "2013-02-07",
              "Open": "3.40",
              "High": "3.46",
              "Low": "3.40",
              "Close": "3.45",
              "Volume": "7500",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-02-06",
              "Date": "2013-02-06",
              "Open": "3.49",
              "High": "3.50",
              "Low": "3.42",
              "Close": "3.42",
              "Volume": "10100",
              "Adj_Close": "3.42"
            },
            {
              "date": "2013-02-05",
              "Date": "2013-02-05",
              "Open": "3.43",
              "High": "3.50",
              "Low": "3.43",
              "Close": "3.49",
              "Volume": "32400",
              "Adj_Close": "3.49"
            },
            {
              "date": "2013-02-04",
              "Date": "2013-02-04",
              "Open": "3.39",
              "High": "3.40",
              "Low": "3.39",
              "Close": "3.40",
              "Volume": "2800",
              "Adj_Close": "3.40"
            },
            {
              "date": "2013-02-01",
              "Date": "2013-02-01",
              "Open": "3.42",
              "High": "3.45",
              "Low": "3.35",
              "Close": "3.45",
              "Volume": "33800",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-01-31",
              "Date": "2013-01-31",
              "Open": "3.41",
              "High": "3.44",
              "Low": "3.41",
              "Close": "3.41",
              "Volume": "11700",
              "Adj_Close": "3.41"
            },
            {
              "date": "2013-01-30",
              "Date": "2013-01-30",
              "Open": "3.44",
              "High": "3.44",
              "Low": "3.42",
              "Close": "3.42",
              "Volume": "1000",
              "Adj_Close": "3.42"
            },
            {
              "date": "2013-01-29",
              "Date": "2013-01-29",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.40",
              "Close": "3.46",
              "Volume": "28300",
              "Adj_Close": "3.46"
            },
            {
              "date": "2013-01-28",
              "Date": "2013-01-28",
              "Open": "3.43",
              "High": "3.44",
              "Low": "3.40",
              "Close": "3.44",
              "Volume": "6800",
              "Adj_Close": "3.44"
            },
            {
              "date": "2013-01-25",
              "Date": "2013-01-25",
              "Open": "3.44",
              "High": "3.48",
              "Low": "3.38",
              "Close": "3.40",
              "Volume": "29000",
              "Adj_Close": "3.40"
            },
            {
              "date": "2013-01-24",
              "Date": "2013-01-24",
              "Open": "3.47",
              "High": "3.49",
              "Low": "3.43",
              "Close": "3.43",
              "Volume": "11800",
              "Adj_Close": "3.43"
            },
            {
              "date": "2013-01-23",
              "Date": "2013-01-23",
              "Open": "3.48",
              "High": "3.48",
              "Low": "3.45",
              "Close": "3.45",
              "Volume": "13000",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-01-22",
              "Date": "2013-01-22",
              "Open": "3.50",
              "High": "3.50",
              "Low": "3.47",
              "Close": "3.49",
              "Volume": "5100",
              "Adj_Close": "3.49"
            },
            {
              "date": "2013-01-21",
              "Date": "2013-01-21",
              "Open": "3.45",
              "High": "3.50",
              "Low": "3.45",
              "Close": "3.50",
              "Volume": "5600",
              "Adj_Close": "3.50"
            },
            {
              "date": "2013-01-18",
              "Date": "2013-01-18",
              "Open": "3.40",
              "High": "3.45",
              "Low": "3.40",
              "Close": "3.43",
              "Volume": "2200",
              "Adj_Close": "3.43"
            },
            {
              "date": "2013-01-17",
              "Date": "2013-01-17",
              "Open": "3.38",
              "High": "3.45",
              "Low": "3.38",
              "Close": "3.45",
              "Volume": "3000",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-01-16",
              "Date": "2013-01-16",
              "Open": "3.38",
              "High": "3.45",
              "Low": "3.38",
              "Close": "3.38",
              "Volume": "23500",
              "Adj_Close": "3.38"
            },
            {
              "date": "2013-01-15",
              "Date": "2013-01-15",
              "Open": "3.33",
              "High": "3.35",
              "Low": "3.31",
              "Close": "3.31",
              "Volume": "14900",
              "Adj_Close": "3.31"
            },
            {
              "date": "2013-01-14",
              "Date": "2013-01-14",
              "Open": "3.46",
              "High": "3.47",
              "Low": "3.31",
              "Close": "3.35",
              "Volume": "37600",
              "Adj_Close": "3.35"
            },
            {
              "date": "2013-01-11",
              "Date": "2013-01-11",
              "Open": "3.40",
              "High": "3.47",
              "Low": "3.40",
              "Close": "3.45",
              "Volume": "18900",
              "Adj_Close": "3.45"
            },
            {
              "date": "2013-01-10",
              "Date": "2013-01-10",
              "Open": "3.32",
              "High": "3.39",
              "Low": "3.30",
              "Close": "3.39",
              "Volume": "26500",
              "Adj_Close": "3.39"
            },
            {
              "date": "2013-01-09",
              "Date": "2013-01-09",
              "Open": "3.25",
              "High": "3.32",
              "Low": "3.25",
              "Close": "3.30",
              "Volume": "7300",
              "Adj_Close": "3.30"
            },
            {
              "date": "2013-01-08",
              "Date": "2013-01-08",
              "Open": "3.27",
              "High": "3.27",
              "Low": "3.22",
              "Close": "3.27",
              "Volume": "3300",
              "Adj_Close": "3.27"
            },
            {
              "date": "2013-01-07",
              "Date": "2013-01-07",
              "Open": "3.24",
              "High": "3.24",
              "Low": "3.16",
              "Close": "3.20",
              "Volume": "3000",
              "Adj_Close": "3.20"
            },
            {
              "date": "2013-01-04",
              "Date": "2013-01-04",
              "Open": "3.27",
              "High": "3.28",
              "Low": "3.20",
              "Close": "3.25",
              "Volume": "7600",
              "Adj_Close": "3.25"
            },
            {
              "date": "2013-01-03",
              "Date": "2013-01-03",
              "Open": "3.25",
              "High": "3.30",
              "Low": "3.20",
              "Close": "3.20",
              "Volume": "10100",
              "Adj_Close": "3.20"
            },
            {
              "date": "2013-01-02",
              "Date": "2013-01-02",
              "Open": "3.18",
              "High": "3.24",
              "Low": "3.15",
              "Close": "3.22",
              "Volume": "10800",
              "Adj_Close": "3.22"
            },
            {
              "date": "2013-01-01",
              "Date": "2013-01-01",
              "Open": "3.24",
              "High": "3.24",
              "Low": "3.24",
              "Close": "3.24",
              "Volume": "000",
              "Adj_Close": "3.24"
            }
          ]
        }
      }
    }
  );
