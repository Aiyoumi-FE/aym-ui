<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-switch v-model="isCheck"></m-switch>
            <m-switch v-model="isCheck2"></m-switch>
            <m-cell-group>
                <m-cell isSwitch
                    title="异步切换，等待1s">
                    <m-switch slot="value"
                        :checked="isCheck3"
                        @input="changeSwitch"></m-switch>
                </m-cell>
                <m-cell isSwitch
                    title="不可变">
                    <m-switch slot="value"
                        :checked="false"></m-switch>
                </m-cell>
                <m-cell isSwitch
                    title="标题文本">
                    <m-switch slot="value"
                        v-model="isCheck"></m-switch>
                </m-cell>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-switch',
    data() {
        return {
            isCheck: true,
            isCheck2: true,
            isCheck3: false
        }
    },
    methods: {
        changeSwitch(val) {
            this.$_loading().show()
            setTimeout(() => {
                this.isCheck3 = val
                this.$_loading().hide()
            }, 1000)
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
