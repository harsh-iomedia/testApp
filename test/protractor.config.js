exports.config = {
    capabilities: {
        // You can use other browsers
        // like firefox, phantoms, safari, IE (-_-)
        'browserName': 'firefox'
    },
    specs: [
        // We are going to make this file in a minute
        'e2e/firstModule.js'
    ],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },
    allScriptsTimeout: 20000,
    onPrepare: function(){
        browser.driver.manage().window().maximize();
        browser.driver.get('http://10.1.3.182:8100/#/app/playlists');
        // Allow ripple to load
        browser.sleep(1000);
        //browser.driver.switchTo().frame(0);
    }
};