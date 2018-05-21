<template>
    <div class="mui-cell"
        :class="{
      'mui-cell_access': isLink || !!link,
      'mui-cell_switch': isSwitch,
      'select': isSelect
    }"
        @click="handleClick">
        <div class="mui-cell__hd">
            <slot name="icon"></slot>
        </div>
        <div class="mui-cell__bd">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class="mui-cell__ft"
            :class="valueClass">
            <slot name="value">{{value}}</slot>
        </div>
    </div>
</template>
<script>
import {
    go
} from 'src/libs/router'
export default {
    name: 'm-cell',
    props: {
        title: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        isLink: {
            type: Boolean,
            default: false
        },
        link: {
            type: [String, Object],
            default: ''
        },
        isSwitch: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        isSelect: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        valueClass() {
            return {}
        }
    },
    methods: {
        handleClick(event) {
            if (this.link) {
                if (!this.disabled) {
                    go(this.link, this.$router)
                }
            } else {
                this.$emit('click', event)
            }
        }
    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-cell/mui-cell";
</style>
