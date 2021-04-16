<template>
  <transition name="fade">
    <m-popup type="picker"
      @maskClick="hide"
      v-show="isVisible">
      <transition name="slide-up">
        <div class="mui-picker-panel"
          v-show="isVisible">
          <m-header v-if="title"
            :title="title"
            type="modal"
            @click="close"></m-header>
          <div class="mui-picker__bd">
            <i class="mui-picker__bottom-1px"></i>
            <i class="mui-picker__top-1px"></i>
            <div class="mui-picker__wheel-wrapper"
              ref="wheelWrapper">
              <!-- eslint-disable-next-line -->
              <div v-for="(data, index) in pickerData">
                <ul class="wheel-scroll">
                  <!-- eslint-disable-next-line -->
                  <li v-for="(item,itemIndex) in data"
                    class="wheel-item"
                    :class="{'active':itemIndex == pickerSelectedIndex[index]}">
                    {{item|showText(textKey)}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mui-picker__ft">
            <m-button @click="confirm">{{confirmTxt}}</m-button>
          </div>
        </div>
      </transition>
    </m-popup>
  </transition>
</template>
<script>
import BScroll from 'better-scroll'
import mButton from '../button/button'
import mPopup from '../popup/popup'
import mHeader from '../header/header'
import apiMixin from '../../common/mixins/api'

const EVENT_SELECT = 'select'
const EVENT_VALUE_CHANGE = 'value-change'
const EVENT_CANCEL = 'cancel'
const EVENT_CHANGE = 'change'
export default {
  name: 'm-picker',
  mixins: [apiMixin],
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    title: {
      type: String
    },
    confirmTxt: {
      type: String,
      default: '确定'
    },
    selectedIndex: {
      type: Array,
      default: function() {
        return []
      }
    },
    textKey: {
      type: String,
      default: 'text'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    showText(value, textKey) {
      let typeValue = typeof value
      return (typeValue === 'string' || typeValue === 'number') ? value : value[textKey]
    }
  },
  data() {
    return {
      pickerData: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex,
      pickerSelectedItem: []
    }
  },
  computed: {},
  watch: {
    data(newData) {
      this.setData(newData, this.selectedIndex)
    }
  },
  components: {
    mPopup,
    mHeader,
    mButton
  },
  created() {
    if (!this.pickerSelectedIndex.length) {
      this.pickerSelectedIndex = []
      for (let i = 0; i < this.pickerData.length; i++) {
        this.pickerSelectedIndex[i] = 0
      }
    }
  },
  methods: {
    confirm() {
      if (!this._canConfirm()) {
        return
      }
      this.hide()

      let changed = false
      let isEqualArr = []
      let selectObj = []
      for (let i = 0; i < this.pickerData.length; i++) {
        // let index = this._getSelectIndex(this.wheels[i])
        let index = this.wheels[i].getSelectedIndex()
        this.pickerSelectedIndex[i] = index
        if (this.pickerData[i].length) {
          selectObj[i] = this.pickerData[i][index]
        }
        isEqualArr.push(this.pickerSelectedItem[i] === selectObj[i])
        this.pickerSelectedItem[i] = selectObj[i]
      }
      changed = isEqualArr.some(element => !element)
      this.$emit(EVENT_SELECT, this.pickerSelectedItem, this.pickerSelectedIndex)

      if (changed) {
        this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedItem, this.pickerSelectedIndex)
      }
    },

    show() {
      if (this.isVisible) {
        return
      }
      this.isVisible = true

      if (!this.wheels || this.dirty) {
        this.$nextTick(() => {
          this.wheels = this.wheels || []
          let wheelWrapper = this.$refs.wheelWrapper
          for (let i = 0; i < this.pickerData.length; i++) {
            this._createWheel(wheelWrapper, i).enable()
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          }
          this.dirty && this._destroyExtraWheels()
          this.dirty = false
        })
      } else {
        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].enable()
          this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
        }
      }
    },
    hide() {
      if (!this.isVisible) {
        return
      }
      this.isVisible = false

      for (let i = 0; i < this.pickerData.length; i++) {
        this.wheels[i].disable()
      }
    },
    setData(data, selectedIndex) {
      this.pickerSelectedIndex = selectedIndex ? [...selectedIndex] : []
      this.pickerData = data.slice()
      if (this.isVisible) {
        this.$nextTick(() => {
          const wheelWrapper = this.$refs.wheelWrapper
          this.pickerData.forEach((item, i) => {
            this._createWheel(wheelWrapper, i)
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          })
          this._destroyExtraWheels()
        })
      } else {
        this.dirty = true
      }
    },
    // refill(datas) {
    //     let ret = []
    //     if (!datas.length) {
    //         return ret
    //     }
    //     datas.forEach((data, index) => {
    //         ret[index] = this.refillColumn(index, data)
    //     })
    //     return ret
    // },
    // refillColumn(index, data) {
    //     const wheelWrapper = this.$refs.wheelWrapper
    //     let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
    //     let wheel = this.wheels ? this.wheels[index] : false
    //     let dist = 0
    //     if (scroll && wheel) {
    //         let oldData = this.pickerData[index]
    //         this.$set(this.pickerData, index, data)
    //         let selectedIndex = wheel.getSelectedIndex()
    //         if (oldData.length) {
    //             let oldValue = oldData[selectedIndex].value
    //             for (let i = 0; i < data.length; i++) {
    //                 if (data[i].value === oldValue) {
    //                     dist = i
    //                     break
    //                 }
    //             }
    //         }
    //         this.pickerSelectedIndex[index] = dist
    //         wheel.destroy()
    //         this.$nextTick(() => {
    //             // recreate wheel so that the wrapperHeight will be correct.
    //             wheel = this._createWheel(wheelWrapper, index)
    //             wheel.wheelTo(dist)
    //         })
    //     }
    //     return dist
    // },
    scrollTo(index, dist) {
      const wheel = this.wheels[index]
      this.pickerSelectedIndex[index] = dist
      wheel.wheelTo(dist)

    },
    refresh() {
      setTimeout(() => {
        this.wheels.forEach((wheel) => {
          wheel.refresh()
        })
      }, 200)
    },
    _createWheel(wheelWrapper, i) {
      if (!this.wheels[i]) {
        const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
          wheel: {

            selectedIndex: this.pickerSelectedIndex[i] || 0,
            rotate: 16
          },
          observeDOM: false,
          // useTransition: false
        })
        wheel.on('scrollEnd', () => {
          this.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex())
          // this.$emit(EVENT_CHANGE, i, this._getSelectIndex(wheel))
        })
      } else {
        this.wheels[i].refresh()
      }
      return this.wheels[i]
    },
    _destroyExtraWheels() {
      const dataLength = this.pickerData.length
      if (this.wheels.length > dataLength) {
        const extraWheels = this.wheels.splice(dataLength)
        extraWheels.forEach((wheel) => {
          wheel.destroy()
        })
      }
    },
    _canConfirm() {
      return this.wheels.every((wheel) => {
        return !wheel.isInTransition
      })
    },
    _getSelectIndex(wheel) {
      const y = wheel.y
      let selectedIndex
      // if (USE_TRANSITION) {
      //   selectedIndex = wheel.getSelectedIndex()
      // } else {
        if (y > wheel.minScrollY) {
          selectedIndex = 0
        } else if (y < wheel.maxScrollY) {
          selectedIndex = wheel.items.length - 1
        } else {
          selectedIndex = Math.round(Math.abs(y / wheel.itemHeight))
        }
      // }
      return selectedIndex
    },
    beforeDestroy() {
      this.wheels && this.wheels.forEach((wheel) => {
        wheel.destroy()
      })
      this.wheels = null
    },
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-picker/mui-picker";
</style>
