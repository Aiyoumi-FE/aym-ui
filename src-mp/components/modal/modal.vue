<template>
    <!--     <m-popup type="modal"
        :isShow="isVisible"
        @mask-click="maskClick">
        <div class="mui-modal-panel">
            <slot>
                <slot name="header">
                    <m-header v-if="title"
                        :title="title"
                        type="modal"
                        isLine
                        @click="close"></m-header>
                </slot>
                <div class="mui-modal__content">
                    <slot name="content"></slot>
                </div>
                <slot name="footer"></slot>
            </slot>
        </div>
    </m-popup> -->
    <div class="mui-popup"
        :class="[{hide:!isVisible}]">
        <div class="mui-mask"
            :class="{hide:!mask}"
            @click="maskClick"
            :style="transparent? transparentStyle :''"></div>
        <div class="mui-popup__container">
            <div class="mui-popup__content">
                <slot>
                    {{content}}
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import mPopup from '../popup/popup'
import mHeader from '../header/header'
import apiMixin from '../../common/mixins/api'
const EVENT_CLOSE = 'close'
export default {
    name: 'm-modal',
    mixins: [apiMixin],
    extends: mPopup,
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        isShow: {
            type: Boolean,
            default: false
        }
    },
    components: {
        mPopup,
        mHeader
    },
    mounted() {},
    methods: {
        close() {
            this.isVisible = false
            this.$emit(EVENT_CLOSE)
        }
    }
}
</script>
