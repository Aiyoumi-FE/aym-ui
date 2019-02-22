var fs = require('fs')
var path = require('path')
var Mustache = require('mustache')
var config = require('../../config')
// 用户输入 组件名
let FILE_NAME = process.argv[2]
if (!FILE_NAME) {
    console.log('请输入文件名！！')
    return
}
// demo 模版
const examplesTpl = `<template>
    <m-page>
        <m-header slot="header"></m-header>
    </m-page>
</template>
<script>
export default {
  name: 'demo-{{name}}',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
</style>
`
// 组件模版
const componentsTpl = `<template>
</template>
<script>
export default {
    name: 'm-{{name}}',
    props: {},
    methods: {}
}
</script>
<style lang="scss">
</style>
`
// 模块模版
const modulesTpl = `import {{nameFirstBig}} from './{{name}}.vue'

{{nameFirstBig}}.install = function(Vue) {
    Vue.component({{nameFirstBig}}.name, {{nameFirstBig}})
}

export default {{nameFirstBig}}
`

const docsTpl = `
## {{name}}
### 代码示例

{{=<% %>=}}
{{:examples/pages/<%name%>.vue}}

### props 说明

| 参数      |类型| 默认值    | 可选值|描述    |
|:-------- | :--------|:--------  |:--------|:---------|
`


const docsDir = path.resolve('document/docs')
const examplesDir = path.resolve('examples/pages')
const componentsDir = path.resolve(`src/components/${FILE_NAME}`)
const modulesDir = path.resolve(`src/components/${FILE_NAME}`)

const FILE_ARR = [{
    name: 'component',
    dir: componentsDir,
    baseName: FILE_NAME + '.vue',
    tpl: componentsTpl
}, {
    name: 'modules',
    dir: modulesDir,
    baseName: 'index.js',
    tpl: modulesTpl
}, {
    name: 'example',
    dir: examplesDir,
    baseName: FILE_NAME + '.vue',
    tpl: examplesTpl,
}, {
    name: 'docs',
    dir: docsDir,
    baseName: FILE_NAME + '.md',
    tpl: docsTpl,
}]

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
const creteFile = (file, content) => {
    fs.open(file, 'ax+', (err, fd) => {
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
FILE_ARR.forEach(item => {
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
                return this.name.replace(/^(\w)/g, (m, c) => c ? c.toUpperCase() : '')
            }
        })
        creteFile(file, content)
    })

})
