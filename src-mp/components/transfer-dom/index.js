import TransferDom from 'src/common/directives/transfer-dom'

TransferDom.install = function(Vue) {
    Vue.directive('transfer-dom', TransferDom)
}

export default TransferDom
