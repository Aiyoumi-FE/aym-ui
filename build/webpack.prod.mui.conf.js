const webpack = require("webpack");
const path = require('path')
const version = require("./../package.json").version;
const banner = "/**\n" + " * aym-ui v" + version + "\n" + " */\n";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const config = require('../config')
// const modules = require('../src/modules')
// const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: true,
            extract: true,
            usePostCSS: false
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

module.exports = webpackConfig;
