import MarqueeItem from './marquee-item.vue'

MarqueeItem.install = function(Vue) {
    Vue.component(MarqueeItem.name, MarqueeItem)
}

export default MarqueeItem
