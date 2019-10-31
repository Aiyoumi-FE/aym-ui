export default {
  data() {
    return {
      isVisible: false
    }
  },
  watch: {
    isShow(to, from) {
      // this.isVisible = to
      to ? this.show() : this.hide()
    }
  },
  methods: {
    maskClick() {
      this.$emit('maskClick', this.hide)
    },
    show() {
      this.isVisible = true
    },
    hide() {
      this.isVisible = false
    },
    close() {
      this.hide()
      this.$emit('close')
    }
  }
}
