<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <h4>线框空心</h4>
      <m-tags outline>标签文字</m-tags>
      <m-tags outline
        type="warn">标签</m-tags>
      <m-tags outline
        type="success">标签</m-tags>
      <m-tags outline
        type="link">标签</m-tags>
      <m-tags outline
        type="primary">标签</m-tags>
      <br>
      <br>
      <h4>实心</h4>
      <m-tags type="primary">标签文字</m-tags>
      <m-tags type="warn">标签</m-tags>
      <m-tags type="warn">荐</m-tags>
      <m-tags type="success">标签</m-tags>
      <m-tags type="link">标签</m-tags>
      <m-tags>标签</m-tags>
      <m-tags style="background-color:#f0f">自定义颜色 #f0f</m-tags>
      <br>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-tags',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss"
  scoped>
.content-wrap {
  text-align: center;
}
</style>
