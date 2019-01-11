/**
* by Heioray 07/01/2019
* 轮播组件
*/
<template>
    <div :class="['container_outside', componentID]">
        <div v-if="dataList.length > 1"
            class="container_inside clearfix"
            :style="{'width': (dataList.length + 4) * unitWidth + 'px', 'transition-timing-function': 'ease-out', 'transition-duration': transitionDuration,'transform': 'translate(' + handledMoveDistance  + 'px, 0px) translateZ(0px)'}"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd">
            <!-- <a :data-index="this.dataList.length - 2" href="javascript:;" class="ass_item">
                <img :data-index="this.dataList.length - 2" :src="assLastSecond.img" alt="">
            </a> -->
            <a :data-index="dataList.length - 1" href="javascript:;" :class="['ass_item', (stillIndex % dataList.length) === 1 ? 'active_item__still' : ((activeIndex % dataList.length) === 1 ? 'active_item' : '')]" :style="{'width': unitWidth + 'px'}">
                <img :data-index="dataList.length - 1" :src="assLast.img" alt="">
            </a>
            <a :data-index="index" href="javascript:;" :class="['ass_item', (stillIndex % dataList.length) === ((index + 2) % dataList.length) ? 'active_item__still' : ((activeIndex % dataList.length) === ((index + 2) % dataList.length) ? 'active_item' : '')]" v-for="(item, index) in dataList" :key="'assitem' + item.img" :style="{'width': unitWidth + 'px'}">
                <img :data-index="index" :src="item.img" alt="">
            </a>
            <a :data-index="'0'" href="javascript:;" :class="['ass_item', (stillIndex % dataList.length) === indexShift ? 'active_item__still' : ((activeIndex % dataList.length) === indexShift ? 'active_item' : '')]" :style="{'width': unitWidth + 'px'}">
                <img :data-index="'0'" :src="assFirst.img" alt="">
            </a>
            <!-- <a :data-index="'1'" href="javascript:;" class="ass_item">
                <img :data-index="'1'" :src="assSecond.img" alt="">
            </a> -->
        </div>
        <div v-else class="container_inside clearfix">
            <a :data-index="'0'" href="javascript:;" :class="['ass_item', 'active_item']">
                <img :data-index="'0'" :src="assFirst.img" alt="">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'm-swiper',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        dataList: {
            type: Array,
            default: () => {
                return []
            }
        },
        config: {
            type: Object,
            default: () => {
                return {
                    autoPlay: true, // 是否自动播放
                    timeStep: 3000, // 自动播放时间步长
                    animationTime: 500 // 缓动时间
                }
            }
        }
    },
    data() {
        return {
            // touch 相关
            startX: 0,
            curMoveDistance: 0,
            startMoveDistance: 0,
            isHandlTouching: false,
            startIndex: 1,
            // 标注是否0时间间隔进行transform
            isTime0: true,
            // 边界最大距离 -- 暂时废弃
            limitMin: 0,
            // 外层容器宽
            unitWidth: 0,
            // 当前激活index
            activeIndex: 2,
            // 滞留index,用于页面初始化及其他页面切回的时候，避免放大动画重新渲染的情况
            stillIndex: 2,
            // 全局定时器
            timer: null
        }
    },
    watch: {
    },
    computed: {
        componentID() {
            return 'swiperNO' + new Date().getTime() + '-' + Math.floor(Math.random() * 2048)
        },
        sizeInfoReady() {
            return this.unitWidth !== 0
        },
        // 实际缓动时间
        transitionDuration() {
            return this.isTime0 ? '0ms' : this.config.animationTime + 'ms'
        },
        // 两侧填充的四个占位单元
        assFirst() {
            return this.dataList.length && this.dataList[0]
        },
        assSecond() {
            return this.dataList.length && this.dataList[1]
        },
        assLast() {
            return this.dataList.length && this.dataList[this.dataList.length - 1]
        },
        assLastSecond() {
            return this.dataList.length && this.dataList[this.dataList.length - 2]
        },
        indexShift() {
            return this.dataList.length > 2 ? 2 : 0
        },
        // 实时横向移动距离
        handledMoveDistance() {
            let temp = 0
            if (this.isHandlTouching) {
                temp = this.curMoveDistance
            } else {
                temp = -(this.activeIndex * this.unitWidth)
            }

            return temp
        }
    },
    components: {
    },
    created() {
    },
    mounted() {
        // 初始化尺寸信息
        this._initSizeInfo()
    },
    beforeDestroy() {
        this._destroy()
    },
    methods: {
        _initSizeInfo() {
            let tarDom = document.querySelector('.' + this.componentID)
            if (!tarDom && !tarDom.offsetWidth) {
                setTimeout(() => {
                    this._initSizeInfo()
                }, 50)
            } else {
                this.startMoveDistance = -tarDom.offsetWidth
                this.unitWidth = tarDom.offsetWidth
                this._initAuto()
            }
        },
        _initAuto() {
            // 判定自动播放
            if (this.config.autoPlay) {
                this.timer = setTimeout(() => {
                    this._stepJump()
                    this._initAuto()
                }, this.config.timeStep)
            }
        },
        // 步频移动，方向向右
        _stepJump() {
            this.isTime0 = false
            this.activeIndex++
            this.stillIndex = -1
            if (this.activeIndex === (this.dataList.length + 1)) {
                setTimeout(() => {
                    this.activeIndex = 1
                    this.isTime0 = true
                }, this.config.animationTime + 10)
            }
        },
        _destroy() {
            console.log('beforeDestroy destroy the timer')
            clearTimeout(this.timer)
        },
        // touch相关
        touchStart(e) {
            // 清除进行中的定时器，定制自动播放
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = null
            }
            // 初始化坐标、位置、索引信息，更新拖动中状态
            this.startX = e.touches[0].pageX
            this.startMoveDistance = this.curMoveDistance = this.handledMoveDistance
            this.startIndex = this.activeIndex
            this.isHandlTouching = this.isTime0 = true
            this.limitMin = document.querySelector('.' + this.componentID).offsetWidth - document.querySelector('.container_inside').offsetWidth
        },
        touchMove(e) {
            // 实际拖动距离
            let tempDice = this.startMoveDistance + e.touches[0].pageX - this.startX
            // 边界重置
            if (tempDice >= -this.unitWidth) {
                tempDice = -(this.dataList.length + 1) * this.unitWidth
                this.startMoveDistance = tempDice
                this.startX = e.touches[0].pageX
                this.activeIndex = this.dataList.length + 1
                this.startIndex = this.activeIndex
            } else if (tempDice <= -this.unitWidth * (this.dataList.length + 1)) {
                tempDice = -1 * this.unitWidth
                this.startMoveDistance = tempDice
                this.startX = e.touches[0].pageX
                this.activeIndex = 1
                this.startIndex = this.activeIndex
            }
            this.curMoveDistance = tempDice

            // 位移有效性判断，超过三分之一的时候前进或者后退一格
            let moveDiff = this.curMoveDistance - this.startMoveDistance
            let diffAbs = Math.abs(moveDiff)
            if (diffAbs > this.unitWidth / 3) {
                this.activeIndex = this.startIndex + (moveDiff > 0 ? -1 : 1)
                if (this.stillIndex !== -1) {
                    this.stillIndex = -1
                }
            }
        },
        touchEnd(e) {
            // 根据index重新计算位移距离 并重置start位置以及isTime0标识位
            this.startMoveDistance = this.curMoveDistance = -(this.activeIndex * this.unitWidth)
            this.isHandlTouching = this.isTime0 = false
            // 重新初始化自动轮播内容
            this._initAuto()
        }
    }
}
</script>
<style lang="scss">
.container_outside {
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0;
    overflow: hidden;
    .container_inside {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .ass_item {
            height: 100%;
        }
        img {
            height: auto;
            width: auto;
            max-height: 100%;
            max-width: 100%;
            margin: 0 auto;
        }
    }
}
</style>
