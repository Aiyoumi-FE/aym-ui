import './assets/bootstrap.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'

import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import app from './doc.vue'

FastClick.attach(document.body)

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log(' SW registered: ', registration)
        }).catch(registrationError => {
            console.log(' SW registration failed: ', registrationError)
        })
    })
}

new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
