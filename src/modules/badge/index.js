import Badge from '../../components/badge/badge.vue'

Badge.install = function(Vue) {
    Vue.component(Badge.name, Badge)
}

export default Badge
