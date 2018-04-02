// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = "popup"
const PAGE_URL = name
module.exports = {
    'popup': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        browser
            .windowSize('windowHandle是什么', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .click('.mui-btn')
            .assert.elementCount('.mui-popup', 1)
            .saveScreenshot(SCREENSHOT_PATH)
            .moveToElement('.mui-mask', 10, 10)
            .mouseButtonClick()
            .assert.hidden('.mui-popup')
            .end()
    }
}
