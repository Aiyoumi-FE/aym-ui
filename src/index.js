import createAPI from './common/helpers/create-api'
import { setComponentName } from './common/helpers/util'
import * as modules from './modules'

function install(Vue, options = { prefix: '' }) {
    if (install.installed) {
        return
    }
    install.installed = true

    for (let component in modules) {
        let { name, install } = modules[component]
        if (options.prefix && name) {
            modules[component].name = setComponentName(modules[component].name, options.prefix)
        }
        if (typeof install === 'function') {
            Vue.use(modules[component])
        }
    }
}
const mui = {
    install,
    createAPI,
    version: process.env.__VERSION__
}
// console.log(mui)
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}
export default mui
// export * from './modules'
