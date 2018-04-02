import Header from '../../components/header/header.vue'

Header.install = function(Vue) {
    Vue.component(Header.name, Header)
}

export default Header
