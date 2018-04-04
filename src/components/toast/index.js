import Toast from '../../components/toast/toast.vue'
import addToast from './api'
Toast.install = function(Vue) {
    Vue.component(Toast.name, Toast)
    addToast(Vue, Toast)
}

export default Toast
