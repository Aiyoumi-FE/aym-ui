export function ChildrenMixin(parent) {
  return {
    inject: {
      [parent]: {
        default: () => null
      }
    },
    computed: {
      childrenId() {
        return `children_${this._uid}`
      },
      parent() {
        if (process.env.NODE_ENV !== 'production' && !this[parent]) {
          // console.error('[aym-ui] cell 需要在父组件cellGroup下')
          return null
        }
        return this[parent]
      },
      index() {
        if (!this.parent) return ''
        return this.parent.children.indexOf(this.childrenId)
      },
      isFirst() {
        return this.index === 0
      }
    },
    created() {
      if (!this.parent) return
      this.parent.children.push(this.childrenId)
    },
    destroyed() {
      if (!this.parent) return
      this.parent.children.splice(this.index, 1)
    }
  }
}
export function ParentMixin(parent) {
  return {
    provide() {
      return {
        [parent]: this
      }
    },
    data() {
      return {
        children: []
      }
    }
  }
}
