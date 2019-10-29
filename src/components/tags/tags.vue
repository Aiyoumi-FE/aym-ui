<template>
  <span class="mui-tags" :class="[tagStyle,tagType]">
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
      default: 'normal',
      validator(value) {
        return ['normal', 'warn', 'success', 'link', 'primary'].indexOf(value) > -1
      }
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tagStyle() {
      return this.outline ? 'mui-tags_outline' : 'mui-tags_bg'
    },
    tagType() {
      return `mui-tags_${this.type}`
    }
  },
  methods: {}
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-tags/mui-tags";
</style>
