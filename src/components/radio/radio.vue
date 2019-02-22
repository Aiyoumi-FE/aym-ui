<template>
    <div @click="onItemClick">
        <slot :isActive="isActive"></slot>
    </div>
</template>
<script>
export default {
    name: 'm-radio',
    inject: ['radioGroup'],
    props: {},
    data() {
        return {}
    },
    computed: {
        parent() {
            if (process.env.NODE_ENV !== 'production' && !this.radioGroup) {
                console.error('[aym-ui] radio 需要在父组件radioGroup下')
            }
            return this.radioGroup
        },
        radioId() {
            return `radio_${this._uid}`
        },
        index() {
            return this.parent.items.indexOf(this.radioId)
        },
        isActive() {
            return this.index === this.parent.activeIndex
        }
    },
    created() {
        this.parent.items.push(this.radioId)
    },
    destroyed() {
        this.parent.items.splice(this.index, 1)
    },
    methods: {
        onItemClick(event) {
            if (this.isActive) return
            this.parent.$emit('change', this.index)
            this.$emit('click', event)
            // this.routerGo()
        }
    }
}
</script>
<style lang="scss">
</style>
