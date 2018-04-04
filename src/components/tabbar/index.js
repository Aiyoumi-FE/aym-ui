import Tabbar from '../../components/tabbar/tabbar.vue'
import TabbarItem from '../../components/tabbar/tabbar-item.vue'

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
