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
        it('should display the correct amount of initial watchlists', function() {
            var wl = using('#watchlists').repeater('tbody tr');
            expect(wl.count()).toBe(3);
        });
    });

    describe('Add watchlist', function() {
        it('should add a new entry to the end of the list and reset the input field', function() {
            input('watchlistName').enter('E2E-Watchlist');
            element('#addWatchlistForm button[type="submit"]').click();
            var wl = using('#watchlists').repeater('tbody tr');
            expect(wl.count()).toBe(4);
            expect(input('watchlistName').val()).toBe('');
        });
    });

});
