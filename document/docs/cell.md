
## cell

### 组件说明

4.0新增`size`,分为小（small）、中(middle)、大(large)、超大(xlarge)

不同`size`的区别主要是高度不同，其中中号和大号标题双行时，标题字号缩小。
小号无分割线。


### 代码示例

{{:examples/pages/cell.vue?type=template}}

### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:-----|:----------------------|    
| size |String| large |small, middle, large, xlarge| 尺寸，高度不同 |   
| title |String| -  |-| 左侧文字 |   
| titleBold |Boolean| -  |-| 标题是否加粗，size为xlarge时默认加粗 |   
| subTitle |String| -  |-| 左侧描述文字 |   
| value |String| -  |-| 右侧值 |   
| subValue |String| -  |-| 右侧描述值 |   
| placeholder |String| -  |-| 没有value时的默认值，灰色 |   
| isLink |Boolean| false|-| 是否显示右侧箭头 |   
| link |String,Object| -|-| 跳转地址 |      
| autoHeight |Boolean| false|-| 是否自动高度 |   
| disabled |Boolean| false|-| 是否可跳转 |   
| isSelect(3.0.0废弃，代替方案placeholder+value) |Boolean| false|-| 是否完整（填完或选中为黑色，默认灰色） |   
