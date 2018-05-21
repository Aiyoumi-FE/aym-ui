<template>
    <div class="mui-page-loading"
        v-show="isShow">
        <div class="mui-page-loading__mask"></div>
        <div class="mui-page-loading__content">
            <i class="mui-icon-loading"></i>
            <p class="mui-page-loading__text">
                <slot>{{text}}</slot>
            </p>
        </div>
    </div>
</template>
<script>
/*
 * loading 页面级loading, 这个组件保留，方便后续扩展和更改(比如加载动画)
 */
import apiMixin from '../../common/mixins/api'
export default {
    name: 'm-page-loading',
    mixins: [apiMixin],
    props: {
        isShow: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: '加载中...'
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {},
    components: {}
}
</script>
