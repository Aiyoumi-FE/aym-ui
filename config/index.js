// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        // index: path.resolve(__dirname, '../dist/examples/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        assetsLibrary: path.resolve(__dirname, '../lib'),
        productionSourceMap: false,
        extractCss: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        entry: {
            document: 'document/main.js',
            examples: 'examples/main.js'
        },
        env: require('./dev.env'),
        port: 8081,
        autoOpenBrowser: false,
        assetsSubDirectory: 'examples/static',
        assetsPublicPath: '/',
        proxyTable: {},
        cssSourceMap: false,
        extractCss: false,
        tempDir: path.resolve(__dirname, '../src/components')
    },
    projectRoot: path.resolve(__dirname, '../')
}
