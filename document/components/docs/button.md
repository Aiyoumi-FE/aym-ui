
## button

### 代码示例
``` html
<!-- 大按钮 -->
<m-button @click="fn">Primary Button</m-button>
<m-button :disabled="true">Primary Button</m-button>
<m-button type="plain">Plain Button</m-button>
<m-button type="plain"
    :disabled="true">Plain Button</m-button>
<m-button type="warn">Warn Button</m-button>
<m-button type="warn"
    :disabled="true">Warn Button</m-button>
<div class="mui-flex"
    style="padding:10px 0;">
    <div class="mui-flex-1">
        <!-- 中按钮 -->
        <m-button size="middle">Button</m-button>
        <m-button size="middle"
            :disabled="true">Button</m-button>
        <m-button type="plain"
            size="middle">Button</m-button>
        <m-button type="plain"
            size="middle"
            :disabled="true">Button</m-button>
        <m-button type="border"
            size="middle">Button</m-button>
        <m-button type="border"
            size="middle"
            :disabled="true">Button</m-button>
    </div>
    <div class="mui-flex-1">
        <!-- 小按钮 -->
        <m-button size="small">Button</m-button>
        <m-button size="small"
            :disabled="true">Button</m-button>
        <m-button type="plain"
            size="small">Button</m-button>
        <m-button type="plain"
            size="small"
            :disabled="true">Button</m-button>
        <m-button type="border"
            size="small">Button</m-button>
        <m-button type="border"
            size="small"
            :disabled="true">Button</m-button>
    </div>
</div>
  <m-button type="full">Button</m-button>
  <m-button type="full"
                :disabled="true">Button</m-button>
```

### props 说明

| 参数      |类型| 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------|
| htmlType |String |button|button, submit, reset|button表单类型|
| type     |String |primary|primary, plain, warn, border, full|控制按钮的样式|
| size     |String |large|large, middle, small|控制按钮尺寸|
| disabled |Boolean|false|true ,false|控制按钮是否禁用状态 | 


