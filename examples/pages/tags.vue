<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-tags>限时购</m-tags>
            <m-tags bg-color="red">HOT</m-tags>
            <m-tags bg-color="linear-blue">海淘</m-tags>
            <m-tags bg-color="linear-red">双11</m-tags>
            <m-tags bg-color="yellow">免息</m-tags>
            <m-tags style="background-color:#f0f">自定义颜色 #f0f</m-tags>
            <br>
            <m-tags type="border">推荐</m-tags>
            <m-tags type="border">火热推荐</m-tags>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-tags',
    data() {
        return {}
    },
    methods: {}
}
</script>
<style lang="scss"
    scoped>
.content-wrap {
    text-align: center;
}
</style>
