import PageLoading from './page-loading.vue'
import addPageLoading from './api'
PageLoading.install = function(Vue) {
    Vue.component(PageLoading.name, PageLoading)
    addPageLoading(Vue, PageLoading)
}

export default PageLoading
