
## loading

### 代码示例

```html
<template>
    <m-page :loading="loading">
        <m-header slot="header"></m-header>
        <demo-content>
            <m-button @click="showPageLoading">显示loading</m-button>
        </demo-content>
    </m-page>
</template>

```
```javascript
export default {
    name: 'demo-loading',
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    },
    methods: {
        showPageLoading() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
            }, 2000)
        }
    }
}
```

### 使用说明

1. 页面组件loading， 直接在`m-page`组件里传入 `:loading=true`,会默认显示,需要页面加载完成后手动关闭
2. api调用，直接 `this.$createPageLoading().show()`
