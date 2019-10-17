<template>
  <!-- v-bind="$props" -->
  <component :is="type"
    v-bind="$attrs">
    <slot></slot>
  </component>
</template>
<script>
import step from './step'
import timeline from './timeline'
import semicircle from './semicircle'

/**
 * param {String} [type = step] - 进度类型 默认值step
 * param {Array} [stepText=[]] - 存放每一步文本的数组, 默认值['0', '1', '2']
 * param {Number} [curStep=0] - 当前走到哪一步的索引,默认值为0(第1步)
 * param {Boolean [isHalfLine = true]} - 是否隐藏一半进度 默认值true(隐藏)
 */
export default {
  name: 'm-progress',
  inheritAttrs: false,
  provide() {
    return {
      progress: this
    }
  },
  props: {
    type: {
      type: String,
      default: 'step'
    }
  },
  computed: {},
  components: {
    step,
    timeline,
    semicircle
  },
  created() {
    // this.$children.slots = this.$slots
  },
  mounted() {
    // console.log(this)
  },
  methods: {}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import '../../styles/widget/mui-progress/mui-progress';
</style>
