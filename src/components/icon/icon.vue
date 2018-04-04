<template>
    <svg class="mui-icon"
        aria-hidden="true">
        <use :xlink:href="'#icon-'+type"></use>
    </svg>
</template>
<script>
import '../../libs/iconfont.js'
export default {
    name: 'm-icon',
    props: {
        type: {
            type: String,
            default: ''
        }
    },
    computed: {}
}
</script>
<style lang="scss">
@import "src/styles/base/fn";
.mui-icon {
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em;
    height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
             normalize.css 中也包含这行 */
    overflow: hidden;
    font-size: px2rem(44);
}
</style>
