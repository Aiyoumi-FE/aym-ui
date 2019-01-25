
## loading

### 代码示例

{{:examples/pages/loading.vue}}
 
### 使用说明

1. 页面组件loading， 直接在`m-page`组件里传入 `:loading=true`,会默认显示,需要页面加载完成后手动关闭
2. api调用，直接 `this.$createPageLoading().show()`
