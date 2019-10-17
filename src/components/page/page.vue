<template>
  <div class="mui-page"
    :style="styleObject">
    <slot name="header"></slot>
    <slot name="bottom"></slot>
    <div class="mui-content">
      <slot></slot>
      <m-page-loading v-if="loading"
        :isShow="isShow"></m-page-loading>
    </div>
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
    setHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: true,
      pageHeight: ''
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
      this.resizeHeight()
      window.addEventListener('resize', this.resizeHeight, false)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHeight, false)
  },
  methods: {
    resizeHeight() {
      this.pageHeight = document.body.offsetHeight
    }
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-layout/mui-layout";
</style>
