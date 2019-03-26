import CellGroup from './cell-group.vue'
import Cell from './cell.vue'
import Input from './input.vue'

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

export default {
  CellGroup,
  Cell,
  Input
}
