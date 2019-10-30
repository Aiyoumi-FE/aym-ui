<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <h4>单行</h4>
      <m-cell-group>
        <m-input v-model="inputName"
          title="小号"
          size="middle"
          clearable
          placeholder="size:middle" />
      </m-cell-group>
      <m-cell-group>
        <m-input title="姓名"
          v-model="inputName"
          clearable
          placeholder="请输入姓名"></m-input>
        <m-input v-model="inputIcon"
          title="带图标"
          placeholder="图标自己写ft">
          <img slot="ft"
              src="../assets/img/logo.png"
              alt=""
              style="width: 40px;">
          </m-input>
          <m-input v-model="inputBare"
            placeholder="什么也没有">
          </m-input>
      </m-cell-group>
      <br>
      <h4>文本域</h4>
      <m-cell-group>
        <m-input v-model="textareaVal"
          title="可以写三行"
          placeholder="超出部分会滚动"
          type="textarea"></m-input>
        <m-input v-model="textareaVal"
          placeholder="超出部分会滚动"
          type="textarea"></m-input>
      </m-cell-group>
      <br>
      <!--       <h4>上下结构</h4>
      <m-cell-group>
        <m-input title="姓名"
          v-model="upAndDownName"
          upAndDown
          clearable
          placeholder="请输入姓名"></m-input>
        <m-input title="手机号"
          v-model="upAndDownTelNum"
          @getCode="getCode"
          :isTiming="isTiming"
          input-type="vcode"
          upAndDown
          placeholder="请输入手机号"></m-input>
        <m-input title="不要按钮也可以啊"
          v-model="upAndDownCustom"
          upAndDown
          placeholder="请输入姓名">
          <div slot="ft">随便</div>
        </m-input>
      </m-cell-group> -->
      <m-cell-group>
        <m-input title="原生事件可用"
          type="tel"
          @blur="inputBlur"
          v-model="inputEventBlur"
          placeholder="请输入手机号"></m-input>
        <m-input title="最大长度6"
          v-model="inputAttrMaxlength"
          :maxlength="6"></m-input>
        <m-input title="文本只读"
          v-model="inputAttrReadonly"
          readonly></m-input>
        <m-input title="disabled"
          v-model="inputAttrDisabled"
          disabled></m-input>
        <!--       <m-input title="手机号"
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
                </m-input> -->
      </m-cell-group>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-input',
  data() {
    return {
      inputName: '',
      inputIcon: '',
      inputBare: '',
      textareaVal: '',
      upAndDownName: '',
      upAndDownTelNum: '',
      upAndDownCustom: '',
      inputEventBlur: '@blur',
      inputAttrMaxlength: 'maxlength=6',
      inputAttrReadonly: 'readonly',
      inputAttrDisabled: 'disabled',
      isTiming: false
    }
  },
  methods: {
    inputBlur() {
      // console.log('blur')
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
