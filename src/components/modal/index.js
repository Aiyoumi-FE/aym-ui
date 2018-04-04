import Modal from '../../components/modal/modal.vue'
import addModal from './api'
Modal.install = function(Vue) {
    Vue.component(Modal.name, Modal)
    addModal(Vue, Modal)
}

export default Modal
