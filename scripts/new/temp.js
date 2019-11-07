var fs = require('fs')
var path = require('path')
var Mustache = require('mustache')
// 用户输入 组件名

module.exports = function(FILE_NAME, isNeedExamples = true) {
  if (!FILE_NAME) {
    console.log('未检测到文件名！！')
    return
  }

  // demo 模版
  const examplesTpl = fs.readFileSync('scripts/new/template/example.txt', { encoding: 'utf8' })
  // 组件模版
  const componentsTpl = fs.readFileSync('scripts/new/template/component.txt', { encoding: 'utf8' })
  // 模块模版
  const modulesTpl = fs.readFileSync('scripts/new/template/module.txt', { encoding: 'utf8' })

  const docsTpl = fs.readFileSync('scripts/new/template/doc.txt', { encoding: 'utf8' })
  const modulesExportTpl = fs.readFileSync('scripts/new/template/export.txt', { encoding: 'utf8' })

  const componentArr = [{
    name: 'component',
    dir: path.resolve(`src/components/${FILE_NAME}`),
    baseName: FILE_NAME + '.vue',
    tpl: componentsTpl
  }, {
    name: 'modules',
    dir: path.resolve(`src/components/${FILE_NAME}`),
    baseName: 'index.js',
    tpl: modulesTpl
  }, {
    name: 'modulesExport',
    dir: path.resolve(`src`),
    baseName: 'modules.js',
    tpl: modulesExportTpl,
    flag: 'a+'
  }, ]
  const examplesArr = [{
    name: 'example',
    dir: path.resolve('examples/pages'),
    baseName: FILE_NAME + '.vue',
    tpl: examplesTpl,
  }, {
    name: 'docs',
    dir: path.resolve('document/docs'),
    baseName: FILE_NAME + '.md',
    tpl: docsTpl,
  }]
  let allArr = isNeedExamples ? componentArr.concat(examplesArr) : componentArr

  // 渲染模版
  const renderTpl = (tpl, data) => {
    return Mustache.render(tpl, data)
  }
  // 写入内容
  const writeMyData = (fd, content, fileName) => {
    fs.write(fd, content, (err) => {
      if (err) {
        throw err;
      }
      console.log(fileName + '创建成功---')
    })
  }
  // 创建文件
  const creteFile = (file, content, flag = 'ax+') => {
    fs.open(file, flag, (err, fd) => {
      if (err) {
        if (err.code === 'EEXIST') {
          console.error(file + '----- already exists');
          return;
        }
        //   throw err;
      }
      writeMyData(fd, content, file);
    });
  }
  // 创建文件夹，如果存在则去创建文件
  allArr.forEach(item => {
    fs.mkdir(item.dir, err => {
      if (err) {
        if (err.code === 'EEXIST') {
          // console.error(item.dir + '文件夹 already exists');
        }
        // throw  err
      }
      let file = path.join(item.dir, item.baseName)
      let content = renderTpl(item.tpl, {
        name: FILE_NAME,
        nameFirstBig: function() {
          // return this.name.toUpperCase()
          // return this.name.replace(/^(\w)/g, (m, c) => c ? c.toUpperCase() : '')
          return upperCamelize(this.name)
        }
      })
      creteFile(file, content, item.flag)
    })

  })
}


function upperCamelize(str) {
  const camelizeRE = /-(\w)/g
  str = String(str)
  return str.charAt(0).toUpperCase() + str.slice(1).replace(camelizeRE, function(m, c) {
    return c ? c.toUpperCase() : ''
  })
}
