<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <m-cell-group>
                <m-input title="姓名"
                    placeholder="请输入姓名"></m-input>
                <m-input placeholder="自定义头尾">
                    <img slot="hd"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                        alt=""
                        style="width: 20px; margin-right: 5px; display: block;">
                    <img slot="ft"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="
                        alt=""
                        style="width: 20px; margin-right: 5px; display: block;">
                </m-input>
            </m-cell-group>
            <m-cell-group>
                <m-input title="文本"
                    type="tel"
                    @blur="inputBlur"
                    v-model="testValue0"
                    placeholder="请输入手机号"></m-input>
                <m-input title="最大长度6"
                    v-model="testValue1"
                    :maxlength="6"></m-input>
                <m-input title="文本只读"
                    v-model="testValue2"
                    readonly></m-input>
                <m-input title="disabled"
                    v-model="testValue3"
                    disabled></m-input>
                <m-input title="手机号"
                    type="tel"
                    placeholder="请输入手机号码"
                    input-type="vcode"
                    :isTiming="isTiming"
                    @getCode="getCode"></m-input>
                <m-input title="手机号"
                    type="tel"
                    placeholder="请输入手机号码"
                    input-type="vcode"
                    is-disabled>
                    <button class="mui-vcode__btn"
                        slot="ft">自定义按钮</button>
                </m-input>
                <m-input title="验证码"
                    placeholder="请输入验证码"
                    input-type="vcode">
                    <img slot="ft"
                        src="../assets/img/vcode.png"
                        alt=""
                        class="mui-vcode__img">
                </m-input>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
export default {
    name: 'demo-input',
    data() {
        return {
            testValue0: 'testblur',
            testValue1: '123456',
            testValue2: 'readonly',
            testValue3: 'disabled',
            isTiming: false
        }
    },
    methods: {
        inputBlur() {
            console.log('blur')
        },
        getCode(type) {
            if (type === 'send') {
                // 异步操作后开始倒计时
                setTimeout(() => {
                    this.isTiming = true
                }, 500)
            } else {
                this.isTiming = false
            }
        }
    }
}
</script>
<style lang="scss"
    scoped>
</style>
