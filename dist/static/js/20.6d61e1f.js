webpackJsonp([20],{Zrgv:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("actionsheet")]),t._v(" "),a("h3",[t._v("代码示例")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[t._v(" "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"showActionsheet"')]),t._v(">")]),t._v("Actionsheet"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("m-button")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("name")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'demo-actionsheet'")]),t._v(",\n    data() {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {}\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        showActionsheet() {\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".actionsheet = "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createActionSheet({\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": ["),a("span",{attrs:{class:"hljs-string"}},[t._v("'本科'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'专科'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'研究生'")]),t._v(", "),a("span",{attrs:{class:"hljs-string"}},[t._v("'博士'")]),t._v("],\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("isBottomBtn")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("selectItem")]),t._v(": {\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("isSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n                    "),a("span",{attrs:{class:"hljs-attr"}},[t._v("index")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n                },\n                "),a("span",{attrs:{class:"hljs-attr"}},[t._v("onSelect")]),t._v(": "),a("span",{attrs:{class:"hljs-function"}},[t._v("("),a("span",{attrs:{class:"hljs-params"}},[t._v("item, index")]),t._v(") =>")]),t._v(" {\n                    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$createToast({\n                        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("time")]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1000")]),t._v(",\n                        "),a("span",{attrs:{class:"hljs-attr"}},[t._v("txt")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'选择了: 第'")]),t._v(" + index + "),a("span",{attrs:{class:"hljs-string"}},[t._v("'项, '")]),t._v(" + item\n                    }).show()\n                }\n            })\n            "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".actionsheet.show()\n        }\n    }\n}\n")])]),t._v(" "),a("h3",[t._v("props 说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标题, 默认为空")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("项列表数据, 默认空数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("isBottomBtn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示底部按钮")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("selectItem")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("{isSelect: false,index: 0}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中项配置, isSelect是否高亮选中项,index选中项索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onSelect")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中回调")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("onCancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取消回调")])])])])])}]},l=a("VU/8")(null,e,!1,null,null,null);s.default=l.exports},ceHU:function(t,s,a){t.exports=a("Zrgv")}});