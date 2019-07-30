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
          default: false
        }
    },
    data() {
      return {
        elementHeight: 0,
        outerHeight: 0
      }
    },
    computed: {
      stylePosition() {
        if (!this.elementHeight) {
          return {}
        }
        let keyboardHeight = this.elementHeight - this.outerHeight
        return (keyboardHeight < 300 && keyboardHeight > 0) ? { position: 'static'} : {}
      }
    },
    mounted() {
      if (this.setPosition && isAndroid) {
        this.getHeight()
        window.addEventListener('resize', this.getHeight, false)
      }
    },
    beforeDestroy() {
      if (this.setPosition && isAndroid) {
        window.removeEventListener('resize', this.getHeight, false)
      }
    },
    methods: {
      getHeight() {
        this.elementHeight = document.documentElement.clientHeight
        this.outerHeight = window.outerHeight
      }
    }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-footer/mui-footer";
</style>
