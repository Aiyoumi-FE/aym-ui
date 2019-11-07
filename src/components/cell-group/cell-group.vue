<template>
  <div class="mui-cells"
    :class="cellGroupClass">
    <slot></slot>
  </div>
</template>
<script>
import { ParentMixin } from '../../common/mixins/nested.js'

/**
 * @param {String} [cellGroupClass=''] cell组自定义类名, 默认为''
 */
export default {
  name: 'm-cell-group',
  // provide() {
  //   return {
  //     cellGroup: this
  //   }
  // },
  mixins: [ParentMixin('cellGroup')],
  props: {
    cellGroupClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      items: []
    }
  },
  computed: {},
  methods: {}
}
</script>
