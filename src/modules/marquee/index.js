import Marquee from '../../components/marquee/marquee.vue'
import MarqueeItem from '../../components/marquee/marquee-item.vue'

Marquee.install = function(Vue) {
    Vue.component(Marquee.name, Marquee)
}
MarqueeItem.install = function(Vue) {
    Vue.component(MarqueeItem.name, MarqueeItem)
}

export {
    Marquee,
    MarqueeItem
}
