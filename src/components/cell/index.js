import CellGroup from '../../components/cell/cell-group.vue'
import Cell from '../../components/cell/cell.vue'
import Input from '../../components/cell/input.vue'

CellGroup.install = function(Vue) {
    Vue.component(CellGroup.name, CellGroup)
}
Cell.install = function(Vue) {
    Vue.component(Cell.name, Cell)
}
Input.install = function(Vue) {
    Vue.component(Input.name, Input)
}

export {
    CellGroup,
    Cell,
    Input
}
