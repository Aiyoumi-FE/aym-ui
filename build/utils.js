var path = require('path')
var config = require('../config')
var glob = require('glob')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ?
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

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader]
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
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
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
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}


// docDev: {
//         HtmlWebpackPluginOption: {
//             chunks: ['manifest', 'vendor', 'document'],
//             filename: 'docs.html',
//             template: 'document/index.html',
//             inject: true
//         },
//         tempDir: path.resolve(__dirname, '../document/components/docs')
//     },
//     examplesDev: {
//         HtmlWebpackPluginOption: {
//             chunks: ['manifest', 'vendor', 'examples'],
//             filename: 'index.html',
//             template: 'examples/index.html',
//             inject: true
//         },
//         tempDir: path.resolve(__dirname, '../examples/pages')
//     },
//
// config.build.assetsRoot/

exports.multipleEntries = function(webpackConfig, HtmlWebpackPlugin, entries) {
    const baseChunks = ['manifest', 'vendor']
    Object.keys(entries).map(function(id) {
        // console.log(id)
        var _conf = {
            chunks: baseChunks.concat(id),
            filename: `${id}.html`,
            // template: "!!html-webpack-plugin/lib/loader.js!./templates/" + id + ".html",
            template: `${id}/index.html`, // use common index.html template
            inject: true, // js插入位置
        }
        // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
        webpackConfig.plugins.unshift(new HtmlWebpackPlugin(_conf))
    })
}
