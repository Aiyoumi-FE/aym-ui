import demoContent from './components/demo-content'
const components = [
    demoContent
]
const install = function(Vue, config = {}) {
    Vue.config.devtools = true
    components.forEach((component) => {
        Vue.component(component.name, component)
    })
}
export {
    install
}
