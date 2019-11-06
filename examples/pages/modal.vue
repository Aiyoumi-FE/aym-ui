<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <h5>api调用</h5>
      <m-button @click="showModal">底部弹出模态窗体</m-button>
      <br>
      <h5>组件调用</h5>
      <m-button @click="showModal2">自定义弹</m-button>
      <m-modal :isShow="modal2IsShow"
        title="呵呵"
        ref="modal2"
        @close="modal2IsShow=false"
        @maskClick="hideModal2">
        <div slot="content">
          <p>cotent</p>
          <p>cotent</p>
          <p>cotent</p>
          <p>cotent</p>
        </div>
        <div slot="footer"
          class="modal__footer">
          <m-button @click="hideModal2">关闭</m-button>
        </div>
      </m-modal>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-modal',
  data() {
    return {
      modal2IsShow: false
    }
  },
  methods: {
    showModal() {
      this.$createModal({
        title: '主标题',
        content: '<div>heheda</div>',
        onClose: () => {},
        onMaskClick(hide) {
          hide()
        }
      }).show()
    },
    showModal2() {
      this.modal2IsShow = true
      // this.$refs.modal2.show()
    },
    hideModal2() {
      this.modal2IsShow = false
      // this.$refs.modal2.hide()
    }
  }
}
</script>
<style lang="scss"
  scoped>
.modal__footer {
  margin-bottom: px2rem(16);
}
</style>
