
## header

### 代码示例

```html
<m-header slot="header">
    <span slot="right"
        class="mui-icon-shop"></span>
</m-header>
<m-header slot="header"
    title="标题不传默认document.title"
    style="top:50px;">
    <span slot="right"
        class="mui-icon-shop"></span>
</m-header>
<m-header slot="header"
    style="top:100px;">
    <span slot="title">
        自定义标题内容
    </span>
    <span slot="right"
        class="mui-icon-shop"></span>
</m-header>
```
 ### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|    
| type |String| nav  |nav,modal| 类型 |   
| title |String| document.title  |-| 标题名，可以不传，默认为 document.title|   
| isLine |Boolean| false  |true/false| 是否需要下划线|   
