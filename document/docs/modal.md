
## modal
### 代码示例

```html
<h5>api调用</h5>
<m-button @click="showModal">底部弹出模态窗体</m-button>
<br>
<h5>组件调用</h5>
<m-button @click="showModal2">自定义弹</m-button>
<m-modal :isShow="modal2IsShow"
    ref="modal2"
    title="呵呵"
    @close="modal2IsShow=false"
    @mask-click="hideModal2">
    <div slot="content">
        <p>cotent</p>
        <p>cotent</p>
        <p>cotent</p>
        <p>cotent</p>
    </div>
    <div slot="footer">
        <m-button type="full"
            @click="hideModal2">关闭</m-button>
    </div>
</m-modal>

```

```javascript   
export default {
    name: 'demo-modal',
    data() {
        return {
            modal2IsShow: false
        }
    },
    methods: {
        showModal() {
            this.$createModal({
                title: '主标题',
                content: '<div>heheda</div>'
            }).show()
        },
        showModal2() {
            this.modal2IsShow = true
            // this.$refs.modal2.show()
        },
        hideModal2() {
            this.modal2IsShow = false
            // this.$refs.modal2.hide()
        }
    }
}
```
### props 说明
 
| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:------|:---------|    
|title|String|-|-|标题|
|content|String|-|-|内容|
|isShow|Boolean|false|true/false|是否显示|

如果使用isShow来控制显示隐藏，需要增加一个@close="xxx=false"控制
如果使用实例方法.show() 则不需要
