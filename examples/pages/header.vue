<template>
    <m-page>
        <m-header slot="header">
            <m-icon slot="right"
                type="shop"></m-icon>
        </m-header>
        <m-header slot="header"
            title="标题不传默认document.title"
            style="top:50px;">
            <m-icon slot="right"
                type="shop"></m-icon>
        </m-header>
        <m-header slot="header"
            :isBack="false"
            @click="clickHandler"
            style="top:100px;">
            <span slot="title">
                自定义标题内容
            </span>
            <m-icon slot="right"
                type="shop"></m-icon>
        </m-header>
        <demo-content>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-header',
    data() {
        return {}
    },
    computed: {

    },
    methods: {
        clickHandler() {
            this.$_toast('自定义左边按钮行为')
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
