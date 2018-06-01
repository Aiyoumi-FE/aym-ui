const EVENT_MASK_CLICK = 'mask-click'
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
        show() {
            console.log('---api show---')
            this.isVisible = true
        },
        hide() {
            this.isVisible = false
        },
        maskClick(e) {
            this.$emit(EVENT_MASK_CLICK, e)
        }
    }
}
