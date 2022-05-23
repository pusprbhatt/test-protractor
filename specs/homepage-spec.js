var homepage = require('../page-object/homepage');
var cruisepage = require('../page-object/cruisepage');

describe('cruise homepage login', function() {
  it('should select a destination and search cruise', function() {
    homepage.get();
    homepage.selectLogin();
    expect(cruisepage.getTitle()).toContain("Login");
  });
});

describe('newsletter test', function() {
  it('form should be submitted and success message shown', function() {
    homepage.get();
    homepage.subscribeNewsletter("John", "Doe", "john.doe@gmail.com");
    expect(homepage.getNewsletterText()).toContain("Email Has Been Submitted.");
  });
});

describe('cruise homepage', function() {
  it('should select a destination and search cruise', function() {
    homepage.get();
    homepage.setDestination();
    homepage.setDuration();
    homepage.searchCruise();
    expect(cruisepage.getTitle()).toContain("Find a Cruise");
  });
});