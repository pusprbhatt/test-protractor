exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  suites: {
    homepage: 'specs/homepage-spec.js',
    cruisepage: 'specs/cruise-spec.js',
  },
};