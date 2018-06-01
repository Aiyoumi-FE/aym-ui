<template>
    <svg class="mui-icon"
        aria-hidden="true">
        <use :xlink:href="'#icon-'+type"></use>
    </svg>
</template>
<script>
// import '../../libs/iconfont'
export default {
    name: 'm-icon',
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    computed: {}
}
</script>
<style lang="scss">
@import "../../styles/base/fn";
@import "../../styles/icon/iconfont";
</style>
