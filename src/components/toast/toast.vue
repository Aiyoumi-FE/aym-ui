<template>
    <transition name="fade">
        <m-popup type="toast"
            :mask="mask"
            v-show="isVisible">
            <div class="mui-toast__content"
                :class="classes">
                <i v-if="icon==='loading'"
                    :class="classIcon"></i>
                <m-icon v-if="icon!=='loading'"
                    :type="icon"> </m-icon>
                <p v-if="txt"
                    :class="classText">{{txt}}</p>
            </div>
        </m-popup>
    </transition>
</template>
<script>
import mPopup from '../popup/popup'
import mIcon from '../icon/icon'
import apiMixin from '../../common/mixins/api'
/**
 * m-toast
 * @param {String} [type='text'] - 提示类型,默认值为'text',仅文本
 * @param {Boolean} [mask=false] - 是否显示遮罩
 * @param {String} [txt=''] - 提示文本, 默认为空
 * @param {Number} [time=2000] - 文本提示时间
 * @param {Function} [callback=null] - 提示文本结束后的回调函数, 默认为null
 */
export default {
    name: 'm-toast',
    mixins: [apiMixin],
    props: {
        type: {
            type: String,
            default: 'text'
        },
        mask: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String
        },
        txt: {
            type: String,
            default: ''
        },
        time: {
            type: Number,
            default: 2000
        },
        callback: {
            type: Function,
            default: null
        }
    },
    computed: {
        classes() {
            return [{
                'mui-toast__icon': !!this.icon
            }]
        },
        classIcon() {
            if (this.icon) {
                return [{
                    [`mui-icon-${this.icon}`]: !!this.icon && this.icon === 'loading',
                    'mui-toast__no-text': this.txt.length == 0
                }]
            }
        },
        classText() {
            if (this.icon) {
                return 'mui-toast__text'
            } else {
                return 'mui-toast__txt'
            }
        }
    },
    methods: {
        show() {
            this.isVisible = true
            this.clearTimer()
            this.$nextTick(() => {
                if (this.time !== 0) {
                    this.timer = setTimeout(() => {
                        this.hide()
                        if (this.callback !== null) {
                            this.callback()
                        }
                    }, this.time)
                }
            })
        },
        hide() {
            this.isVisible = false
            this.clearTimer()
        },
        clearTimer() {
            clearTimeout(this.timer)
            this.timer = null
        }

    },
    components: {
        mPopup,
        mIcon
    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-tips/mui-toast";
</style>
