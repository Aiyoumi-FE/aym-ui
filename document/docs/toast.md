
## toast

### 代码示例

```html
<h5>简单调用</h5>
<m-button @click="showToast">Text Toast</m-button>
<m-button @click="showToast2">Text Toast and callback</m-button>
<m-button @click="showLoading">Loading</m-button>
<br>
<h5>配置调用</h5>
<m-button @click="showIconToast">Icon Toast</m-button>
<m-button @click="showIconTextToast">Icon and Text Toast</m-button>
```

```javascript 
export default {
    name: 'demo-toast',
    data() {
        return {}
    },
    methods: {
        showToast() {
            this.$_toast('简单调用简单调用简单调用简单调用简单调用简单调用')
        },
        showToast2() {
            this.$_toast('简单调用+回调', () => {
                console.log('toast callback')
            })
        },
        showLoading() {
            let loading = this.$_loading()
            loading.show()
            setTimeout(() => {
                loading.hide()
            }, 2000)
        },
        showIconToast() {
            this.$_toast({
                icon: 'loading',
                time: 1000
            })
        },
        showIconTextToast() {
            this.$_toast({
                icon: 'check2',
                time: 1000,
                txt: '信息文案'
            })
        }

    }
} 
```

### props 说明


| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|    
| mask |Boolean| false  |true| 是否显示遮罩 |      
| txt |String| -  |true| 提示信息 |      
| time |Number| 3000 |-| 显示时间 |      
| callback |Function| null |-| 回调函数 |      
 


 
