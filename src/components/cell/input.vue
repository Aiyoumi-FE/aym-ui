<template>
  <div :class="classes">
    <div class="mui-cell__hd">
      <slot name="hd">
        <label v-if="title"
          class="mui-label">{{title}}</label>
      </slot>
    </div>
    <div class="mui-cell__bd">
      <input class="mui-input"
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        :type="type">
    </div>
    <div class="mui-cell__ft">
      <slot name="ft">
        <button v-if="inputType"
          class="mui-vcode__btn"
          :class="{'disabled':isDisabled}"
          @click="getCode">{{vcodeBtnText}}</button>
      </slot>
    </div>
  </div>
</template>
<script>
import { isIOS, isWX } from '../../libs/env'
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
const EVENT_GETCODE = 'getCode'
const EVENT_INPUT = 'input'
export default {
  name: 'm-input',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    btnType: {
      type: String,
      default: 'codeBtn',
      validator(value) {
        return ['codeBtn', 'imgBtn'].indexOf(value) > -1
      }
    },
    inputType: {
      type: String,
      default: ''
    },
    isTiming: {
      type: Boolean,
      default: false
    },
    value: {}
    // placeholder: {
    //     type: String,
    //     default: ''
    // },
    // disabled: {
    //     type: Boolean,
    //     default: false
    // },
    // readonly: {
    //     type: Boolean,
    //     default: false
    // },

    // autofocus: {
    //     type: Boolean,
    //     default: false
    // },
    // autocomplete: {
    //     type: Boolean,
    //     default: false
    // },
    // name: String,
    // id: String,
    // form: String,
    // minlength: Number,
    // maxlength: Number,
    // resize: String,
    // min: Number,
    // max: Number,
    // step: Number,
    // tabindex: String
  },
  data() {
    return {
      // inputValue: this.value,
      currentTime: 0,
      scrollTop: 0
    }
  },
  computed: {
    listeners() {
      var vm = this
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          compositionstart: (e) => {
            e.target.composing = true
          },
          compositionend: (e) => {
            if (!e.target.composing) return
            e.target.composing = false
            vm.$emit(EVENT_INPUT, e.target.value)
          },
          input: function(e) {
            if (!e.target.composing) {
              vm.$emit(EVENT_INPUT, e.target.value)
            }
          },
          focus: function(e) {
            if (isIOS && isWX) {
              vm.scrollTop = document.body.scrollTop
            }
            vm.$emit('focus', e)
          },
          blur: function(e) {
            if (isIOS && isWX) {
              document.body.scrollTop = vm.scrollTop
            }
            vm.$emit('blur', e)
          }
        }
      )
    },
    classType() {
      if (this.inputType) {
        return `${prefixCls}_${this.inputType}`
      }
      return ''
    },
    classes() {
      return [
        `${prefixCls}`,
        this.classType
        // {  [`${prefixCls}_${this.inputType}`]: this.inputType.length > 0}
      ]
    },
    isDisabled() {
      return this.isTiming
    },
    vcodeBtnText() {
      if (this.inputType === 'vcode' && this.isTiming) {
        return this.currentTime + 's后重发'
      }
      return '获取验证码'
    }
  },
  watch: {
    isTiming(to, from) {
      if (to) {
        this.countdown(60).then(() => {
          this.$emit(EVENT_GETCODE, 'done')
        })
      }
    }
    // value(to) {
    //     this.inputValue = to
    // },
    // inputValue(to) {
    //     this.$emit(EVENT_INPUT, to)
    // }
  },
  mounted() {},
  methods: {
    getCode(e) {
      if (this.isTiming) {
        return
      }
      this.$emit(EVENT_GETCODE, 'send')
    },
    countdown(totalTime) {
      this.currentTime = totalTime
      return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
          this.currentTime -= 1
          if (this.currentTime <= 0) {
            clearInterval(timer)
            resolve()
          }
        }, 1000)
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-cell/mui-cell";
@import "../../styles/widget/mui-form/mui-input";
@import "../../styles/widget/mui-form/mui-vcode";
</style>
