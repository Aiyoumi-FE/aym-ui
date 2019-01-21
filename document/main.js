// import './assets/bootstrap.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
import Adoc from 'vue-adoc'
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import app from './doc.vue'

FastClick.attach(document.body)
Vue.use(Adoc)
new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
