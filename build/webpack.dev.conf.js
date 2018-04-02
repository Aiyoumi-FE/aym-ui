var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var entries = config.dev.entry

// add hot-reload related code to entry chunks
Object.keys(entries).forEach(function(name) {
    entries[name] = ['./build/dev-client'].concat(entries[name])
})

var conf = merge(baseWebpackConfig, {
    entry: entries,
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin(config.docDev.HtmlWebpackPluginOption),
        // new HtmlWebpackPlugin(config.examplesDev.HtmlWebpackPluginOption),
        new FriendlyErrorsPlugin()
    ]
})

utils.multipleEntries(conf, HtmlWebpackPlugin, entries)
// set multipleEntries using HtmlWebpackPlugin
// utils.multipleEntries(conf, HtmlWebpackPlugin, entries)

module.exports = conf
