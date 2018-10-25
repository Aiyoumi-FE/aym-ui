import instantiateComponent from './instantiate-component'
import parseRenderData from './parse-render-data'

export default function createAPIComponent(Vue, Component, events = [], single = false) {
    let singleComponent
    let singleInstance
    const beforeFns = []
    const api = {
        before(fn) {
            beforeFns.push(fn)
        },
        open(data, renderFn, instanceSingle) {
            if (typeof renderFn !== 'function') {
                instanceSingle = renderFn
                renderFn = null
            }
            beforeFns.forEach((before) => {
                before(data, renderFn, instanceSingle)
            })
            if (instanceSingle === undefined) {
                instanceSingle = single
            }
            if (instanceSingle && singleComponent) {
                singleInstance.updateRenderData(data, renderFn)
                singleInstance.$forceUpdate()
                return singleComponent
            }

            const component = instantiateComponent(Vue, Component, data, renderFn)
            const instance = component.$parent
            const originRemove = component.remove

            component.remove = function() {
                originRemove && originRemove.call(this)
                instance.destroy()
                if (instanceSingle) {
                    singleComponent = null
                    singleInstance = null
                }
            }
            const originShow = component.show
            component.show = function() {
                originShow && originShow.call(this)
                return this
            }
            const originHide = component.hide
            component.hide = function() {
                originHide && originHide.call(this)
                return this
            }

            if (single) {
                singleComponent = component
                singleInstance = instance
            }
            // component.show && component.show()
            return component
        },
        create(config, renderFn, single) {
            const ownerInstance = this
            const component = api.open(parseRenderData(config, events), renderFn, single)
            if (component.__parent !== ownerInstance) {
                component.__parent = ownerInstance
                const beforeDestroy = function() {
                    if (component.__parent === ownerInstance) {
                        component.remove()
                    }
                    ownerInstance.$off('hook:beforeDestroy', beforeDestroy)
                    component.__parent = null
                }
                ownerInstance.$on('hook:beforeDestroy', beforeDestroy)
            }
            return component
        }
        // create(config, renderFn) {
        //     return api.open(parseRenderData(config, events), renderFn)
        // }
    }
    return api
}
