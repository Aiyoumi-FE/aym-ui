import createAPI from '../../common/helpers/create-api'

export default function addDialog(Vue, Dialog) {
  const dialog = createAPI(Vue, Dialog, ['confirm', 'cancel', 'close'], true)
  // const types = ['alert', 'confirm']
  // types.forEach((type) => {
  //     dialog[type] = function(config, renderFn) {
  //         config.type = type
  //         return dialog.create(config, renderFn)
  //     }
  // })
  Vue.prototype.$_alert = function(...config) {
    if (typeof config[0] === 'string') {
      return new Promise((resolve, reject) => {
        dialog.create.call(this, {
          // title: '提示',
          content: config[0],
          onConfirm: resolve
        }).show()
      })
      // return
    } else {
      return dialog.create.call(this, config[0]).show()
    }
  }
  Vue.prototype.$_confirm = function(...config) {
    if (typeof config[0] === 'string') {
      return new Promise((resolve, reject) => {
        dialog.create.call(this, {
          type: 'confirm',
          // title: '提示',
          content: config[0],
          onConfirm: resolve,
          onCancel: reject
        }).show()
      })
      // return
    } else {
      let _config = Object.assign({}, {
        type: 'confirm'
      }, config[0])
      return dialog.create.call(this, _config).show()
    }
  }
}
