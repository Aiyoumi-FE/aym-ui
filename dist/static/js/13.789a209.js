(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/yvx":function(s,a,t){"use strict";t.r(a);var r=t("KHd+"),e=Object(r.a)({},function(){var s=this;s.$createElement;s._self._c;return s._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("loading")]),s._v(" "),t("h3",[s._v("代码示例")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-page")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":loading")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"loading"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-header")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"header"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-header")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("demo-content")]),s._v(">")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"showPageLoading"')]),s._v(">")]),s._v("显示loading"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-button")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("demo-content")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("m-page")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'demo-loading'")]),s._v(",\n    data() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n    },\n    mounted() {\n        setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showPageLoading() {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n            setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n                "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".loading = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n            }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2000")]),s._v(")\n        }\n    }\n}\n")])]),s._v(" "),t("h3",[s._v("使用说明")]),s._v(" "),t("ol",[t("li",[s._v("页面组件loading， 直接在"),t("code",{pre:!0},[s._v("m-page")]),s._v("组件里传入 "),t("code",{pre:!0},[s._v(":loading=true")]),s._v(",会默认显示,需要页面加载完成后手动关闭")]),s._v(" "),t("li",[s._v("api调用，直接 "),t("code",{pre:!0},[s._v("this.$createPageLoading().show()")])])])])}],!1,null,null,null);e.options.__file="loading.md";a.default=e.exports}}]);