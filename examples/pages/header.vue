<template>
    <m-page>
        <m-header slot="header">
            <span slot="right"
                class="mui-icon-shop"></span>
        </m-header>
        <m-header slot="header"
            title="标题不传默认document.title"
            style="top:50px;">
            <span slot="right"
                class="mui-icon-shop"></span>
        </m-header>
        <m-header slot="header"
            style="top:100px;">
            <span slot="title">
                自定义标题内容
            </span>
            <span slot="right"
                class="mui-icon-shop"></span>
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

        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
