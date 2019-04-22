<template>
  <div class="m-tabbar__outter"
    :class="[barPosition,safeBottom]">
    <div class="m-tabbar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-tabbar',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    fixed: {
      type: [String, Boolean],
      default: 'bottom',
      validator: function(value) {
        return ['top', 'bottom', false].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    barPosition() {
      if (this.fixed === false) {
        return ''
      }
      return `m-tabbar__${this.fixed}`
    },
    safeBottom() {
      return this.fixed === 'bottom' ? 'safe-area__block' : ''
    }
  },
  watch: {
    value(to, from) {
      this.setActiveItem()
    }
  },
  mounted() {
    this.setActiveItem()
  },

  methods: {
    setActiveItem() {
      this.items.forEach((item, index) => {
        item.isActive = index === this.value
      })
    },
    onChange(active) {
      // this.$emit('input', active)
      this.$emit('change', active)
    }
  }
}
</script>
<style lang="scss">
@import "../../styles/widget/mui-tabbar/mui-tabbar";
</style>
