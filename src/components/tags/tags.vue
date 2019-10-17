<template>
  <span :class="classes">
        <slot></slot>
    </span>
</template>
<script>
const prefixCls = 'mui-tags'
export default {
  name: 'm-tags',
  props: {
    type: {
      type: String,
      default: 'bg',
      validator(value) {
        return ['bg', 'border'].indexOf(value) > -1
      }
    },
    bgColor: {
      type: String,
      default: 'orange',
      validator(value) {
        return ['orange', 'red', 'yellow', 'linear-blue', 'linear-red'].indexOf(value) > -1
      }
    }
  },
  computed: {
    classType() {
      return `${prefixCls}_${this.type}`
    },
    classBg() {
      if (this.type === 'bg') {
        return `${prefixCls}_${this.bgColor}`
      }
      return ''
    },
    classes() {
      return [
        this.classType,
        this.classBg
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-tags/mui-tags";
</style>
