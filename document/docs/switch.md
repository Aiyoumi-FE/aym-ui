
## switch


### 代码示例

```html
<m-switch v-model="isCheck"></m-switch>
<m-switch v-model="isCheck2"></m-switch>
<m-cell-group>
    <m-cell title="异步切换，等待1s">
        <m-switch slot="value"
            :checked="isCheck3"
            @input="changeSwitch"></m-switch>
    </m-cell>
    <m-cell title="不可变">
        <m-switch slot="value"
            :checked="false"></m-switch>
    </m-cell>
    <m-cell title="标题文本">
        <m-switch slot="value"
            v-model="isCheck"></m-switch>
    </m-cell>
</m-cell-group> 
```

```javascript
export default {
    name: 'demo-switch',
    data() {
        return {
            isCheck: true,
            isCheck2: true,
            isCheck3: false
        }
    },
    methods: {
        changeSwitch(val) {
            this.$_loading().show()
            setTimeout(() => {
                this.isCheck3 = val
                this.$_loading().hide()
            }, 1000)
        }
    }
}
```

### props 说明


| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|    
| id |String| switch+uid  |-| 用来生成switch唯一id |  
| v-model/checked |Boolean| false  |true/false| 是否选中 |      
