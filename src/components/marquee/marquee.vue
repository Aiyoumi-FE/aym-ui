<template>
    <div :class="['m-marquee','m-marquee-' + this.direction]">
				<slot name="icon"></slot>
				<div class="m-marquee_flex1" :style="boxStyle">
					<ul class="m-marquee__box" ref="box" :style="contentStyle">
						<slot></slot>
					</ul>
				</div>
    </div>
</template>
<script>
/**
 * mui-marquee
 * @module components/marquee
 * @desc 跑马灯
 * @param {String} [direction] - 滚动方向 up down horizontal horizontal_interval
 * @param {Number} [showLength] - 展示区域个数
 * @param {Number} [speed] - 滚动速度,单位, eg: 1000/s
 * @param {Number} [interval] - 停留时间,默认为0,不停留
 * @param {Number} [listHeight] - 列表单项高度
 * @param {Number} [scrollNum] - 每次滚动条数，只在间隔情况下有效
 */
import { setTimeout } from 'timers'

export default {
  name: 'm-marquee',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator: (value) => {
        return value === 'up' || value === 'down' || value === 'horizontal' || value === 'none'
      }
    },
    showLength: {
      type: Number,
      default: 1,
      validator: (value) => {
        let reg = /^\d+$/
        return reg.test(value)
      }
    },
    speed: {
      type: Number,
      default: 20,
      validator: (value) => {
        let reg = /^\d+$/
        return reg.test(value)
      }
    },
    interval: {
      type: Number,
      default: 0,
      validator: (value) => {
        let reg = /^\d+$/
        return reg.test(value)
      }
    },
    listHeight: {
      type: Number,
      default: 40,
      validator: (value) => {
        let reg = /^\d+$/
        return reg.test(value)
      }
    },
    scrollNum: {
      type: Number,
      default: 1,
      validator: (value) => {
        let reg = /^\d+$/
        return reg.test(value)
      }
    }
  },
  data() {
    return {
      timer: '',
      scroll_base: 0,
      requestAnimFrameId: '',
      cloneNode: '',
      base_count: 0
    }
  },
  computed: {
		box() {
			return this.$refs.box
		},
		parent() {
			return this.box.parentNode
		},
		child() {
			return this.box.firstElementChild
		},
    listHeightRem() {
      return this.toRem(this.listHeight)
    },
    // marqueeClass() {
    //   return 'm-marquee-' + this.direction
		// },
    // 换算16.7ms移动的距离
    perMs() {
      return this.speed / 1000 * 16.7
    },
    boxStyle() {
      return {
        'height': this.listHeightRem * this.showLength + 'rem'
      }
    },
    contentStyle() {
      if (this.direction === 'horizontal') {
        return {
          'line-height': this.listHeightRem + 'rem',
          'height': this.listHeightRem + 'rem'
        }
      } else {
        return {
          'line-height': this.listHeightRem + 'rem'
        }
      }
    }
  },
  created() {
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60)
          }
		})()
		window.cancelAnimFrame = (function(){
			return window.cancelAnimationFrame ||
					window.webkitCancelAnimationFrame ||
					window.mozCancelAnimationFrame ||
					function(id) {
						window.clearTimeout(id)
					}
			})
  },
  mounted() {
		this.$nextTick(() => {
      this.init()
    })
    // this.init()
  },
  methods: {
    // 清除动画
    destroy() {
      this.requestAnimFrameId && window.cancelAnimFrame(this.requestAnimFrameId)
    },
    init() {
			this.destroy()
			// 判断是否执行动画
			if (!this.isAnimation()) {
				return
			}
			// 横向间隔重置li宽度
      if (this.direction === 'horizontal' && this.interval) this.formatLiWidth()

      // 调用动画
      this.requestAnimFrameId = window.requestAnimFrame(this.commonFn)
		},
		isAnimation() {
			let boxW = this.box.offsetWidth
			let boxH = this.box.offsetHeight
			let parentw = this.parent.offsetWidth
			let parentH = this.parent.offsetHeight
			let isNone = this.direction === 'none'
			let isHorizontalAnim = this.direction === 'horizontal' && !this.interval && boxW <= parentw
			let isUpAnim = this.direction !== 'horizontal' && boxH <= parentH
			// 向左滚动，滚动内容宽<=父节点宽，则不滚动
			// 上下滚动，滚动内容高<=父节点高，则不滚动
			if (isNone ||isHorizontalAnim || isUpAnim) {
				return false
			}
			return true
		},
    formatLiWidth() {
			// let boxW = this.$refs.box.parentNode.offsetWidth
			let boxW = this.parent.offsetWidth
			let childNodes = this.box.childNodes || []
      for (let i = 0; i < childNodes.length; i++) {
        childNodes[i].style.width = boxW + 'px'
      }
    },
    // 抽取通用事件
    commonFn() {
      let box = this.$refs.box
			let boxH = this.box.offsetHeight
      let firstItem = box.firstElementChild
			let lastItem = box.lastElementChild
			let childH = firstItem.offsetHeight
			let reference = this.direction === 'horizontal' ? firstItem.offsetWidth : childH
			
			this.scroll_base += this.perMs
			
      if (this.direction === 'horizontal') {
				// box.style.transform = 'translate3d(' + (-this.scroll_base) + 'px,0,0)'
				this.setStyleTransform((-this.scroll_base) + 'px,0,0')
      } else if (this.direction === 'up') {
				// box.style.transform = 'translate3d(0,' + -this.scroll_base + 'px,0)'
				this.setStyleTransform('0,' + -this.scroll_base + 'px,0')
      } else if (this.direction === 'down') {
				let y = boxH - childH * this.showLength - this.scroll_base
				// box.style.transform = 'translate3d(0,' + -y + 'px,0)'
				this.setStyleTransform('0,' + -y + 'px,0')
				
      }

      if (this.scroll_base >= reference) {
        this.base_count++
        // 无间隔不销毁动画
        this.interval && this.destroy()

        // 克隆添加到对应位置
        this.cloneNode = null
        let readyItem = this.direction === 'down' ? lastItem : firstItem
        this.cloneNode = readyItem.cloneNode(true)
        if (this.direction === 'down') {
          box.insertBefore(this.cloneNode, box.childNodes[0])
        } else {
          box.appendChild(this.cloneNode)
        }

        // 删除已滚动条目，保持数据正确
        box.removeChild(readyItem)

        // 重置基数
        this.scroll_base = 0

        // 重置list位置，恢复初始位置
        if (this.direction === 'down') {
					let y = boxH - childH * this.showLength
					// box.style.transform = 'translate3d(0,' + -y + 'px,0)'
					this.setStyleTransform('0,' + -y + 'px,0')
        } else {
					// box.style.transform = 'translate3d(0,0,0)'
					this.setStyleTransform('0,0,0')
        }
        // 判断连续or间隔
        if (this.interval && this.base_count === this.scrollNum) {
          this.base_count = 0
          setTimeout(() => {
            this.requestAnimFrameId = window.requestAnimFrame(this.commonFn)
          }, this.interval)
        } else {
          this.requestAnimFrameId = window.requestAnimFrame(this.commonFn)
        }
      } else {
        this.requestAnimFrameId = window.requestAnimFrame(this.commonFn)
      }
    },
    toRem(val) {
      return window.hotcss.px2rem(val, 750)
		},
		setStyleTransform(style) {
			this.box.style.transform = 'translate3d(' + style + ')'
		}
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
@import "../../styles/widget/mui-marquee/mui-marquee";
</style>
