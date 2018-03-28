
## badge

### 代码示例

```html
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
```

### props 说明


| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|
| text |String| -  |- | 圈圈内内容 |      
| isDot |Boolean| false  |true/false|是否是无内容的小点点 |        
 
