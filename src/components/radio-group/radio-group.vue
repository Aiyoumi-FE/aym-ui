<template>
  <div class="m-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'm-radio-group',
  provide() {
    return {
      radioGroup: this
    }
  },
  model: {
    prop: 'activeIndex',
    event: 'change'
  },
  props: {
    activeIndex: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      items: []
    }
  },
  watch: {},
  methods: {

  }
}
</script>
<style lang="scss">
@import '../../styles/var.scss';
</style>
