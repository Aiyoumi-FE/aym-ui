
## tabbar
### 代码示例

```html
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

```
### props 说明

| 参数      |类型| 默认值    | 可选值|描述    |
|:-------- | :--------|:--------  |:--------|:---------|
|value|Number|0|-|当前tabbar选中的索引|

