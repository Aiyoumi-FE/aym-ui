import Tabbar from './tabbar.vue'
import TabbarItem from './tabbar-item.vue'

Tabbar.install = function(Vue) {
    Vue.component(Tabbar.name, Tabbar)
}
TabbarItem.install = function(Vue) {
    Vue.component(TabbarItem.name, TabbarItem)
}

export {
    Tabbar,
    TabbarItem
}
