import createAPI from './common/helpers/create-api'
import * as modules from './modules'
// import 'src/styles/index.scss'

function install(Vue) {
    if (install.installed) {
        return
    }
    install.installed = true
    for (let component in modules) {
        // modules[component].install(Vue)
        Vue.use(modules[component])
    }
}
const mui = {
    install,
    createAPI
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}
export default mui
