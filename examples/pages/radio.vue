<template>
  <m-page>
    <m-header slot="header"></m-header>
    <demo-content>
      <h5>选中的是 {{labelIndex}}</h5>
      <m-radio-group v-model="labelIndex"
        class="radio-group">
        <m-radio v-for="(option,index) in radioOptions"
          :key="option.label"
          class="radio-item"
          v-slot="{ isActive }">
          <label class="radio-item__label"
            :class="{'radio-item__label_active':isActive}">
            {{option.label}}
          </label>
        </m-radio>
      </m-radio-group>
      <br>
      <br>
      <h5>选中的是 {{activeIndex}}</h5>
      <m-radio-group v-model="activeIndex">
        <m-cell-group>
          <m-radio v-for="option in radioOptions"
            :key="option.label"
            v-slot="{ isActive }">
            <m-cell :title="option.label">
              <m-icon class="icon__check"
                v-if="isActive"
                slot="value"
                type="check"></m-icon>
            </m-cell>
          </m-radio>
        </m-cell-group>
      </m-radio-group>
      <br>
      <h5>多行选中的是 {{activeIndex}}</h5>
      <m-radio-group v-model="activeIndex">
        <m-cell-group>
          <m-radio v-for="option in radioOptions"
            :key="option.label"
            :disabled="option.isDisable"
            v-slot="{ isActive }">
            <m-cell :title="option.label"
              :subTitle="option.subTitle">
              <m-icon class="icon__check"
                v-if="isActive"
                slot="value"
                type="check"></m-icon>
            </m-cell>
          </m-radio>
        </m-cell-group>
      </m-radio-group>
    </demo-content>
  </m-page>
</template>
<script>
export default {
  name: 'demo-radio',
  data() {
    return {
      labelIndex: 1,
      activeIndex: 1,
      radioOptions: [
        { label: '张良', value: '1', subTitle: '人和神说话，是信仰', isDisable: true },
        { label: '妲己', value: '2', subTitle: '一直爱主人，因为被设定成这样' },
        { label: '小乔', value: '3', subTitle: '要努力变强' }
      ]
    }
  }
}
</script>
<style lang="scss"
  scoped>
.radio-group {
  background-color: #fff;
  padding: px2rem(40);
}

.radio-item {
  display: inline-block;
}

.radio-item__label {
  font-size: px2rem(28);
  padding: px2rem(10) px2rem(40);
  color: $colorTextMain;
  background-color: $colorBg;
  border-radius: px2rem(12);
  margin-right: px2rem(20);

  &.radio-item__label_active {
    // color: $colorTextImportant;
    background-color: $colorPrimary;
  }
}

.icon__check {
  // font-size: 16px;
  // color: $tipsColor;
}
</style>
