var cruisepage = require('../page-object/cruisepage');
describe('cruise resultspage', function() {
    it('verify if the landing is correct', function() {
        browser.waitForAngularEnabled(false);
        expect(cruisepage.getTitle()).toContain("Find a Cruise");
    });
  });