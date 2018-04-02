<template>
    <m-page>
        <m-header slot="header"></m-header>
        <m-tabbar v-model="tabbarIndex"
            class="tabbar"
            @indexChange="onIndexChange">
            <m-tabbar-item @click="hehe">
                <m-icon slot="icon"
                    slot-scope="{isActive}"
                    :type="isActive?'home_sel':'home_nor'"></m-icon>
                <span slot="label">首页</span>
            </m-tabbar-item>
            <m-tabbar-item>
                <m-icon slot="icon"
                    slot-scope="{isActive}"
                    :type="isActive?'find_sel':'find_nor'"></m-icon>
                <span slot="label">发现</span>
            </m-tabbar-item>
            <m-tabbar-item>
                <m-icon slot="icon"
                    slot-scope="{isActive}"
                    :type="isActive?'repay_sel':'repay_nor'"></m-icon>
                <span slot="label">我要还</span>
            </m-tabbar-item>
            <m-tabbar-item>
                <m-icon slot="icon"
                    slot-scope="{isActive}"
                    :type="isActive?'mine1_sel':'mine1_nor'"></m-icon>
                <span slot="label">我的</span>
            </m-tabbar-item>
        </m-tabbar>
    </m-page>
</template>
<script>
export default {
    name: 'demo-tabbar',
    data() {
        return {
            tabbarIndex: 1
        }
    },
    methods: {
        hehe() {
            console.log('heh')
        },
        onIndexChange(newIndex, oldIndex) {
            console.log(newIndex, oldIndex)
        }
    }
}
</script>
<style lang="scss"
    scoped>
.m-bar__item_on {
    .mui-icon-market {
        &:before {
            color: #EB5248;
        }
    }
    .mui-icon-search {
        &:before {
            color: #EB5248;
        }
    }
}
</style>
