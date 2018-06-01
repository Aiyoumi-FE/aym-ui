// import Dialog from './dialog.vue'
// import addDialog from './api'

// Dialog.install = function(Vue) {
//     Vue.component(Dialog.name, Dialog)
//     addDialog(Vue, Dialog)
// }

// export default Dialog
export default {
    methods: {
        $createDialog(config) {
            // other
            // title
            // content
            let {
                confirmBtn: confirmText,
                cancelBtn: cancelText,
                onConfirm = () => {},
                onCancel = () => {},
                confirmColor = '#f99e00',
                type = 'alert',
                ...other
            } = config
            let showCancel = type === 'confirm'
            let params = Object.assign({}, { showCancel, confirmColor, ...other })

            return {
                show() {
                    wx.showModal({
                        ...params,
                        success: (res) => {
                            if (res.confirm) {
                                onConfirm()
                            } else if (res.cancel) {
                                onCancel()
                            }
                        }
                    })
                }
            }
        }
    }
}
