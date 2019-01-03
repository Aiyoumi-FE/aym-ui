<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-button @click="showPopup('myPopup')">点击弹出Popup</m-button>
            <m-popup ref="myPopup"
                @maskClick="closePopup('myPopup')">
                <div class="text">
                    Popup是所有弹层类组件的基础组件
                </div>
            </m-popup>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-popup',
    data() {
        return {}
    },
    methods: {
        showPopup(refId) {
            const component = this.$refs[refId]
            component.show()
        },
        closePopup(refId) {
            const component = this.$refs[refId]
            component.hide()
        }
    }
}
</script>
<style lang="scss"
    scoped>
.text {
    max-width: 21.33333rem;
    min-height: 1.70667rem;
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 0.59733rem;
    padding: 0.42667rem;
    color: #fff;
}
</style>
