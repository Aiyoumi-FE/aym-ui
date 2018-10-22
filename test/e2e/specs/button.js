// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

const PAGE_URL = 'button'
module.exports = {
    '按钮 button': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        browser
            .windowSize('', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)
            .assert.elementCount('button', 20)
            .click('.mui-btn.mui-btn_primary.mui-btn_large')
            .waitForElementVisible('.mui-toast', 1000)
            .assert.elementCount('.mui-toast', 1)
            .assert.containsText('.mui-toast__txt', '点击了')
            .waitForElementNotVisible('.mui-toast', 3000, false)
            .end()
    }
}
