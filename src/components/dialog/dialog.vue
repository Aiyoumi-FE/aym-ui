<template>
    <transition name="mui-dialog-fade">
        <m-popup type="dialog"
            @maskClick="maskClick"
            v-show="isVisible">
            <div class="mui-dialog-panel">
                <div class="mui-dialog__hd"
                    v-if="title">
                    <slot name="title">
                        <strong class="mui-dialog__title">{{title}}</strong>
                    </slot>
                </div>
                <div class="mui-dialog__bd">
                    <slot>
                        <p v-html="content">
                        </p>
                    </slot>
                </div>
                <div class="mui-dialog__ft">
                    <a :href="_cancelBtn.href"
                        class="mui-dialog__btn mui-dialog__btn_default"
                        @click="cancel"
                        v-if="isConfirm">{{_cancelBtn.text}}</a>
                    <a :href="_confirmBtn.href"
                        class="mui-dialog__btn mui-dialog__btn_primary"
                        @click="confirm">{{_confirmBtn.text}}</a>
                </div>
            </div>
        </m-popup>
    </transition>
</template>
<script>
import mPopup from '../popup/popup'
import apiMixin from '../../common/mixins/api'
/**
 * @param {String} [type='alert'] - 对话框类型, 默认alert, 只有一个按钮。接受 alert, confirm
 * @param {String} [title=''] - 对话框标题
 * @param {String} [content=''] - 对话框内容
 * @param {Boolean} [closeOnConfirm=true] - 是否阻止默认关闭，默认true
 * @param {Object, String} [confirmBtn ] - 按钮文案与链接
 *
 * events: 自定义事件有confirm, cancel, close
 */
const EVENT_CONFIRM = 'confirm'
const EVENT_CANCEL = 'cancel'
const EVENT_CLOSE = 'close'
export default {
    name: 'm-dialog',
    mixins: [apiMixin],
    props: {
        type: {
            type: String,
            default: 'alert'
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        closeOnConfirm: {
            type: Boolean,
            default: true
        },
        confirmBtn: {
            type: [Object, String],
            default: function() {
                return {
                    text: '确定',
                    href: 'javascript:;'
                }
            }
        },
        cancelBtn: {
            type: [Object, String],
            default: function() {
                return {
                    text: '取消',
                    href: 'javascript:;'
                }
            }
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    computed: {
        _confirmBtn() {
            let btn = this.confirmBtn
            if (typeof btn === 'string') {
                return {
                    text: btn
                }
            }
            return btn
        },
        _cancelBtn() {
            let btn = this.cancelBtn
            if (typeof btn === 'string') {
                return {
                    text: btn
                }
            }
            return btn
        },
        isConfirm: function() {
            return this.type === 'confirm'
        }
    },
    components: {
        mPopup
    },
    mounted() {},
    methods: {
        confirm(e) {
            if (this.closeOnConfirm) {
                this.hide()
            }
            this.$emit(EVENT_CONFIRM, e)
        },
        cancel(e) {
            this.hide()
            this.$emit(EVENT_CANCEL, e)
        },
        close(e) {
            this.hide()
            this.$emit(EVENT_CLOSE, e)
        }
    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-dialog/mui-dialog";
</style>
