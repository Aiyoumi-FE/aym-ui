import Vue from 'vue'
export const getVm = (component, propsData = {}) => {
    const Profile = Vue.extend(component)
    // const vm = new Profile({ propsData }).$mount()
    return new Profile({ propsData }).$mount()
}
export const componetVm = (myMixin = {}) => {
    return new Vue({
        mixin: [myMixin],
        data() {
            return {}
        },
        // template: `<m-button @click="buttonClick">{{btnText}}</m-button>`,
        components: {
            // xButton
        },
        methods: {
            // buttonClick(str) {
            //     this.btnText = '点击了'
            // }
        }
    })
}
