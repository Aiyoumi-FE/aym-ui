<template>
  <div class="mui-popup"
    :class="typeClass"
    v-show="isVisible">
    <div class="mui-mask"
      v-show="mask"
      @click="maskClick"
      :style="transparent? transparentStyle :''"></div>
    <div class="mui-popup__container">
      <div class="mui-popup__content "
        :class="{'mui-popup__content_round':round}"
        v-if="$slots.default">
        <slot>
        </slot>
      </div>
      <div class="mui-popup__content"
        :class="{'mui-popup__content_round':round}"
        v-else
        v-html="content">
      </div>
    </div>
  </div>
</template>
<script>
import apiMixin from '../../common/mixins/api'
const EVENT_MASK_CLICK = 'maskClick'
export default {
  name: 'm-popup',
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: true
    },
    mask: {
      type: Boolean,
      default: true
    },
    transparent: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
    typeClass() {
      return this.type ? `mui-${this.type}` : ''
    },
    transparentStyle() {
      return 'background-color:rgba(0,0,0,0)'
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-popup/mui-popup";
</style>
