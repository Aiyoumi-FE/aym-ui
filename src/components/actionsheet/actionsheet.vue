<template>
  <transition name="fade">
    <m-popup type="actionsheet"
      @maskClick="hide"
      v-show="isVisible">
      <transition name="slide-up">
        <div class="mui-actionsheet-panel"
          v-show="isVisible">
          <!--   <div class="mui-actionsheet__title"
            v-if="title.length ">
            {{title}}
          </div> -->
          <m-header v-if="title"
            :title="title"
            type="modal"
            @click="close"></m-header>
          <p v-if="desc.length"
            class="mui-actionsheet__desc"
            v-html="desc">
          </p>
          <div class="mui-actionsheet__menu">
            <!-- eslint-disable-next-line -->
            <div class="mui-actionsheet__cell"
              :class="{select:selectItem.isSelect ?sIndex == index : false}"
              v-for="(item,index) in data"
              @click="itemClick(item,index)">
              <div class="mui-actionsheet__cell__bd"> {{item}}</div>
              <div v-if="sIndex == index"
                class="mui-actionsheet__cell__ft">
                <m-icon type="check1" />
              </div>
            </div>
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
import mHeader from '../header/header'
import mPopup from '../popup/popup'
import mIcon from '../icon'
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
    desc: {
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
    mHeader,
    mIcon,
    mPopup
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-actionsheet/mui-actionsheet";
</style>
