import Dialog from './dialog.vue'
import addDialog from './api'

Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog)
  addDialog(Vue, Dialog)
}

export default Dialog
