
[![Build Status](https://travis-ci.org/Aiyoumi-FE/aym-ui.svg?branch=master)](https://travis-ci.org/Aiyoumi-FE/aym-ui)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 爱又米专用VUE组件库。

`aym-ui` 是基于Vue 的移动端组件库

### 文档

[文档地址](https://aiyoumi-fe.github.io/aym-ui/document.html#/)

[示例地址](https://aiyoumi-fe.github.io/aym-ui/examples.html#/)


### 使用说明

#### 安装
```
npm install aym-ui --save
```

#### 使用

全量使用

```javascript

import aymUI from 'aym-ui'  
import 'aym-ui/index.css'
Vue.use(aymUI) 

```

按需引入

需要安装插件[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)
```
npm i babel-plugin-component -D
``` 
使用方法

```
import { Button } from 'aym-ui'
```

配置`.babelrc`

```javascript
"plugins": [
        "transform-runtime", [
            "component",
            {
                "libraryName": "aym-ui",
                "libraryDirectory": "lib",
                "style": true
            }
        ]
    ]
```

<!-- 
按模块引用

npm install babel-plugin-import --save-dev -->


### 开发说明
- 组件源码目录：src/components 
- demo目录： examples
- document: document 

### 构建说明 
- `npm run dev` 运行examples,调用src/index.js组件出口，组件修改后可以实时预览
- `npm run build:demo`  构建demo和docs文件到dist目录
- `npm run build:mui`  构建js，通过src/index.js打包到libs目录
- `npm run build`  包含`npm run build:mui`和`npm run build:modules`两个个命令
- `npm run deploy:docs` 打包demo和docs 并推送到github 
- `npm run new xx`  在examples/pages、document/components/docs 和 src/components  目录下分别加入组件空模版

 
