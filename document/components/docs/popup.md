
## popup

### 介绍

Popup是所有弹层类组件的基础组件,如`toast`、`dialog`...

### 代码示例

```html
<m-popup ref="myPopup"
    @mask-click="closePopup('myPopup')">
    <div class="text">
        Popup是所有弹层类组件的基础组件
    </div>
</m-popup>
```
```javascript  
export default {
    name: 'demo-popup',
    data() {
        return {}
    },
    methods: {
        showPopup(refId) {
            const component = this.$refs[refId]
            component.show()
        },
        closePopup(refId) {
            const component = this.$refs[refId]
            component.hide()
        }
    }
}
```
### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|
| type |String| -  |- | 不同类型 | String|      
| mask |Boolean| true  |true/false| 是否显示遮罩 |      
| transparent |Boolean| false|true/false| mask背景透明 |      
| content |String| - |-| 内容 |          
 
