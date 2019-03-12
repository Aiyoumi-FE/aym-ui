import createAPI from '../../common/helpers/create-api'

export default function addToast(Vue, Toast) {
  const toast = createAPI(Vue, Toast, [], true)
  const loading = createAPI(Vue, Toast, [], true)
  Vue.prototype.$_toast = function(...config) {
    if (typeof config[0] === 'string') {
      return toast.create.call(this, {
        txt: config[0],
        callback: config[1]
      }).show()
    } else {
      return toast.create.call(this, config[0]).show()
    }
  }
  Vue.prototype.$_loading = function(config) {
    let defaultConfig = { icon: 'loading', time: 0, txt: '加载中', isSvg: false }
    let _config = Object.assign({}, defaultConfig, config)
    return loading.create.call(this, _config)
  }
}
