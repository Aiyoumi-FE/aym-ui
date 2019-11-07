## checkbox
### 代码示例

{{:examples/pages/checkbox.vue}}

### Checkbox props 说明

| 参数      |类型| 默认值    | 可选值|描述    |
|:-------- | :--------|:--------  |:--------|:---------|
| v-model |Boolean| false | true ,false |是否为选中状态 | 
| checked |Boolean| false | true ,false |选中时的值 | 
| value |any| - | - |标识符 | 
| disabled |Boolean|false|true ,false|是否禁用复选框 | 

### CheckboxGroup props 说明

| 参数      |类型| 默认值    | 可选值|描述    |
|:-------- | :--------|:--------  |:--------|:---------|
| v-model |Array| [] | - |所有选中项的标识符 | 
| disabled |Boolean|false|true ,false|是否禁用复选框 | 

### Checkbox Events 说明

| 事件名    |回调参数| 描述    |
|:-------- | :--------|:--------  |
| change |当前组件的值| 当绑定值变化时触发的事件 |
| click |event: Event|点击复选框时触发|

### CheckboxGroup Events 说明

| 事件名    |回调参数| 描述    |
|:-------- | :--------|:--------  |
| change |当前组件的值| 当绑定值变化时触发的事件 |


### Checkbox Slots 说明

| 名称    |slotProps| 描述    |
|:-------- | :--------|:--------  |
| icon |checked: 是否为选中状态| 自定义图标 |
| default |checked: 是否为选中状态| 自定义文本 |


### Checkbox 方法说明
通过 ref 可以获取到 Checkbox 实例并调用实例方法
| 方法名    |参数| 描述    |
|:-------- | :--------|:--------  |
| toggle |checked?: boolean| 切换所有复选框的选中状态 |

### CheckboxGroup 方法说明
通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法
| 方法名    |参数| 描述    |
|:-------- | :--------|:--------  |
| toggleAll |checked?: boolean| 切换选中状态 |