<template>
    <m-page :isFixed="isFixed">
        <m-header slot="header"></m-header>
        <demo-content ref="demos">
          <m-button @click="changeLayout">切换布局</m-button>
            <m-cell-group>
                <m-input
                    title="disabled"
                    v-model="testValue3"></m-input>
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
                <m-input title="文本只读"
                    v-model="testValue2"></m-input>
                <m-input title="disabled"
                    v-model="testValue3"></m-input>
                    <m-input title="验证码"
                    placeholder="请输入验证码"
                    input-type="vcode">
                    <img slot="ft"
                        src="../assets/img/vcode.png"
                        alt=""
                        class="mui-vcode__img">
                </m-input>
                <m-input title="文本只读"
                    v-model="testValue2"></m-input>
                <m-input title="disabled"
                    v-model="testValue3"></m-input>
                <m-input title="disabled"
                    v-model="testValue3"
                    disabled></m-input>
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
                <m-input title="文本只读"
                    v-model="testValue2"></m-input>
                <m-input title="disabled"
                    v-model="testValue3"></m-input>
                    <m-input title="验证码"
                    placeholder="请输入验证码"
                    input-type="vcode">
                    <img slot="ft"
                        src="../assets/img/vcode.png"
                        alt=""
                        class="mui-vcode__img">
                </m-input>
                <m-input title="文本只读"
                    v-model="testValue2"></m-input>
            </m-cell-group>
            <m-picker ref="comPicker"
                title="Picker-数据联动"
                :data="list"></m-picker>
        </demo-content>
        <m-footer slot="bottom" :setPosition="true">
          <m-button @click="showComPicker">picker</m-button>
        </m-footer>
    </m-page>
</template>
<script>
export default {
  name: 'demo-footer',
  data() {
    return {
      isFixed: true,
      testValue0: 'testblur',
      testValue1: '123456',
      testValue2: 'readonly',
      testValue3: 'disabled',
      isTiming: false,
      picker: null,
      list: [
          ['妲己', '张良', '明世隐', '小乔', '黄忠', '甄姬']
      ]
    }
  },
  mounted() {
    this.picker = this.$createPicker({
      title: 'Picker-单列',
      data: [
          ['妲己', '张良']
      ],
      selectedIndex: [0],
      confirmTxt: '确定',
      onSelect: (selectedItem, selectedIndex) => {
          console.log(selectedItem)
      },
      onCancel: () => {
          this.$_toast('取消选择')
      }
    })
  },
  methods: {
    showPicker() {
        this.picker.show()
    },
    showComPicker() {
      this.$refs.comPicker.show()
    },
    changeLayout() {
      this.isFixed = !this.isFixed
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
