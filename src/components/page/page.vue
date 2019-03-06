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
            default: true
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
    methods: {},
    mounted() {
        if (this.setHeight) {
            this.pageHeight = document.body.offsetHeight
            window.addEventListener('resize', () => {
                this.pageHeight = document.body.offsetHeight
            }, false)
        }
    },
    components: {
        mPageLoading
    }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-layout/mui-layout";
</style>
