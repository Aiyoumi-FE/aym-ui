<template>
  <button :class="classes"
    v-bind="$attrs"
    :disabled="disabled"
    @click="handleClick"
    @touchstart="handleTouchstart">
    <slot></slot>
  </button>
</template>
<script>
/**
 * mui-button
 * param {String} [type=primary] 控制按钮的样式,默认primary可选plain warn  border  full
 * param {String} [size=large] 控制按钮尺寸, 默认large 可选middle small
 * param {Boolean} [disabled=false] 控制按钮是否禁用状态, 默认false
 *
 * event 定义按钮事件 click
 */
const prefixCls = 'mui-btn'
export default {
  name: 'm-button',
  inject: {
    btnGroup: {
      default: () => null
    }
  },
  props: {
    a: {
      type: String
    },
    type: {
      default: 'primary',
      validator(value) {
        return ['primary', 'plain', 'full', 'border', 'warn'].indexOf(value) > -1
      }
    },
    size: {
      default: function() {
        if (this.btnGroup) {
          return this.btnGroup.size
        }
        return 'large'
      },
      validator(value) {
        return ['large', 'middle', 'small', 'xsmall'].indexOf(value) > -1
      }
    },
    round: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classType() {
      return `${prefixCls}_${this.type}`
    },
    classSize() {
      if (this.type !== 'full') {
        return `${prefixCls}_${this.size}`
      }
      return ''
    },
    classRound() {
      if (this.type !== 'full' && this.round) {
        return `${prefixCls}_round`
      }
      return ''
    },
    classes() {
      return [
        `${prefixCls}`,
        this.classType,
        this.classSize,
        this.classRound,
        {
          'disabled': this.disabled
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleTouchstart(event) {
      this.$emit('touchstart', event)
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-button/mui-button";
</style>
