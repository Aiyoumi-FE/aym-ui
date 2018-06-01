// import Toast from './toast.vue'
// import addToast from './api'
// Toast.install = function(Vue) {
//     Vue.component(Toast.name, Toast)
//     addToast(Vue, Toast)
// }

// export default Toast


export default {
    methods: {
        $_toast(...config) {
            let defaultConf = {
                icon: 'none',
                mask: true
            }
            config[0] = config[0] || {}
            let params
            if (typeof config[0] === 'string') {
                let [
                    title,
                    complete
                ] = config
                params = Object.assign({}, defaultConf, { title, complete })
            } else {
                let {
                    txt: title = '',
                    time: duration = 1500,
                    callback: complete = () => {},
                    ...other
                } = config[0]
                params = Object.assign({}, defaultConf, { title, duration, complete, ...other })
            }
            wx.showToast(params)
        },
        $_loading(...config) {
            config[0] = config[0] || {}
            let defaultConf = {
                title: '加载中',
                mask: true
            }
            let {
                txt: title = '',
                callback: complete = () => {},
                ...other
            } = config[0]
            let params = Object.assign({}, defaultConf, { title, complete, ...other })

            return {
                show() {
                    wx.showLoading(params)
                },
                hide() {
                    wx.hideLoading()
                }
            }

        }

    }
}
