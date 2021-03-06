import Vue from 'vue'
import aymUI from '../src/index'
// import aymUI from '../lib/index'
// import '../lib/index.css'
import router from './router'
import app from './app.vue'
import demo from './demo.vue'
import { install as demoGlobal } from './global'
Vue.use(demoGlobal)
Vue.use(aymUI)
// && window.parent === window
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      // eslint-disable-next-line
      console.log(' SW registered: ', registration)
    }).catch(registrationError => {
      // eslint-disable-next-line
      console.log(' SW registration failed: ', registrationError)
    })
  })
}

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
