'use strict';

describe('Stockwatch E2E Tests', function() {

    beforeEach(function() {
        browser().navigateTo('/');
    });

    describe('Homepage', function() {
        it('should display the correct route', function() {
            expect(browser().location().path()).toBe('/');
        });
    });

});
