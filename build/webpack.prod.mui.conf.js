const webpack = require("webpack")
const path = require('path')
const version = process.env.VERSION
const banner = "/**\n" + " * aym-ui v" + version + "\n" + " */\n"
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const utils = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const config = require('../config')
// const modules = require('../src/modules')
const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
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
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true, // 开启缓存
                parallel: true, // 允许并发
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({}) // use OptimizeCSSAssetsPlugin
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"',
                __VERSION__: '"' + version + '"'
            }
        }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             warnings: false
        //         }
        //     },
        //     sourceMap: config.build.productionSourceMap,
        //     parallel: true
        // }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
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
