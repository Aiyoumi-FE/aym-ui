<template>
  <div class="mui-cell"
    :class="[{
          'mui-cell_first':isFirst,
          'mui-cell_access': isLink || !!link,
          'mui-cell_disabled': disabled,
          'mui-cell_autoheight': autoHeight
        },cellSize]"
    @click="handleClick">
    <div class="mui-cell__hd">
      <div class="mui-cell__hd_icon"
        v-if="$slots.icon">
        <slot name="icon">
        </slot>
      </div>
    </div>
    <div class="mui-cell__bd">
      <slot name="title">
        <p :class="{'mui-cell__bd_title_bold':isBold,'mui-cell__bd_title_mini':isMini}">{{ title }}</p>
        <p v-if="subTitle"
          class="mui-cell__bd_subtitle">{{subTitle}}</p>
      </slot>
    </div>
    <div class="mui-cell__ft"
      :class="valueClass">
      <p v-if="!value&&!$slots.value"
        class="mui-cell__ft_placeholder">
        {{placeholder}}
      </p>
      <slot name="value">
        <p :class="{'mui-cell__ft_value':subValue}"> {{value}}</p>
        <p v-if="subValue"
          class="mui-cell__ft_subvalue">{{subValue}}</p>
      </slot>
    </div>
  </div>
</template>
<script>
import {
  go
} from '../../libs/router'
import mixin from './mixin'

export default {
  name: 'm-cell',
  mixins: [mixin],

  props: {
    title: {
      type: String,
      default: ''
    },
    titleBold: {
      type: Boolean,
      default: false
    },
    subTitle: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    subValue: {
      type: String,
      default: ''
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: [String, Object],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'large', // s m l xl
      validator(value) {
        return ['small', 'middle', 'large', 'xlarge'].indexOf(value) > -1
      }
    }
  },
  computed: {
    isBold() { // xlarge默认标题加粗
      return this.size === 'xlarge' || this.titleBold
    },
    isMini() { // 中号大号双行标题缩小
      return this.subTitle && ['middle', 'large'].indexOf(this.size) > -1
    },
    cellSize() {
      return `mui-cell_${this.size}`
    },
    valueClass() {
      return {}
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) return
      if (this.link) {
        go(this.link, this.$router)
      } else {
        this.$emit('click', event)
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-cell/mui-cell";
</style>
