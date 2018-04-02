<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <!-- 大按钮 -->
            <m-button @click="fn">Primary Button</m-button>
            <m-button :disabled="true">Primary Button</m-button>
            <m-button type="plain">Plain Button</m-button>
            <m-button type="plain"
                :disabled="true">Plain Button</m-button>
            <m-button type="warn">Warn Button</m-button>
            <m-button type="warn"
                :disabled="true">Warn Button</m-button>
            <div class="mui-flex"
                style="padding:10px 0;">
                <div class="mui-flex-1">
                    <!-- 中按钮 -->
                    <m-button size="middle">Button</m-button>
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
                    <!-- 小按钮 -->
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
            </div>
            <m-button type="full">Button</m-button>
            <m-button type="full"
                :disabled="true">Button</m-button>
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
    background-color: #fff;
}
</style>
