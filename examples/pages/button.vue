<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <h5>按钮类型</h5>
      <m-button @click="fn">主要按钮</m-button>
      <m-button type="plain">次要按钮</m-button>
      <m-button type="border">border按钮</m-button>
      <h5>按钮尺寸</h5>
      <m-button>大号按钮</m-button>
      <div class="box">
        <m-button size="middle">中号按钮</m-button>
        <m-button size="small">小号按钮</m-button>
        <m-button size="xsmall">超小按钮</m-button>
      </div>
      <h5>禁用状态</h5>
      <m-button disabled
        type="plain"
        @click="fn">禁用按钮</m-button>
      <h5>按钮形状</h5>
      <div class="box">
        <m-button size="middle">圆角按钮</m-button>
        <m-button size="middle"
          :round="false">四方按钮</m-button>
      </div>
      <h5>full按钮</h5>
      <m-button type="full">full按钮</m-button>
      <m-button type="full"
        disabled>full按钮(disabled)</m-button>
      <h5>组合按钮</h5>
      <m-button-group>
        <m-button>加入购物车</m-button>
        <m-button type="warn">立即购买</m-button>
      </m-button-group>
      <m-button-group size="small">
        <m-button>a</m-button>
        <m-button type="warn">b</m-button>
        <m-button>c</m-button>
      </m-button-group>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-button',

  data() {
    return {}
  },
  methods: {
    fn() {
      this.$createToast({ txt: '点击了' }).show()
    }
  }
}
</script>
<style lang="scss"
  scoped>
h5 {
  margin-top: 20px;
}

.box {
  padding: 0 20px;
}

.mui-btn {
  margin-bottom: 20px;
}
</style>
