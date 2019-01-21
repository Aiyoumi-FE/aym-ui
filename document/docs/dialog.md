
## dialog


### 代码示例
```html
    <h5>简单调用</h5>
    <m-button @click="showAlert">$_alert('简单调用')</m-button>
    <m-button @click="showConfirm">$_confirm('简单调用')</m-button>
    <br>
    <h5>api调用</h5>
    <m-button @click="showDialog1">有标题单按钮</m-button>
    <m-button @click="showDialog2">有标题双按钮</m-button>
    <m-button @click="showDialog3">无标题单按钮</m-button>
    <br>
    <h5>组件调用</h5>
    <m-button @click="showDialogComp('dialog4')">有标题双按钮</m-button>
    <m-button @click="showDialogComp('dialog5')">阻止默认关闭</m-button>
    <m-dialog ref="dialog4"
        title="title4"
        type="confirm"
        @confirm="dialog4Confirm"
        @cancel="dialog4Cancel">
        <div>
            如果我有机器猫
        </div>
    </m-dialog>
    <m-dialog ref="dialog5"
        title="title5"
        :closeOnConfirm="false"
        @confirm="dialog5Confirm">
        <div>
            我要叫他小叮当
        </div>
    </m-dialog>
```
```javascript
export default {
    name: 'demo-dialog',
    data() {
        return {}
    },
    methods: {
        showAlert() {
            this.$_alert('简单调用').then(res => {
                this.$_toast({ txt: '点了确认', time: 1000 })
            })
        },
        showConfirm() {
            this.$_confirm('简单调用').then(res => {
                this.$_toast({ txt: '点了确认', time: 1000 })
            }, res => {
                this.$_toast({ txt: '点了取消', time: 1000 })
            })
        },
        showDialog1() {
            this.$createDialog({
                title: '标题',
                content: '弹窗内容，呃呃呃分，描述文字尽量控制在三行内',
                onConfirm: () => {
                    this.$_toast({ txt: '点了确认', time: 1000 })
                }
            }).show()
        },
        showDialog2() {
            this.$createDialog({
                type: 'confirm',
                title: '标题',
                content: '我是双按钮，描述文字尽量控制在三行内',
                onConfirm: () => {
                    this.$_toast({ txt: '点了确认', time: 1000 })
                },
                onCancel: () => {
                    this.$_toast({ txt: '点了取消', time: 1000 })
                }
            }).show()
        },
        showDialog3() {
            this.$createDialog({
                content: '我是单按钮，描述文字尽量控制在三行内',
                onConfirm: () => {
                    this.$_toast({ txt: '点了确认', time: 1000 })
                }
            }).show()
        },
        showDialogComp(i) {
            this.$refs[i].show()
        },
        dialog4Confirm() {
            this.$_toast({ txt: '点了确认', time: 1000 })
        },
        dialog4Cancel() {
            this.$_toast({ txt: '点了取消', time: 1000 })
        },
        dialog5Confirm() {
            this.$_toast({ txt: '点了确认,1秒后关闭', time: 1000 })
            setTimeout(() => {
                this.$refs.dialog5.hide()
            }, 1000)
        }
    }
}
```
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
