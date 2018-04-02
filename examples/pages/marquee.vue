<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-marquee direction="down">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    class=""
                    @click.native="onClick(i)">反方向 {{i}}</m-marquee-item>
            </m-marquee>
            <m-marquee>
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">默认正方向 {{i}}</m-marquee-item>
            </m-marquee>
            <m-cell-group>
                <m-cell title="反方向"
                    value="右侧文本"
                    is-select
                    is-link>
                    <m-marquee slot="value"
                        direction="down">
                        <m-marquee-item v-for="i in 5"
                            :key="i"
                            @click.native="onClick(i)">hello world {{i}}</m-marquee-item>
                    </m-marquee>
                </m-cell>
                <m-cell title="正方向"
                    is-select
                    is-link>
                    <m-marquee slot="value">
                        <m-marquee-item v-for="i in 5"
                            :key="i"
                            @click.native="onClick(i)">hello world {{i}}</m-marquee-item>
                    </m-marquee>
                </m-cell>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-marquee',
    data() {
        return {}
    },
    methods: {
        onClick() {
            console.log(11)
        }
    }
}
</script>
<style lang="scss"
    scoped>
.m-marquee {
    font-size: 14px;
}
</style>
