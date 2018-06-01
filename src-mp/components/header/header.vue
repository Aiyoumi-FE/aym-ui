<template>
    <header class="mui-bar"
        :class="classes">
        <a class="mui-bar__left"
            href="javascript:;"
            @click="leftHandle">
            <slot name="left">
                <m-icon v-if="type === 'modal'"
                    type="close1"></m-icon>
                <m-icon v-else
                    type="back"></m-icon>
            </slot>
        </a>
        <a class="mui-bar__tools"
            href="javascript:;">
            <slot name="right">
            </slot>
        </a>
        <slot name="title">
            <h1 class="mui-bar__title">
            {{headerTitle}}
        </h1>
        </slot>
    </header>
</template>
<script>
import mIcon from '../../components/icon/icon'
export default {
    name: 'm-header',
    props: {
        type: {
            type: String,
            default: 'nav'
        },
        title: {
            type: String,
            required: false
        },
        isLine: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {
        classes() {
            let navClass = 'mui-bar_nav'
            if (this.type === 'modal') {
                navClass = 'mui-bar_modal'
            }
            return [navClass, {
                // [`mui-bar_${this.type}`]: !!this.type,
                'mui-bar_bottom-line': this.isLine
            }]
        },
        headerTitle() {
            return this.title || document.title
        }
    },
    components: {
        mIcon
    },
    methods: {
        leftHandle() {
            if (this.type === 'nav') {
                return this.$router ? this.$router.go(-1) : window.history.go(-1)
            } else {
                this.$emit('click', event)
            }
        }
    }
}
</script>
<style lang="scss">
@import "../../styles/base/fn";
@import "../../styles/widget/mui-bar/mui-bar";
</style>
