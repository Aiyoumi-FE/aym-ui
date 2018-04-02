<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-cell-group>
                <m-cell title="标题文本"
                    is-link>
                    <span slot="value">详细信息 <m-badge is-dot></m-badge></span>
                </m-cell>
                <m-cell is-link>
                    <div slot="title">
                        标题文本
                        <m-badge>1</m-badge>
                    </div>
                </m-cell>
                <m-cell is-link>
                    <div slot="title">
                        标题文本
                        <m-badge>8</m-badge>
                    </div>
                    <span slot="value">详细信息</span>
                </m-cell>
                <m-cell is-link>
                    <div slot="title">
                        标题文本
                        <m-badge>10</m-badge>
                    </div>
                    <span slot="value">详细信息</span>
                </m-cell>
                <m-cell is-link>
                    <div slot="title">
                        标题文本
                        <m-badge>New</m-badge>
                    </div>
                </m-cell>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-badge',
    data() {
        return {}
    }
}
</script>
<style lang="scss"
    scoped>
</style>
