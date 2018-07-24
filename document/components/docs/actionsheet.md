
## actionsheet

### 代码示例

```html
 <m-button @click="showActionsheet">Actionsheet</m-button>
```
```javascript
export default {
    name: 'demo-actionsheet',
    data() {
        return {}
    },
    methods: {
        showActionsheet() {
            this.actionsheet = this.$createActionSheet({
                data: ['本科', '专科', '研究生', '博士'],
                isBottomBtn: false,
                selectItem: {
                    isSelect: true,
                    index: 0
                },
                onSelect: (item, index) => {
                    this.$createToast({
                        time: 1000,
                        txt: '选择了: 第' + index + '项, ' + item
                    }).show()
                }
            })
            this.actionsheet.show()
        }
    }
}
```

### props 说明


| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|    
| title |String| -  |-| 标题, 默认为空 |   
| data |Array| -  |-| 项列表数据, 默认空数组 |  
| isBottomBtn | Boolean | true | - | 是否显示底部按钮 |
| selectItem | Object | {isSelect: false,index: 0} | - | 选中项配置, isSelect是否高亮选中项,index选中项索引  |
| onSelect |function| -  |-| 选中回调 |   
| onCancel |function| -  |-| 取消回调 |   
 
