// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = 'toast'
const PAGE_URL = name
module.exports = {
    'toast': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        const popup = '.mui-toast:not([style*="display: none"])'
        browser
            .windowSize('', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            // .click('.mui-btn')
            .assert.elementCount('.mui-btn', 5)
        showToast()
        browser.end()

        function showToast() {
            for (let i = 1; i < 6; i++) {
                browser.click(`.mui-btn:nth-of-type(${i})`)
                    .waitForElementVisible(popup, 1000)
                    .waitForElementNotVisible(popup, 3000)
            }
        }
        // .end()
    }
}
