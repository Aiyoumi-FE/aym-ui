<template>
  <div class="mui-cell"
    :class="{
      'mui-cell_first':isFirst,
      'mui-cell_access': isLink || !!link,
      'mui-cell_disabled': disabled,
      'mui-cell_autoheight': autoHeight,
      'mui-cell_multiline': isMultiline
    }"
    @click="handleClick">
    <div class="mui-cell__hd">
      <div class="mui-cell__hd_icon"
        :class="{'mui-cell__hd_icon_big':isMultiline}"
        v-if="$slots.icon">
        <slot name="icon">
        </slot>
      </div>
    </div>
    <div class="mui-cell__bd">
      <slot name="title">
        <p :class="{'mui-cell__bd_title':isBold}">{{ title }}</p>
      </slot>
      <p v-if="subTitle"
        class="mui-cell__bd_subtitle">{{subTitle}}</p>
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
    }
  },
  computed: {
    isBold() {
      return this.subTitle || this.titleBold
    },
    isMultiline() {
      return this.subTitle || this.subValue
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
