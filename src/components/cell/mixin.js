export default {
  inject: {
    cellGroup: {
      default: () => null
    }
  },
  computed: {
    itemId() {
      return `item_${this._uid}`
    },
    parent() {
      if (process.env.NODE_ENV !== 'production' && !this.cellGroup) {
        // console.error('[aym-ui] cell 需要在父组件cellGroup下')
        return null
      }
      return this.cellGroup
    },
    index() {
      if (!this.parent) return ''
      return this.parent.items.indexOf(this.itemId)
    },
    isFirst() {
      return this.index === 0
    }
  },
  created() {
    if (!this.parent) return
    this.parent.items.push(this.itemId)
  },
  destroyed() {
    if (!this.parent) return
    this.parent.items.splice(this.index, 1)
  }
}
