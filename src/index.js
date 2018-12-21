import createAPI from './common/helpers/create-api'
import { setComponentName } from './common/helpers/util'
import * as modules from './modules'
// import 'src/styles/index.scss'
const version = process.env.VERSION || require('../package.json').version

function install(Vue, options = { prefix: '' }) {
    if (install.installed) {
        return
    }
    install.installed = true

    for (let component in modules) {
        if (options.prefix) {
            modules[component].name = setComponentName(modules[component].name, options.prefix)
        }
        Vue.use(modules[component])
    }
}
const mui = {
    install,
    createAPI,
    version
}
// console.log(mui)
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}
export default mui
