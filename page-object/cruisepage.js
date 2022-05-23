var CruisePage = function() {
    this.getTitle = function() {
      return browser.getTitle();
    };
  };
  module.exports = new CruisePage();
  