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
        const popup = '.mui-actionsheet:not([style*="display: none"])'

        browser
            .windowSize('', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)

        showPopup(1, '请选择')
        showPopup(1, '北京大学', 1)
        showPopup(1, '浙江大学', 2)
        showPopup(1, '财经大学', 3)
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

        function showPopup(n, txt = '', btn = ' .mui-actionsheet_default') {
            btn = typeof btn === 'number' ? `${popup} .mui-actionsheet__cell:nth-of-type(${btn})` : `${popup} ${btn}`
            let obj = `.mui-cells:nth-of-type(1) .mui-cell:nth-of-type(${n})`
            browser.click(obj)
                .assert.elementCount(popup, 1)
                // .assert.elementCount(popup + ' .mui-actionsheet__cell', 3)
                .assert.elementCount(popup + ' .mui-actionsheet__cell.select', 1)
                .pause(300)
                .click(btn)
                .pause(300)
                .assert.containsText(obj, txt)
        }
        // .end()
    }
}
