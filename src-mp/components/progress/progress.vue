<template>
    <component :is="type"
        v-bind="$props"></component>
</template>
<script>
import step from './step'
import timeline from './timeline'
/**
 * param {String} [type = step] - 进度类型 默认值step
 * param {Array} [stepText=[]] - 存放每一步文本的数组, 默认值['0', '1', '2']
 * param {Number} [curStep=0] - 当前走到哪一步的索引,默认值为0(第1步)
 * param {Boolean [isHalfLine = true]} - 是否隐藏一半进度 默认值true(隐藏)
 */
export default {
    name: 'm-progress',
    props: {
        type: {
            type: String,
            default: 'step'
        },
        stepText: {
            type: Array,
            default: function() {
                return ['0', '1', '2']
            },
            validator(value) {
                return value.length >= 1
            }
        },
        curStep: {
            type: Number,
            default: 0
        },
        isHalfLine: {
            type: Boolean,
            default: true
        }
    },
    computed: {},
    components: {
        step,
        timeline
    },
    methods: {}
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-progress/mui-progress";
</style>
