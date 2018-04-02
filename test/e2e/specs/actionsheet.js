// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = 'actionsheet'
const PAGE_URL = name
module.exports = {
    'actionsheet': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        browser
            .windowSize('windowHandle是什么', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)

        clickEvent()
        browser.end()

        function clickEvent() {
            for (let i = 0; i < 4; i++) {
                let n = i + 1
                browser
                    .click('.mui-btn')
                    .waitForElementVisible('.mui-actionsheet', 2000)
                    .pause(300)
                    .click(`.mui-actionsheet__cell:nth-of-type(${n})`)
                    .waitForElementVisible('.mui-toast', 2000)
                    .assert.containsText('.mui-toast', i)
                    .waitForElementNotVisible('.mui-toast', 3000)
            }
        }

        // .end()
    }
}
