var webpack = require("webpack");
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var utils = require('./utils')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var config = require('../config')
// var modules = require('../src/modules')
var isProduction = process.env.NODE_ENV === 'production'

// console.log(modules)
let entries = utils.getEntry('./src/modules/**/index.js')

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: isProduction ? config.build.extractCss : config.dev.extractCss
        })
    },
    // entry: path.join(__dirname, '..', "src/index.js"),
    entry: entries,
    output: {
        path: config.build.assetsLibrary,
        // filename: "index.js",
        filename: '[name]/index.js',
        // library: 'aymUi',
        // configuration.output.libraryTarget should be one of these:
        // "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
        libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin({ filename: '[name]/style.css', allChunks: true })
    ],
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
});

module.exports = webpackConfig;
