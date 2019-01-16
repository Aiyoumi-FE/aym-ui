import './assets/bootstrap.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import app from './doc.vue'

FastClick.attach(document.body)

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
