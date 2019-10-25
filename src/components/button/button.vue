<template>
  <button :class="classes"
    v-bind="$attrs"
    @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
/**
 * mui-nutton
 * param {String} [type=primary] 控制按钮的样式,默认primary可选plain warn  border  full
 * param {String} [size=large] 控制按钮尺寸, 默认large 可选middle small
 * param {Boolean} [disabled=false] 控制按钮是否禁用状态, 默认false
 *
 * event 定义按钮事件 click
 */
const prefixCls = 'mui-btn'
export default {
  name: 'm-button',
  props: {
    type: {
      default: 'primary',
      validator(value) {
        return ['primary', 'plain', 'full', 'border'].indexOf(value) > -1
      }
    },
    size: {
      default: 'large',
      validator(value) {
        return ['large', 'middle', 'small', 'xsmall'].indexOf(value) > -1
      }
    },
    round: {
      type: Boolean,
      default: true
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
  mounted() {
    document.body.addEventListener('touchstart',function(){},false)
  },
  methods: {
    handleClick(event) {
      // if (this.disabled) {
      //   event.preventDefault()
      //   event.stopPropagation()
      //   return
      // }
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-button/mui-button";
</style>
