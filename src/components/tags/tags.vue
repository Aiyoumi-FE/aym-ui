<template>
    <span :class="classes">
        <slot></slot>
    </span>
</template>
<script>
const prefixCls = 'mui-tags'
export default {
    name: 'm-tags',
    props: {
        type: {
            type: String,
            default: 'bg',
            validator(value) {
                return ['bg', 'border'].indexOf(value) > -1
            }
        },
        bgColor: {
            type: String,
            default: 'orange',
            validator(value) {
                return ['orange', 'red', 'yellow', 'linear-blue', 'linear-red'].indexOf(value) > -1
            }
        }
    },
    computed: {
        classes() {
            return [{
                [`${prefixCls}_${this.type}`]: !!this.type,
                [`${prefixCls}_${this.bgColor}`]: this.type === 'bg'
            }]
        }
    },
    methods: {}
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-tags/mui-tags";
</style>
