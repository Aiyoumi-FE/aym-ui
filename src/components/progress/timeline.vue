<template>
  <ul class="mui-progress_timeline">
    <li class="mui-progress__item"
      v-for="(item, index) in stepText"
      :key="item.title"
      :class="{'cur':index <= curStep, 'none-halfline':index == curStep && isHalfLine}">
      <div class="mui-progress__time">
        <span>{{item.date}}</span>
        <span class="mui-progress__ball"></span>
      </div>
      <div class="mui-progress__content">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
      </div>
    </li>
  </ul>
</template>
<script>
export default {

  name: 'm-timeline',
  // props: ['curStep', 'isHalfLine', 'stepText'],
  props: {
    stepText: {
      type: Array,
      validator(value) {
        return value.length >= 1
      }
    },

    curStep: {
      type: Number,
      default: 0
    },
    isHalfLine: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
</style>
