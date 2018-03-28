<template>
    <m-page :loading="loading">
        <m-header slot="header"></m-header>
        <demo-content>
            <m-button @click="showPageLoading">显示loading</m-button>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-loading',
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    },
    methods: {
        showPageLoading() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
