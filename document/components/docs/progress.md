
## progress

### 代码示例

```html
<m-progress></m-progress>

<m-progress :stepText="['Step0','Step1','Step2']" :curStep="1"></m-progress>

<m-progress :stepText="[0,1,2,3,4,5]" :curStep="3"></m-progress>
    
<m-progress type="timeline" :stepText="timelineArr"></m-progress>
```

### props 说明

| 参数      |类型 | 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------| 
|type|String|step|-|进度类型 目前有step 和 timeline两种类型|
|stepText|Array|['Step1', 'Step2', 'Step3']|-|存放每一步文本的数组,最小长度2|
|curStep|Number|0|0,1,2....|当前走到哪一步的索引,从0开始计算|
|isHalfLine|Boolean|true|-|是否隐藏一半进度 默认值true(隐藏)|
