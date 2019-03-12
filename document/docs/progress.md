## progress

### 代码示例

{{:examples/pages/progress.vue?type=template}}

### props 说明

| 参数 | 类型   | 默认值 | 可选值                   | 描述     |
| :--- | :----- | :----- | :----------------------- | :------- |
| type | String | step   | step/timeline/semicircle | 进度类型 |

不同的 type 对应不同的参数：

#### type:step 或 type:timeline

| 参数       | 类型    | 默认值          | 可选值    | 描述                               |
| :--------- | :------ | :-------------- | :-------- | :--------------------------------- |
| stepText   | Array   | ['0', '1', '2'] | -         | 存放每一步文本的数组,最小长度 2    |
| curStep    | Number  | 0               | 0,1,2.... | 当前走到哪一步的索引,从 0 开始计算 |
| isHalfLine | Boolean | true            | -         | 是否隐藏一半进度 默认值 true(隐藏) |

#### type:semicircle

| 参数       | 类型          | 默认值 | 可选值     | 描述           |
| :--------- | :------------ | :----- | :--------- | :------------- |
| percent    | String,Number | 0      | 10，50...  | 进度百分比     |
| barColor   | String        | #fff   | -          | bar 颜色       |
| isAutoPlay | Boolean       | true   | true/false | 是否自动播放   |
| show-text  | Boolean       | true   | true/false | 是否显示文字块 |
