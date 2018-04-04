import Vue from 'vue'
// import aymUI from '../libs/index'
// import '../dist/index.css'
// import aymUI from '../src/index'
import aymUI from '../lib/index'
import '../lib/index.css'
import router from './router'
import app from './app.vue'
import demo from './demo.vue'
import { install as demoGlobal } from './global'
Vue.use(demoGlobal)
Vue.use(aymUI)

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production' && window.parent === window) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(registration => {
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
