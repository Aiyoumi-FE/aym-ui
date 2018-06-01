<template>
    <label :for="newId"
        @click.prevent="handle">
        <input :id="newId"
            class="mui-switch__input"
            type="checkbox"
            :checked="checked">
        <div class="mui-switch__box"
            :class="{'mui-switch__box_checked':checked}"></div>
    </label>
</template>
<script>
/**
 * param {String} [id=switchCP] - 用来生成switch唯一id(newId)
 * param {Boolean} [checked=false] - 是否checked， 默认false
 */
export default {
    name: 'm-switch',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        id: {
            type: String,
            default: 'switch'
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            startPosition: {
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        newId: function() {
            return this.id + this._uid
        }
    },
    methods: {
        handle() {
            this.$emit('change', !this.checked)
            this.$emit('input', !this.checked)
        }
    }
}
</script>
<style lang="scss">
@import "../../styles/base/fn";
@import "../../styles/widget/mui-form/mui-switch";
</style>
