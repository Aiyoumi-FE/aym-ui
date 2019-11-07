import CellGroup from './cell-group.vue'

CellGroup.install = function(Vue) {
    Vue.component(CellGroup.name, CellGroup)
}

export default CellGroup
