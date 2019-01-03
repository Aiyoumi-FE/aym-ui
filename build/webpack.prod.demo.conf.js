'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const WorkboxPlugin = require('workbox-webpack-plugin') // zq
const CleanWebpackPlugin = require('clean-webpack-plugin') // zq
const env = process.env.NODE_ENV === 'testing' ? require('../config/test.env') : require('../config/prod.env')
const entries = config.dev.entry

require('./check-versions')()
const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: entries,
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash:7].js')
        // filename: utils.assetsPath('js/[name].js'),
        // chunkFilename: utils.assetsPath('js/[id].js')
    },
    optimization: {
        // runtimeChunk: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true, // 开启缓存
                parallel: true, // 允许并发
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({}) // use OptimizeCSSAssetsPlugin
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: `chunk-vendors`,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                //         common: {
                //             name: `chunk-common`,
                //             minChunks: 2,
                //             priority: -20,
                //             chunks: 'all',
                //             reuseExistingChunk: true
                //         },
                //         styles: {
                //             name: `styles`,
                //             test: (m) => m.constructor.name === 'CssModule',
                //             // minChunks: 1,
                //             chunks: 'all',
                //             // enforce: true,
                //             priority: -30,
                //             reuseExistingChunk: true
                //         }
            }
        }
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        // new webpack.DefinePlugin({
        //     'process.env': env
        // }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             warnings: false
        //         }
        //     },
        //     sourceMap: config.build.productionSourceMap,
        //     parallel: true
        // }),
        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
            // filename: 'a.css'
            // chunkFilename: utils.assetsPath('css/[name].[contenthash].css')
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.build.assetsSubDirectory,
            ignore: ['.*']
        }]),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../README.md'),
            to: config.build.assetsRoot,
            ignore: ['.*']
        }]),


    ],
    stats: {
        colors: true,
        modules: false,
        children: false
    }
})
utils.multipleEntries(webpackConfig, HtmlWebpackPlugin, entries)

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(
        new CleanWebpackPlugin(['dist/'], {
            root: config.projectRoot
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
        // new WorkboxPlugin.InjectManifest({
        //     swSrc: './sw.js',
        // })
    )
}

if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                // '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
