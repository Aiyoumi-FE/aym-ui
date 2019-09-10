import Color from './color.vue'

Color.install = function(Vue) {
    Vue.component(Color.name, Color)
}

export default Color
