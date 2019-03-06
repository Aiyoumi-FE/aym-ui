<template>
    <transition name=" fade">
        <m-popup type="actionsheet"
            @maskClick="maskClick"
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
                            :class="{select:selectItem.isSelect ?sIndex == index : false}"
                            v-for="(item,index) in data"
                            v-html="item"
                            @click="itemClick(item,index)"></div>
                    </div>
                    <div class="mui-actionsheet__ft"
                        v-if="isBottomBtn"
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
 * param {Object} {isSelect:false,index:0} - 选中项对象，包含isSelect是否高亮选中项,index选中项索引
 *
 * events: 自定义事件 cancel, select
 */
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'
export default {
    name: 'm-action-sheet',
    mixins: [apiMixin],
    data() {
        return {
            sIndex: this.selectItem.index
        }
    },
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
        },
        isBottomBtn: {
            type: Boolean,
            default: true
        },
        selectItem: {
            type: Object,
            default: () => {
                return {
                    isSelect: false,
                    index: 0
                }
            }
        }
    },
    watch: {
        selectItem(val) {
            this.sIndex = val.index
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
            this.sIndex = index
            this.$emit(EVENT_SELECT, item, index)
        }
    },
    components: {
        mPopup
    }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-actionsheet/mui-actionsheet";
</style>
