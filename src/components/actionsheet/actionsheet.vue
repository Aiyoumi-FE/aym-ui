<template>
    <transition name=" fade">
        <m-popup type="actionsheet"
            v-show="isVisible">
            <transition name="slide-up">
                <div class="mui-actionsheet-panel"
                    v-show="isVisible">
                    <div class="mui-actionsheet__title"
                        v-if="title.length > 0">
                        <div class="mui-actionsheet__cell">{{title}}</div>
                    </div>
                    <div class="mui-actionsheet__menu">
                        <div class="mui-actionsheet__cell"
                            v-for="(item,index) in data"
                            v-html="item"
                            @click="itemClick(item,index)"></div>
                    </div>
                    <div class="mui-actionsheet__ft"
                        @click="cancel">
                        <a href="javascript:;"
                            class="mui-actionsheet_default">取消</a>
                    </div>
                </div>
            </transition>
        </m-popup>
    </transition>
</template>
<script>
import mPopup from '../popup/popup'
import apiMixin from '../../common/mixins/api'
/**
 * param {String} [title=''] - 标题, 默认为空.
 * param {Array} [data=[]] - 项列表数据, 默认空数组
 *
 * events: 自定义事件 cancel, select
 */
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'
export default {
    name: 'm-action-sheet',
    mixins: [apiMixin],
    props: {
        title: {
            type: String,
            default: ''
        },
        data: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    computed: {},
    methods: {
        cancel() {
            this.hide()
            this.$emit(EVENT_CANCEL)
        },
        itemClick(item, index) {
            this.hide()
            this.$emit(EVENT_SELECT, item, index)
        }
    },
    components: {
        mPopup
    }
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
@import "src/styles/widget/mui-actionsheet/mui-actionsheet";
</style>
