import TransferDom from '../../common/directives/transfer-dom'

TransferDom.install = function(Vue) {
    Vue.directive('transfer-dom', TransferDom)
}

export default TransferDom
