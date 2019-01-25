
## dialog


### 代码示例

{{:examples/pages/dialog.vue}}

### props 说明
 
| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:------|:---------|    
|type|String|alert|alert,confirm|对话框类型|
|title|String|-|-|对话框标题|
|content|String|-|-|对话框内容|
|closeOnConfirm|Boolean|true|-|是否阻止确认点击后默认关闭，默认true|
|confirmBtn|Object, String|确定|{text:'确定',href: 'xxx'}|主操作按钮|
|cancelBtn|Object, String|取消|{text:'取消',href: 'xxx'}|辅助操作按钮|
|onConfirm|Function|-|-|主操作回调|
|onConfirm|Function|-|-|辅助操作回调| 

### 其他

使用简单调用时，参数不为字符串时，与其他调用方式一致
