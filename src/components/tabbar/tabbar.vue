<template>
    <div class="m-tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {

    name: 'm-tabbar',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            items: []
        }
    },
    watch: {
        value(to, from) {
            this.setActiveItem()
        }
    },
    mounted() {
        this.setActiveItem()
    },

    methods: {
        setActiveItem() {
            this.items.forEach((item, index) => {
                item.isActive = index === this.value
            })
        },
        onChange(active) {
            // this.$emit('input', active)
            this.$emit('change', active)
        }
    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-tabbar/mui-tabbar";
</style>
