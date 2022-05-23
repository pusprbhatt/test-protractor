var Homepage = function() {
  var destinations = element(by.xpath('//button[contains(@class,"destinations")]'));
  var search = element(by.xpath('//li[contains(@class, "search-button")]/button[contains(text(),"Search")]'));
  var duration = element(by.xpath('//button[contains(@class,"durations")]'));
  var days9to16 = element(by.xpath('//button/span[contains(text(), "9 - 16")]/parent::button'));
  var login_caret = element(by.xpath('//a[@class="nav-link login caret"]'));
  var login_btn = element(by.xpath('//a[@class="btn-login"]'));
  var area = element(by.xpath('//button[@aria-label="ASIA"]'));

  var firstname = element(by.id('variation1-firstName'));
  var lastname = element(by.id('variation1-lastName'));
  var email = element(by.id('variation1-email'));
  var checkbox = element(by.id('checkboxa'));
  var signup = element(by.xpath('//button[@class="signup-button"]'));
  var newsletter_success = element(by.xpath('//h2[@class="h1"]'));

  this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.hollandamerica.com/');
    browser.manage().window().maximize();
  };

  this.setDestination = function() {
    destinations.click();
    area.click();
  };
  
  this.setDuration = function(){
    duration.click();
    days9to16.click();
  }

  this.searchCruise = function() {
    search.click();
  };

  this.selectLogin = function() {
    login_caret.click();
    login_btn.click();
  }

  this.subscribeNewsletter = function(first_name, last_name, email_newsletter){
    firstname.sendKeys(first_name);
    lastname.sendKeys(last_name);
    email.sendKeys(email_newsletter);
    checkbox.click();
    signup.click();
  }

  this.getNewsletterText = function () {
    return newsletter_success.getText();
  };
};
module.exports = new Homepage();
