
## actionsheet

### 代码示例

```html 
<m-cell-group>
    <m-cell title="学校"
        :value="school.name"
        is-link
        @click="fnClick"></m-cell>
    <m-cell title="学历"
        :value="education.name"
        is-link
        @click="fnClick1"></m-cell>
</m-cell-group>
```
```javascript
export default {
    name: 'demo-actionsheet',
    data() {
        return {
            school: {
                name: '请选择',
                code: ''
            },
            education: {
                name: '请选择',
                code: ''
            },
            schoolData: ['北京大学', '浙江大学', '财经大学'],
            schoolSelectItem: {
                isSelect: true,
                index: 1
            },
            decucationData: ['本科', '专科', '研究生', '博士'],
            decucationSelectItem: {
                isSelect: true,
                index: 0
            }
        }
    },
    methods: {
        fnClick() {
            this.actionsheet = this.$createActionSheet({
                data: this.schoolData, 
                selectItem: this.schoolSelectItem,
                onSelect: (item, index) => {
                    this.schoolSelectItem.index = index
                    this.school.name = item
                }
            }).show()
        },
        fnClick1() {
            this.actionsheet = this.$createActionSheet({
                data: this.decucationData,
                isBottomBtn: false,
                selectItem: this.decucationSelectItem,
                onSelect: (item, index) => {
                    this.decucationSelectItem.index = index
                    this.education.name = item
                }
            }).show()
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
 
