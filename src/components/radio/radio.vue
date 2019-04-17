<template>
  <div class="mui-radio"
    @click="onItemClick">
    <slot :isActive="isActive"></slot>
  </div>
</template>
<script>
export default {
  name: 'm-radio',
  inject: {
    radioGroup: {
      default: () => null
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    parent() {
      if (process.env.NODE_ENV !== 'production' && !this.radioGroup) {
        console.error('[aym-ui] radio 需要在父组件radioGroup下')
      }
      return this.radioGroup
    },
    radioId() {
      return `radio_${this._uid}`
    },
    index() {
      if (!this.parent) return ''
      return this.parent.items.indexOf(this.radioId)
    },
    isActive() {
      return this.index === this.parent.activeIndex
    }
  },
  created() {
    if (!this.parent) return
    this.parent.items.push(this.radioId)
  },
  destroyed() {
    if (!this.parent) return
    this.parent.items.splice(this.index, 1)
  },
  methods: {
    onItemClick(event) {
      if (this.isActive) return
      if (!this.disabled) {
        this.parent.$emit('change', this.index)
      }
      this.$emit('click', event)
      // this.routerGo()
    }
  }
}
</script>
<style lang="scss">
</style>
