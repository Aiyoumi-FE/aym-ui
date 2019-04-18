
## cell

### 代码示例

{{:examples/pages/cell.vue?type=template}}

### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|    
| title |String| -  |-| 左侧文字 |   
| subTitle |String| -  |-| 左侧描述文字 |   
| value |String| -  |-| 右侧值 |   
| subValue |String| -  |-| 右侧描述值 |   
| placeholder |String| -  |-| 没有value时的默认值，灰色 |   
| isLink |Boolean| false|-| 是否显示右侧箭头 |   
| link |String,Object| -|-| 跳转地址 |      
| autoHeight |Boolean| false|-| 是否自动高度 |   
| disabled |Boolean| false|-| 是否可跳转 |   
| isSelect(3.0.0废弃，代替方案placeholder+value) |Boolean| false|-| 是否完整（填完或选中为黑色，默认灰色） |   
