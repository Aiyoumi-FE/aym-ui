<template>
    <div class="mui-cells"
        :class="cellGroupClass">
        <slot></slot>
    </div>
</template>
<script>
/**
 * @param {String} [cellGroupClass=''] cell组自定义类名, 默认为''
 */
export default {
    name: 'm-cell-group',
    provide() {
        return {
            cellGroup: this
        }
    },
    props: {
        cellGroupClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            items: []
        }
    },
    computed: {},
    methods: {}
}
</script>
