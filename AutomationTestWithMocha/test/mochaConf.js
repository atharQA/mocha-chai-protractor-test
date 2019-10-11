exports.config = {
    directConnect: true,
    framework: 'mocha', //jasmine?
    mochaOpts: {
        reporter: 'spec', slow: 3000, timeout: 30000
    },
    multiCapabilities: [
        { 'browserName': 'chrome' },
        // { 'browserName': 'firefox' },
    ],
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.driver.get("https://angular.io/docs");
        browser.manage().timeouts().pageLoadTimeout(40000);
    },
    suites: {
        mochaTest: 'spec/sampleTest.js'
    }
};