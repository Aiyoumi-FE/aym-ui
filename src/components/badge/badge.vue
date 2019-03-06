<template>
    <span class="mui-badge"
        :class="{'mui-badge_dot':isDot}">
            <slot>{{text}}</slot>
        </span>
</template>
<script>
export default {
    name: 'm-badge',
    props: {
        text: {
            type: String,
            default: ''
        },
        isDot: {
            type: Boolean,
            default: false
        }
    },
    computed: {},
    methods: {}
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-tips/mui-badge";
</style>
