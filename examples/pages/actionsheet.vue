<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-button @click="showActionsheet">Actionsheet</m-button>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-actionsheet',
    data() {
        return {}
    },
    methods: {
        showActionsheet() {
            this.actionsheet = this.$createActionSheet({
                data: ['本科', '专科', '研究生', '博士'],
                isBottomBtn: false,
                selectItem: {
                    isSelect: true,
                    index: 0
                },
                onSelect: (item, index) => {
                    this.$_toast({
                        time: 1000,
                        txt: '选择了: 第' + index + '项, ' + item
                    })
                }
            }).show()
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
