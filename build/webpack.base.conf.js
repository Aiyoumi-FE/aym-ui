var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // entry: {
    //     document: 'document/main.js',
    //     examples: 'examples/main.js'
    // },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    // externals: [
    //     'src/index.js'
    // ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.md'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': resolve('src'),
            'examples': resolve('examples'),
            'document': resolve('document')
        }
    },
    module: {
        rules: [{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('examples'), resolve('document'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('examples'), resolve('document'), resolve('test')]
            },
            {
                test: /\.md$/,
                include: resolve('document'),
                loader: 'vue-markdown-loader',
                options: {
                    preventExtract: true
                }
            }, {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // limit: 100000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}
