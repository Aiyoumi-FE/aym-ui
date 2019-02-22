<template>
    <div class="mui-cell"
        :class="{
      'mui-cell_first':isFirst,
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
} from '../../libs/router'
export default {
    name: 'm-cell',
    inject: {
        cellGroup: {
            default: () => null
        }
    },
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
        parent() {
            if (process.env.NODE_ENV !== 'production' && !this.cellGroup) {
                console.error('[aym-ui] cell 需要在父组件cellGroup下')
            }
            return this.cellGroup
        },
        valueClass() {
            return {}
        },
        itemId() {
            return `item_${this._uid}`
        },
        index() {
            if (!this.parent) return ''
            return this.parent.items.indexOf(this.itemId)
        },
        isFirst() {
            return this.index === 0
        }
    },
    created() {
        if (!this.parent) return
        this.parent.items.push(this.itemId)
    },
    destroyed() {
        if (!this.parent) return
        this.parent.items.splice(this.index, 1)
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
@import "../../styles/base/fn";
@import "../../styles/widget/mui-cell/mui-cell";
</style>
