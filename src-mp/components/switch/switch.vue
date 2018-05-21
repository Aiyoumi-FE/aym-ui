<template>
    <label :for="newId"
        @click.prevent="handle"
        @touchstart="startHandle"
        @touchmove="moveHandle"
        @touchend="endHandle">
        <input :id="newId"
            class="mui-switch__input"
            type="checkbox"
            :checked="checked">
        <div class="mui-switch__box"></div>
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
        },
        startHandle(e) {
            let p = e.targetTouches[0]
            this.startPosition.x = p.clientX
            this.startPosition.y = p.clientY
        },
        moveHandle(e) {},
        endHandle(e) {
            let p = e.changedTouches[0]
            let dis = Math.sqrt(Math.pow(p.clientX - this.startPosition.x, 2) + Math.pow(p.clientY - this.startPosition.y, 2))
            if (dis >= 30) {
                this.handle()
            }
        }

    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-form/mui-switch";
</style>
