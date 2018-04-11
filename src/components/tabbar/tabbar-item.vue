<template>
    <a href="javascript:;"
        class="m-tabbar__item"
        :class="{'m-tabbar__item_on': isActive}"
        @click="onItemClick">
        <div class="m-tabbar__icon">
            <slot name="icon"
                :isActive="isActive"></slot>
            <!-- <slot name="icon-active"></slot> -->
            <sup> </sup>
        </div>
        <p class="m-tabbar__label">
            <slot name="label"></slot>
        </p>
    </a>
</template>
<script>
import routerGo from '../../common/mixins/router-go'

export default {

    name: 'm-tabbar-item',
    mixins: [routerGo],
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        index() {
            return this.$parent.items.indexOf(this)
        }
    },
    beforeCreate() {
        this.$parent.items.push(this)
    },
    destroyed() {
        this.$parent.items.splice(this.index, 1)
    },
    methods: {
        onItemClick(event) {
            if (this.isActive) return
            this.$parent.onChange(this.index)
            this.$emit('click', event)
            this.routerGo()
        }
    }
}
</script>
<style lang="scss">
</style>
