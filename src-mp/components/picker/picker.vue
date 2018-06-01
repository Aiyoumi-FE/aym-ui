<template>
    <picker :mode="mode"
        :range="range"
        :value="pickerValue"
        :range-key="rangeKey"
        @change="bindPickerChange"
        @columnchange="bindColumnchange"
        @cancel="bindPickerCancel">
        <slot></slot>
    </picker>
</template>
<script>
export default {

    name: 'm-picker',
    props: {
        mode: {
            type: String,
            default: 'selector'
        },
        range: {
            type: [Array, Object],
            default () {
                return []
            }
        },
        rangeKey: {
            type: String
        },
        value: {
            type: [String, Number, Array],
            default (value) {
                let defaultValue
                switch (this.mode) {
                    case 'selector':
                    case 'date':
                        defaultValue = 0
                        break
                    case 'multiSelector':
                    case 'region':
                        defaultValue = []
                        break
                    case 'time':
                        defaultValue = ''
                        break
                }
                return defaultValue
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        getData: {
            type: Function
        },
        provinceList: {},
        cityList: {},
        areaList: {}
    },
    data() {
        return {
            pickerValue: this.value
        }
    },
    computed: {},
    created() {
        // this.pickerValue = this.value
    },
    methods: {

        testPickerCancel(e) {},
        bindPickerChange(e) {
            // console.log(e)
            this.$emit('select', e.mp.detail.value)
        },
        bindColumnchange(e) {
            let { column, value } = e.mp.detail
            this.$emit('change', ...[column, value])
        },
        bindPickerCancel(e) {
            this.$emit('cancel')
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
