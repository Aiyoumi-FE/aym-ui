<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
			<h5>滚动方向</h5>
			<m-marquee>
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">我是默认向右滚动{{i}} </m-marquee-item>
            </m-marquee>
			<m-marquee
            :direction="'down'">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动向下滚动 {{i}}</m-marquee-item>
            </m-marquee>
			<m-marquee
            :direction="'up'">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向上滚动 {{i}}</m-marquee-item>
            </m-marquee>
			<br/>
            <h5>滚动间隔时间</h5>
			<m-marquee
            direction="up"
			:interval="3000">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">间隔3S滚动一次 {{i}}</m-marquee-item>
            </m-marquee>
			<br/>
			<h5>滚动个数（只在间隔情况下有效）</h5>
			<m-marquee
            direction="down"
			:interval="3000"
			:scrollNum="2">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向下滚动 {{i}}</m-marquee-item>
            </m-marquee>
			<br/>
			<h5>滚动速度</h5>
			<m-marquee
            direction="down"
			:interval="3000"
			:speed="50">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向下滚动 {{i}}</m-marquee-item>
            </m-marquee>

			<br/>
			<h5>区域展示个数</h5>
			<m-marquee
			direction="down"
			:showLength="3">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向下滚动 {{i}}</m-marquee-item>
            </m-marquee>

			<br/>
			<h5>单个高度</h5>
			<m-marquee
            direction="down"
			:showLength="3"
			:listHeight="60">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">向下滚动 {{i}}</m-marquee-item>
            </m-marquee>
			<br/>
			<h5>图标</h5>
			<m-marquee >
				<m-icon type="attetion" slot="icon"></m-icon>
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">我是默认向右滚动{{i}} </m-marquee-item>
            </m-marquee>
			<br/>
			<h5>不滚动</h5>
			<m-marquee
			direction="none">
                <m-marquee-item
                    @click.native="onClick(i)">超过长度也不要滚动 超过长度也不要滚动 超过长度也不要滚动 超过长度也不要滚动</m-marquee-item>
            </m-marquee>
			<br/>
			<h5>横向滚动，滚动内容宽&lt=父节点宽，则不滚动</h5>
			<m-marquee>
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    class=""
                    @click.native="onClick(i)">长度不够 {{i}}</m-marquee-item>
            </m-marquee>
			<br/>
			<h5>上下滚动，滚动内容高&lt=父节点高，则不滚动</h5>
			<m-marquee
			direction="down"
			:showLength="5">
                <m-marquee-item v-for="i in 3"
                    :key="i"
                    @click.native="onClick(i)">向下滚动 {{i}}</m-marquee-item>
            </m-marquee>
            <!-- <m-marquee :direction="'down'">
                <m-marquee-item v-for="i in 5"
                    :key="i"
                    @click.native="onClick(i)">默认正方向 {{i}}</m-marquee-item>
            </m-marquee>
			<p>----------</p> -->
            
            <!-- <m-cell-group>
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
            </m-cell-group> -->
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
	margin-bottom: 10px;
}
</style>
