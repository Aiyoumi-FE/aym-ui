import Progress from '../../components/progress/progress.vue'

Progress.install = function(Vue) {
    Vue.component(Progress.name, Progress)
}

export default Progress
