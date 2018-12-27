'use strict'
const path = require('path')
const config = require('../config')
const glob = require('glob')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const packageConfig = require('../package.json')

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory

    return path.posix.join(assetsSubDirectory, _path)
}

exports.getEntry = function(globPath, extname) {
    var entries = {},
        basename, tmp, pathname

    glob.sync(globPath).forEach(function(entry) {

        basename = path.basename(entry, path.extname(entry))

        tmp = entry.split('/').splice(3)
        tmp = tmp.slice(0, -1)
        pathname = extname ? tmp.join('/') + '/' + basename : tmp.join('/') // 正确输出js和html的路径
        entries[pathname] = entry
    })
    return entries
}

exports.cssLoaders = function(options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return [MiniCssExtractPlugin.loader].concat(loaders)
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }
    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)
    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}


exports.multipleEntries = function(webpackConfig, HtmlWebpackPlugin, entries) {
    const baseChunks = ['chunk-vendors']
    Object.keys(entries).map(function(id) {
        // console.log(id)
        var _conf = {
            chunks: ['chunk-vendors', id],
            filename: `${id}.html`,
            // template: "!!html-webpack-plugin/lib/loader.js!./templates/" + id + ".html",
            template: `${id}/index.html`, // use common index.html template
            inject: true, // js插入位置
        }
        // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
        webpackConfig.plugins.unshift(new HtmlWebpackPlugin(_conf))
    })
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}
