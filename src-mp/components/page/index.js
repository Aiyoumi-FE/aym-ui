import Page from './page.vue'

Page.install = function(Vue) {
    Vue.component(Page.name, Page)
}

export default Page
