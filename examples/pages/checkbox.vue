<template>
    <m-page>
      <m-header slot="header"></m-header>
      <demo-content>
        <h5>基本用法</h5>
        <m-checkbox :checked="checked1" @change="handleChange">普通复选框{{checked1}}</m-checkbox>
        <m-checkbox v-model="checked4">v-model复选框{{checked4}}</m-checkbox>
        <br>
        <h5>禁用状态</h5>
        <m-checkbox v-model="checked2" disabled>复选框</m-checkbox>

        <m-checkbox-group v-model="checkList1" disabled>
        <m-checkbox value="11">复选框1</m-checkbox>
        <m-checkbox value="22">复选框2</m-checkbox>
        </m-checkbox-group>
        <br>
        <h5>自定义图标</h5>
        <m-checkbox v-model="checked3">
          <template v-slot:icon="{checked}">
            <m-icon :type="checked ? 'mine1_sel' : 'mine1_nor'" />
          </template>
          复选框
        </m-checkbox>
        <br>
        <h5>全选/取消/反选</h5>
        <m-checkbox-group v-model="checkList2" ref="checkboxGroup">
            <template v-for="option in ckeckOptions">
              <m-checkbox :value="option.value" :key="option.value" :disabled="option.disabled">{{option.label}}</m-checkbox>
            </template>
        </m-checkbox-group>
        <p style="font-size: 18px; margin: 20px;">选择的value：{{checkList2}}</p>
        <m-button @click="checkAll(true)" size="xsmall">全选</m-button>
        <m-button @click="checkAll(false)" size="xsmall">取消</m-button>
        <m-button @click="toggleAll" size="xsmall">反选</m-button>
        </demo-content>
    </m-page>
</template>
<script>
export default {
  name: 'demo-checkbox-group',
  data() {
    return {
      checked1: false,
      checked2: true,
      checked3: true,
      checked4: true,
      ckeckOptions: [
        { label: '张良', value: '1', disabled: true },
        { label: '妲己', value: '2' },
        { label: '小乔', value: '3'},
        { label: '张飞', value: '4' },
        { label: '吕布', value: '5' },
        { label: '安其拉', value: '6' },
        { label: '大乔', value: '7' },
        { label: '鬼谷子', value: '8' }
      ],
      checkList1: ['11'],
      checkList2: [],
      checkedALl: false
    }
  },
  watch: {
    checkedALl: {
      handler: function(val, oldVal) { 
        this.select(val)
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.checkList2 = ['2']
    }, 1000)
  },
  methods: {
    checkAll(newVal) {
      this.$refs.checkboxGroup.toggleAll(newVal)
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll()
    },
    handleChange(e) {
      this.checked1 = e
    },
    handleChangeList(e) {
      this.checkList2 = e
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrap .mui-checkbox {
  margin: 0 0 6px 20px;
}
</style>
