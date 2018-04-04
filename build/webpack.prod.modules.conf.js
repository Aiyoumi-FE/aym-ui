const webpack = require("webpack");
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const config = require('../config')
// const modules = require('../src/modules')
const isProduction = process.env.NODE_ENV === 'production'

// console.log(modules)
let entries = utils.getEntry('./src/components/**/index.js')

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: true,
            usePostCSS: false
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
