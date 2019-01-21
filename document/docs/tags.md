## tags

### 代码示例

```html
    <m-tags>限时购</m-tags>
    <m-tags bg-color="red">HOT</m-tags>
    <m-tags bg-color="linear-blue">海淘</m-tags>
    <m-tags bg-color="linear-red">双11</m-tags>
    <m-tags bg-color="yellow">免息</m-tags>
    <m-tags style="background-color:#f0f">自定义颜色 #f0f</m-tags>
    <br>
    <m-tags type="border">推荐</m-tags>
    <m-tags type="border">火热推荐</m-tags>
```

### props 说明

| 参数      |类型 | 默认值    | 可选值|描述    | 
|:-------- | :--------|:--------  |:--------|:---------| 
|type|String|bg|bg,border| 背景色填充/边框|
|bgColor|String|orange|orange, red, yellow, linear-blue, linear-red|type为bg时的可选项 |
