<template>
  <div class="mui-cell mui-cell__input"
    :class="[{
              'mui-cell_first':isFirst,
              'mui-cell_autoheight':isAutoHeight,
              'mui-cell__input_textarea':isTextarea,
              'mui-cell__input_upanddown':upAndDown,
              'mui-cell__input_vcode':oldVcode, // 老样式发松验证码
              'mui-cell__input_focus':focused
            },cellSize]">
    <div class="mui-cell__hd">
      <slot name="hd">
        <label v-if="title"
          class="mui-label">{{title}}</label>
      </slot>
    </div>
    <div class="mui-cell__bd">
      <textarea v-if="isTextarea"
        class="mui-textarea"
        rows="3"
        :value="value"
        v-on="listeners"
        v-bind="$attrs"></textarea>
      <input v-else
        ref="input"
        class="mui-input"
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        :type="type">
      <!-- prevent  v-if="isShowClear" -->
      <m-icon v-if="isShowClear"
        @click.stop="onClear"
        ref="icon"
        type="delete"
        class="mui-input__icon_clear"></m-icon>
      <slot v-if="upAndDown"
        name="ft">
        <m-button v-if="newVcode"
          type="plain"
          size="middle"
          :class="{'disabled':isDisabled}"
          @click="getCode">{{vcodeBtnText}}</m-button>
      </slot>
    </div>
    <div class="mui-cell__ft">
      <slot v-if="!upAndDown"
        name="ft">
        <button v-if="oldVcode"
          class="mui-vcode__btn"
          :class="{'disabled':isDisabled}"
          @click="getCode">{{vcodeBtnText}}</button>
      </slot>
    </div>
  </div>
</template>
<script>
import mIcon from '../icon'
import mButton from '../button/button'
import mixin from './mixin'
/**
 * param {String} [title=''] - 输入框标题
 * param {String} [nativeType='text'] - input类型 可选text tel
 * param {String} [inputType=''] - input用途 可选 vcode(获取验证码)
 * param {String} [value=''] - input值 默认为空
 * param {String} [placeholder=''] - input输入提示文本 默认为空
 *
 * event 自定义事件有getcode
 */
const prefixCls = 'mui-cell'
export default {
  name: 'm-input',
  inheritAttrs: false,
  mixins: [mixin],
  props: {
    size: {
      type: String,
      default: 'large',
      validator(value) {
        return ['middle', 'large'].indexOf(value) > -1
      }
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    // btnType: {
    //   type: String,
    //   default: 'codeBtn',
    //   validator(value) {
    //     return ['codeBtn', 'imgBtn'].indexOf(value) > -1
    //   }
    // },
    autoHeight: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: ''
    },
    isTiming: {
      type: Boolean,
      default: false
    },
    value: {
      default: ''
    },
    upAndDown: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focused: false,
      // inputValue: this.value,
      currentTime: 0,
      timer: null
    }
  },
  computed: {
    cellSize() {
      return `mui-cell_${this.size}`
    },
    isAutoHeight() {
      return this.autoHeight || this.isTextarea || this.isVcode || this.upAndDown
    },
    isTextarea() {
      return this.type === 'textarea'
    },
    isShowClear() {
      // && !this.isVcode
      return this.clearable && this.focused && this.value !== ''
    },
    listeners() {
      var vm = this
      return Object.assign({},
        this.$listeners, {
          // 这里确保组件配合 `v-model` 的工作
          compositionstart: (e) => {
            e.target.composing = true
          },
          compositionend: (e) => {
            if (!e.target.composing) return
            e.target.composing = false
            vm.$emit('input', e.target.value)
          },
          input: this.onInput,
          focus: this.onFocus,
          blur: this.onBlur
        }
      )
    },
    isDisabled() {
      return this.isTiming
    },
    isVcode() {
      return this.inputType === 'vcode'
    },
    newVcode() {
      return this.isVcode && this.upAndDown
    },
    oldVcode() {
      return this.isVcode && !this.upAndDown
    },
    vcodeBtnText() {
      if (this.inputType === 'vcode' && this.isTiming) {
        return this.currentTime + 's后重发'
      }
      return '获取验证码'
    }
  },
  components: {
    mIcon,
    mButton
  },
  watch: {
    isTiming(to, from) {
      if (to) {
        this.countdown(60).then(() => {
          this.$emit('getCode', 'done')
        })
      }
    }
  },
  mounted() {},
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    focus() {
      this.$refs.input && this.$refs.input.focus()
    },
    blur() {
      this.$refs.input && this.$refs.input.blur()
    },
    onInput(e) {
      if (!e.target.composing) {
        this.$emit('input', e.target.value)
      }
    },
    onFocus(e) {
      this.focused = true
      this.$emit('focus', e)
    },
    onBlur(e) {
      // this.focused = false
      this.$emit('blur', e)
      setTimeout(() => {
        this.focused = false
      }, 0)
    },
    onClear(e) {
      this.$emit('input', '')
      this.$emit('clear')
      // this.focus()
    },
    getCode(e) {
      if (this.isTiming) {
        return
      }
      this.$emit('getCode', 'send')
    },
    countdown(totalTime) {
      this.currentTime = totalTime
      return new Promise((resolve, reject) => {
        this.timer = setInterval(() => {
          this.currentTime -= 1
          if (this.currentTime <= 0) {
            clearInterval(this.timer)
            resolve()
          }
        }, 1000)
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-cell/mui-cell";
</style>
