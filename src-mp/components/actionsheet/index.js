// import ActionSheet from './actionsheet.vue'
// import addActionSheet from './api'
// ActionSheet.install = function(Vue) {
//     Vue.component(ActionSheet.name, ActionSheet)
//     addActionSheet(Vue, ActionSheet)
// }

// export default ActionSheet
export default {
    methods: {
        $createActionSheet(config) {
            let {
                data: itemList = [],
                onSelect: success = () => {}
            } = config
            let params = Object.assign({}, { itemList, success })

            return {
                show() {
                    wx.showActionSheet(params)
                }
            }
        }
    }
}
