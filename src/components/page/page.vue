<template>
  <div class="mui-page"
    :class="{'mui-page_fixed': isFixed}"
    :style="styleObject">
    <slot name="header"></slot>
    <slot v-if="!isFixed" name="bottom"></slot>
    <div class="mui-content">
      <slot></slot>
      <m-page-loading v-if="loading"
        :isShow="isShow"></m-page-loading>
    </div>
    <slot v-if="isFixed" name="bottom"></slot>
  </div>
</template>
<script>
import mPageLoading from '../loading/page-loading'
export default {
  name: 'm-page',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    setHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: true,
      originHeight: '',
      pageHeight: ''
    }
  },
  provide() {
    return {
      isFixed: this.isFixed
    }
  },
  computed: {
    styleObject() {
      return this.pageHeight ? { height: this.pageHeight + 'px' } : {}
    }
  },
  components: {
    mPageLoading
  },
  mounted() {
    if (this.setHeight) {
      this.initHeight()
      window.addEventListener('resize', this.resizeHeight, false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHeight, false)
  },
  methods: {
    initHeight() {
      let height = document.body.offsetHeight
      this.originHeight = height
      this.pageHeight = height
    },
    resizeHeight() {
      // this.pageHeight = document.body.offsetHeight
      let height = document.body.offsetHeight
      if (height >= originHeight) {
        this.pageHeight = height
      }
    }
  }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-layout/mui-layout";
</style>
