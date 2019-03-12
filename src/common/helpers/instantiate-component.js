export default function instantiateComponent(Vue, Component, data, renderFn) {
  let renderData
  let childrenRenderFn
  const instance = new Vue({
    methods: {
      init() {
        document.body.appendChild(this.$el)
      },
      destroy() {
        this.$destroy()
        document.body.removeChild(this.$el)
      }
    },
    render(createElement, context) {
      let children = childrenRenderFn && childrenRenderFn(createElement)
      if (children && !Array.isArray(children)) {
        children = [children]
      }
      return createElement(Component, { ...renderData }, children || [])
    }
  })
  instance.updateRenderData = function(data, render) {
    renderData = data
    childrenRenderFn = render
  }
  instance.updateRenderData(data, renderFn)
  instance.$mount()
  instance.init()
  const component = instance.$children[0]
  component.$updateProps = function(props) {
    Object.assign(renderData.props, props)
    instance.$forceUpdate()
  }
  return component
}
