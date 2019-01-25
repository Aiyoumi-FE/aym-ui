
## modal
### 代码示例

{{:examples/pages/modal.vue}}

### props 说明
 
| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:------|:---------|    
|title|String|-|-|标题|
|content|String|-|-|内容|
|isShow|Boolean|false|true/false|是否显示|

如果使用isShow来控制显示隐藏，需要增加一个@close="xxx=false"控制
如果使用实例方法.show() 则不需要
