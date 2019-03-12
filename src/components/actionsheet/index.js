import Actionsheet from './actionsheet.vue'
import addActionsheet from './api'
Actionsheet.install = function(Vue) {
  Vue.component(Actionsheet.name, Actionsheet)
  addActionsheet(Vue, Actionsheet)
}

export default Actionsheet
