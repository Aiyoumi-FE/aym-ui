## input
### 代码示例

{{:examples/pages/input.vue}}

### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|
|title|String|-|-|输入框标题|
|type|String|text|tel,text..|input类型,当type为textarea时为文本域，|
|inputType|String|-|-|vcode(获取验证码)|
|clearable|Boolean|-|false|是否可擦除|
|upAnddown|Boolean|-|false|是否是上下结构|
|value|String|-|-|input值|
|placeholder|String|-|-|input输入提示文本 默认为空| 
|disabled|Boolean|false|true/false|是否禁用| 
|readonly|Boolean|false|true/false|是否只读| 
 
其中获取验证码按钮事件为 `getCode`

也支持原生input的其他属性
```
name: String,
id: String,
form: String,
minlength: Number,
maxlength: Number,
resize: String,
min: Number,
max: Number,
step: Number,
tabindex: String
```
