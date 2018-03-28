// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const name = 'picker'
const PAGE_URL = '/#/' + name
module.exports = {
    picker: function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL + PAGE_URL
        const SCREENSHOT_PATH = browser.globals.screenshots + name + '.png'
        const popup = '.mui-picker:not([style*="display: none"])'

        browser
            .windowSize('windowHandle是什么', 375, 667)
            .url(devServer)
            .waitForElementVisible('#app', 5000)

        // for (let i = 1; i < 6; i++) {
        //     showPopup(i, '.mui-dialog__btn_primary', '确认')
        // }
        showPopup(1, '请选择', '.close')
        showPopup(1, '妲己')
        showPopup(1, '妲己', '.close')

        showPopup(2, '请选择', '.close')
        showPopup(2, '王昭君庄周孙悟空')
        showPopup(2, '王昭君庄周孙悟空', '.close')

        showPopup(3, '请选择', '.close')
        showPopup(3, '北京市北京市东城区')
        showPopup(3, '北京市北京市东城区', '.close')

        showPopup(4, '请选择', '.close')
        showPopup(4, '山西省太原市市辖区')
        showPopup(4, '山西省太原市市辖区', '.close')
        // showPopup(4)
        browser.end()

        function showPopup(n, txt = '', btn = '.mui-btn_full') {
            btn = popup + ' ' + btn
            let obj
            obj = `.mui-cells:nth-of-type(1) .mui-cell:nth-of-type(${n})`
            if (n === 4) {
                obj = '.mui-cells:nth-of-type(2) .mui-cell:nth-of-type(1)'
            }
            browser.click(obj)
                .assert.elementCount(popup, 1)
                .pause(300)
                .click(btn)
                .pause(300)
                .assert.containsText(obj, txt)
        }
        // .end()
    }
}
