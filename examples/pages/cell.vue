<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <!-- size -->
      <h4>size:small</h4>
      <m-cell-group>
        <m-cell size="small"
          title="小列表"
          value="无分割" />
        <m-cell size="small"
          title="小列表"
          value="无分割" />
        <m-cell size="small"
          title="小列表"
          value="无分割" />
      </m-cell-group>
      <br>
      <h4>size:middle</h4>
      <m-cell-group>
        <m-cell is-link
          size="middle"
          title="可点击选择"
          :value="selectAndSelectName"
          placeholder="请选择"
          @click="selectAndSelect">
        </m-cell>
        <m-cell is-link
          size="middle"
          title="选择后不可修改"
          :value="selectAndDisableName"
          placeholder="请选择"
          :disabled="isDisable"
          @click="selectAndDisable">
        </m-cell>
        <m-cell size="middle">
          <img  slot="icon" src="../assets/img/logo.png" alt="" >
          <div slot="title">
            自定义
          </div>
          <m-button slot="value"
            size="small">value</m-button>
        </m-cell>
      </m-cell-group>
      <br>
      <h4>size:large</h4>
      <m-cell-group>
        <m-cell is-link
          title="主标题"
          subTitle="副标题"
          value="value"></m-cell>
        <m-cell is-link
          title="主标题+icon"
          subTitle="副标题"
          value="value">
          <img  slot="icon" src="../assets/img/logo.png" alt="" >
        </m-cell>
          <m-cell is-link
            title="详细信息"
            value="双行列表"
            subValue="描述信息">
            <img  slot="icon" src="../assets/img/logo.png" alt="" >
        </m-cell>
            <m-cell title="双行+button"
              subTitle="描述信息">
              <img  slot="icon" src="../assets/img/logo.png" alt="" >
              <a href="javascript:;" slot="value" class="btn_link">删除</a>
            </m-cell>
      </m-cell-group>
      <br>
      <h4>size:xlarge</h4>
      <m-cell-group>
        <m-cell is-link
          size="xlarge"
          title="主标题"
          subTitle="副标题"
          value="value"></m-cell>
        <m-cell is-link
          size="xlarge"
          title="主标题+icon"
          subTitle="副标题"
          value="value">
          <img  slot="icon" src="../assets/img/logo.png" alt="" >
        </m-cell>
          <m-cell is-link
            size="xlarge"
            title="详细信息"
            value="双行列表"
            subValue="描述信息">
            <img  slot="icon" src="../assets/img/logo.png" alt="" >
        </m-cell>
            <m-cell size="xlarge"
              title="双行+button"
              subTitle="描述信息">
              <img  slot="icon" src="../assets/img/logo.png" alt="" >
              <a href="javascript:;" slot="value" class="btn_link">删除</a>
            </m-cell>
      </m-cell-group>
      <br>
      <h4>标题加粗</h4>
      <m-cell-group>
        <m-cell title="标题加粗"
          value="其他功能都一样"
          titleBold></m-cell>
        <m-cell title="标题加粗"
          value="标题好粗"
          titleBold></m-cell>
      </m-cell-group>
      <br>
      <h4>自动高度</h4>
      <m-cell-group>
        <m-cell autoHeight
          title="自动高度"
          subTitle="上下padding上下padding上下padding "
          value="其他功能都一样"
          titleBold></m-cell>
        <m-cell autoHeight
          title="自动高度"
          subTitle="这种可以折行，自己伸缩。不信你看啊，如果到头了，就会向下延伸，因为高度没有固定，如果想固定，就不要autoHeight了"
          value="value"
          titleBold></m-cell>
      </m-cell-group>
      <br>
      <h4>单独的，没有group的cell</h4>
      <m-cell title="单独cell"
        subTitle="不在cell-group下"
        value="可以和其他组件组合使用"
        subValue="可以和其他组件组合使用"
        placeholder="请选择">
      </m-cell>
      <br>
      <m-cell title="单独cell"
        subTitle="不在cell-group下"
        value="单行">
      </m-cell>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-cell',
  data() {
    return {
      selectAndSelectName: '',
      selectAndDisableName: '',
      selectName: '',
      isDisable: false
    }
  },

  methods: {
    selectAndSelect() {
      this.$createActionSheet({
        data: ['a', 'b', 'c'],
        onSelect: (item, index) => {
          this.selectAndSelectName = item
        }
      }).show()
    },
    selectAndDisable() {
      this.$createActionSheet({
        data: ['a', 'b', 'c'],
        onSelect: (item, index) => {
          this.selectAndDisableName = item
          this.isDisable = true
        }
      }).show()
    },
    fnclick() {
      this.$createToast({ txt: '点击了', time: 1000 }).show()
    }
  }
}
</script>
<style lang="scss"
  scoped>
.btn_link {
  color: $colorLink;
}
</style>
