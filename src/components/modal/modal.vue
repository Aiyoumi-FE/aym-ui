<template>
    <transition name="fade">
        <m-popup type="modal"
            @maskClick="maskClick"
            v-show="isVisible">
            <transition name="slide-up">
                <div class="mui-modal-panel"
                    v-show="isVisible">
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
                            <div v-html="content"></div>
                        </div>
                        <slot name="footer"></slot>
                    </slot>
                </div>
            </transition>
        </m-popup>
    </transition>
</template>
<script>
import mPopup from '../popup/popup'
import mHeader from '../header/header'
import apiMixin from '../../common/mixins/api'
const EVENT_CLOSE = 'close'
export default {
    name: 'm-modal',
    mixins: [apiMixin],
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
