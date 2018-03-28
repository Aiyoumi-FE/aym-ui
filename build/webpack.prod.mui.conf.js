var webpack = require("webpack");
var path = require('path')
var version = require("./../package.json").version;
var banner = "/**\n" + " * aym-ui v" + version + "\n" + " */\n";
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var utils = require('./utils')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var config = require('../config')
// var modules = require('../src/modules')
var isProduction = process.env.NODE_ENV === 'production'

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: isProduction ? config.build.extractCss : config.dev.extractCss
        })
    },
    entry: {
        index: 'src/index.js',
        'theme/xiaov': 'src/styles/theme/xiaov.scss'
    },
    // entry: entries,
    output: {
        path: config.build.assetsLibrary,
        filename: "[name].js",
        library: 'aymUi',
        // configuration.output.libraryTarget should be one of these:
        // "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
        new webpack.BannerPlugin({
            banner: banner,
            raw: true
        })
    ],
    stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
});

if (config.build.productionGzip) {
    //  utils.gZip(webpackConfig)
}
module.exports = webpackConfig;
