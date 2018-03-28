// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = 'modal'
const PAGE_URL = '/#/' + name
module.exports = {
    modal: function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        const popup = '.mui-modal:not([style*="display: none"])'

        browser
            .windowSize('windowHandle是什么', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)

        showPopup(1, '.mui-icon-close1')
        showPopup(2, '.mui-btn_full')
        browser.end()

        function showPopup(n, closeBtn = '.mui-icon-close1') {
            closeBtn = popup + ' ' + closeBtn
            browser.click(`.mui-btn_large:nth-of-type(${n})`)
                .assert.elementCount(popup, 1)
                .pause(300)
                .click(closeBtn)
                .waitForElementNotVisible(popup, 3000)
        }
        // .end()
    }
}
