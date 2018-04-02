<template>
    <button :type="htmlType"
        :class="classes"
        :disabled="disabled"
        @click="handleClick">
        <slot></slot>
    </button>
</template>
<script>
/**
 * mui-nutton
 * param {String} [htmlType=button] button表单类型,默认type=button 可选选button submit reset
 * param {String} [type=primary] 控制按钮的样式,默认primary可选plain warn  border  full
 * param {String} [size=large] 控制按钮尺寸, 默认large 可选middle small
 * param {Boolean} [disabled=false] 控制按钮是否禁用状态, 默认false
 *
 * event 定义按钮事件 click
 */
const prefixCls = 'mui-btn'
export default {
    name: 'm-button',
    props: {
        htmlType: {
            default: 'button',
            validator(value) {
                return ['button', 'submit', 'reset'].indexOf(value) > -1
            }
        },
        type: {
            default: 'primary',
            validator(value) {
                return ['primary', 'plain', 'warn', 'border', 'full'].indexOf(value) > -1
            }
        },
        size: {
            default: 'large',
            validator(value) {
                return ['large', 'middle', 'small'].indexOf(value) > -1
            }
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}_${this.type}`]: !!this.type,
                    [`${prefixCls}_${this.size}`]: this.type !== 'full',
                    'disabled': this.disabled
                }
            ]
        }
    },
    methods: {
        handleClick(event) {
            if (this.disabled) {
                event.preventDefault()
                event.stopPropagation()
                return
            }
            this.$emit('click', event)
        }
    },
    mounted() {}
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-button/mui-button";
</style>
