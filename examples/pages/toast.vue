<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <h5>简单调用</h5>
            <m-button @click="showToast">Text Toast</m-button>
            <m-button @click="showToast2">Text Toast and callback</m-button>
            <m-button @click="showLoading">Loading</m-button>
            <br>
            <h5>配置调用</h5>
            <m-button @click="showIconToast">Icon Toast</m-button>
            <m-button @click="showIconTextToast">Icon and Text Toast</m-button>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-toast',
    data() {
        return {}
    },
    methods: {
        showToast() {
            this.$_toast('简单调用简单调用简单调用简单调用简单调用简单调用')
        },
        showToast2() {
            this.$_toast('简单调用+回调', () => {
                console.log('toast callback')
            })
        },
        showLoading() {
            let loading = this.$_loading()
            loading.show()
            // setTimeout(() => {
            //     loading.hide()
            // }, 2000)
        },
        showIconToast() {
            this.$_toast({
                icon: 'loading',
                time: 1000
            })
        },
        showIconTextToast() {
            this.$_toast({
                icon: 'check2',
                time: 0,
                txt: '信息文案'
            })
        }
    }
}
</script>
