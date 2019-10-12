<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <h5>按钮类型</h5>
            <m-button @click="fn">主要按钮</m-button>
            <m-button type="plain">次要按钮</m-button>

            <h5>按钮尺寸</h5>
            <m-button>大号按钮</m-button>
            <m-button size="middle">中号按钮</m-button>
            <m-button size="small">小号按钮</m-button>
            <m-button size="mini">超小按钮</m-button>

            <h5>禁用状态</h5>
            <m-button disabled>禁用按钮</m-button>
            <!-- <div class="mui-flex"
                style="padding:10px 0;">
                <div class="mui-flex-1">
                    <m-button size="middle">中号按钮</m-button>
                    <m-button size="middle"
                        :disabled="true">Button</m-button>
                    <m-button type="plain"
                        size="middle">Button</m-button>
                    <m-button type="plain"
                        size="middle"
                        :disabled="true">Button</m-button>
                    <m-button type="border"
                        size="middle">Button</m-button>
                    <m-button type="border"
                        size="middle"
                        :disabled="true">Button</m-button>
                </div>
                <div class="mui-flex-1">
                    <m-button size="small">Button</m-button>
                    <m-button size="small"
                        :disabled="true">Button</m-button>
                    <m-button type="plain"
                        size="small">Button</m-button>
                    <m-button type="plain"
                        size="small"
                        :disabled="true">Button</m-button>
                    <m-button type="border"
                        size="small">Button</m-button>
                    <m-button type="border"
                        size="small"
                        :disabled="true">Button</m-button>
                </div>
            </div> -->
            <!-- <m-button type="full">Button</m-button>
            <m-button type="full"
                :disabled="true">Button</m-button> -->
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-button',

    data() {
        return {}
    },
    methods: {
        fn() {
            this.$createToast({ txt: '点击了' }).show()
        }
    }
}
</script>
<style lang="scss"
    scoped>
.content-wrap {
    padding: 0 px2rem(32);
}
h5 {
    padding: 35px 0 10px;
}
/deep/ .mui-btn_large {
    margin-bottom: 10px;
}
</style>
