
## marquee

### 代码示例

```html
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
```
### props 说明 

| 参数      |类型| 默认值    | 可选值|描述    |
|:-------- | :--------|:--------  |:--------|:---------|
|interval|Number|2000|-|时间间隔| 
|direction|String|up|up/down|滚动方向| 
|itemHeight|Number|-|-|项的高| 
