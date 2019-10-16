<template>
<section v-if="isFixed" class="mui-footer">
  <div class="mui-fixedbottom"
    :style="stylePosition">
      <slot></slot>
  </div>
</section>
<section v-else class="mui-fixedbottom">
  <slot></slot>
</section>
</template>
<script>
import { isAndroid } from '../../libs/env'
export default {
    name: 'm-footer',
    inject: {
        isFixed: {
            default: () => false
        }
    },
    props: {
        setPosition: {
          type: Boolean,
          default: true
        }
    },
    data() {
      return {
        originHeight: 0,
        pageHeight: 0
      }
    },
    computed: {
      stylePosition() {
        if (!this.originHeight) {
          return {}
        }
        let keyboardHeight = this.originHeight - this.pageHeight
        return (keyboardHeight < 400 && keyboardHeight > 0) ? { position: 'static'} : {}
      }
    },
    mounted() {
      if (this.isFixed && this.setPosition && isAndroid) {
        this.initHeight()
        window.addEventListener('resize', this.resetHeight, false)
      }
    },
    beforeDestroy() {
      if (this.setPosition && isAndroid) {
        window.removeEventListener('resize', this.resetHeight, false)
      }
    },
    methods: {
      initHeight() {
        let height = document.body.offsetHeight
        this.originHeight = height
        this.pageHeight = height
      },
      resetHeight() {
        this.pageHeight = document.body.offsetHeight
      }
    }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-footer/mui-footer";
</style>
