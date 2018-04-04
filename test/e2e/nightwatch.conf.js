require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
    src_folders: ['test/e2e/specs'],
    // src_folders: ['test/e2e/specs/modal.js'],
    output_folder: 'test/e2e/reports',
    custom_assertions_path: ['test/e2e/custom-assertions'],

    selenium: {
        start_process: true,
        server_path: require('selenium-server').path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': require('chromedriver').path
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'test/e2e/screenshots/failure'
            },
            globals: {
                // devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port)
                devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port) + '/examples.html#/',
                screenshots: 'test/e2e/screenshots/common/'
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        }
    }
}
