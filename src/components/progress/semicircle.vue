<template>
  <div class="mui-progress__semicircle">
    <!-- <svg data-value="50"  class="svgbox"  viewBox="0 0 336 196" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> -->
    <svg data-value="50"
      class="mui-progress__semicircle_svg"
      viewBox="-2 -1 340 196">
      <g transform="translate(-207.000000, -198.000000)"
        stroke-width="17"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round">
        <path :stroke="barColor"
          stroke-opacity="0.5"
          d="M216.240285,386 L216.240281,386.000002 C215.421874,379.448497 215,372.773701 215,366 C215,277.634 286.634,206 375,206 C463.366,206 535,277.634 535,366 C535,372.773701 534.578126,379.448497 533.759719,386.000002"></path>
        <path :stroke="barColor"
          ref="meter"
          class="meter"
          d="M216.240285,386 L216.240281,386.000002 C215.421874,379.448497 215,372.773701 215,366 C215,277.634 286.634,206 375,206 C463.366,206 535,277.634 535,366 C535,372.773701 534.578126,379.448497 533.759719,386.000002"
          fill="transparent"
          stroke-dasharray="543"
          stroke-dashoffset="543"></path>
      </g>
    </svg>
    <div class="svg__text"
      v-if="showText">
      <slot>
        <p>{{ percent }}%</p>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-semicircle',
  inject: {
    progress: {
      default: () => null
    }
  },
  props: {
    percent: {
      type: [Number, String],
      default: 0
    },
    barColor: {
      type: String,
      default: '#fff'
    },
    showText: {
      type: Boolean,
      default: true
    },
    isAutoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.progress.start = this.start
    if (this.isAutoPlay) {
      this.progress.start()
    }
  },
  methods: {
    start() {
      const path = this.$refs.meter
      let length = path.getTotalLength()
      path.style.strokeDashoffset = length
      path.style.strokeDasharray = length
      let value = this.percent
      let to = length * ((100 - value) / 100)
      path.getBoundingClientRect()
      path.style.strokeDashoffset = Math.max(0, to)
    }
  }
}
</script>
<style lang="scss">
.mui-progress__semicircle {
  position: relative;
  text-align: center;
  line-height: 0;
  color: #fff;
}

.svg__text {
  position: absolute;
  left: 50%;
  bottom: px2rem(10);
  transform: translateX(-50%);
  line-height: 1;
  text-align: center;
}

.mui-progress__semicircle_svg {
  width: 50%;
  // width:px2rem(400);
  // height: px2rem(200);
}

.mui-progress__semicircle_svg path {
  will-change: auto;
  //   stroke-width: px2rem(20);
  //   stroke-miterlimit: round;
  transition: stroke-dashoffset 850ms ease-in-out;
}
</style>
