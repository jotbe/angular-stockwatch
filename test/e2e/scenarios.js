'use strict';

describe('Stockwatch E2E Tests', function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    describe('Homepage', function() {
        it('should open the watchlist page as homepage', function() {
            expect(browser().location().path()).toBe('/watchlist');
        });
    });

    describe('Initial watchlist', function() {
        it('should delete all watchlists', function() {
            var deleteWatchlists = function() {
                browser().navigateTo('#/watchlist');
                sleep(1);
                element('#watchlists tbody').query(function(tbody, done) {
                    var children = tbody.children();
                    if (children.length > 0) {
                        console.log('Deleting watchlist ...');
                        element('.delete').mouseup();
                    }
                    done();
                });
            };
            deleteWatchlists();
        });
        it('should display the correct amount of initial watchlists', function() {
            sleep(1);
            var wl = using('#watchlists').repeater('tbody tr');
            expect(wl.count()).toBe(0);
        });
    });

    describe('Add watchlist', function() {
        it('should add a new entry to the end of the list and reset the input field', function() {
            input('watchlistName').enter('E2E-Watchlist');
            element('#addWatchlistForm button[type="submit"]').click();
            sleep(3);
            var wl = using('#watchlists').repeater('tbody tr');
            expect(wl.count()).toBe(1);
            expect(input('watchlistName').val()).toBe('');
        });
    });

    describe('Open watchlist', function() {
        it('should open the first watchlist', function() {
            expect(browser().location().path()).toBe('/watchlist');
            sleep(1);
            element('#watchlists tbody a:first').click();
            sleep(1);
            expect(element('#watchlist tr td:eq(2)').text()).toBe('GFT.DE');
        });
    });

    describe('Open stock quote', function() {
        it('should open a stock quote from within a watchlist', function() {
            expect(browser().location().path()).toBe('/watchlist');
            sleep(1);
            element('#watchlists tbody a:first').click();
            sleep(1);
            element('#watchlist tbody a:first').click();
            sleep(1);
            expect(element('h3:eq(0)').text()).toBe('Aktuelle Kursdaten');
        });
        it('should open the first item in the watchlist', function() {
            browser().navigateTo('#/quote/GFT.DE');
            expect(browser().location().path()).toBe('/quote/GFT.DE');
            expect(element('h3:eq(0)').text()).toBe('Aktuelle Kursdaten');
        });
    });
});
