import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'

Radio.install = function(Vue) {
    Vue.component(Radio.name, Radio)
}

RadioGroup.install = function(Vue) {
    Vue.component(RadioGroup.name, RadioGroup)
}

// export default Radio

export { RadioGroup, Radio }
