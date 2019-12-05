<template>
  <div class="mui-btns">
    <slot></slot>
  </div>
</template>
<script>
import { ParentMixin } from '../../common/mixins/nested.js'

export default {
  name: 'm-button-group',
  // inheritAttrs: false,
  mixins: [ParentMixin('btnGroup')],
  props: {
    size: {
      default: 'middle',
      validator(value) {
        return ['large', 'middle', 'small', 'xsmall'].indexOf(value) > -1
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
</style>
