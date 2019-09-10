<template>
  <m-page>
    <m-header slot="header"></m-header>
    <div class="color-list">
      <table>
        <tr>
          <td>变量</td>
          <td>对应色值</td>
        </tr>
        <tr class="tr_color"
          ref="tr"
          v-for="(item,index) in list">
          <td>{{item}}</td>
          <td>
            {{plainColor[index]|toHex}}
          </td>
        </tr>
      </table>
    </div>
  </m-page>
</template>
<script>
const arr = [
  '$colorPrimary',
  '$colorTips',
  '$colorLinkDefault',
  '$colorWarn',
  '$colorTextGeneral',
  '$colorTextImportant',
  '$colorTextSecondary',
  '$colorTextLight',
  '$colorLineLight',
  '$colorBtnBg',
  '$colorBgDefault',
  '$colorTextPrice',
  '$colorTextBtn'
]
export default {
  name: 'demo-color',
  filters: {
    toHex(val) {
      if (!val) return val
      let [r, g, b] = val.match(/\d+/g).map(item => +item)
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
  },
  data() {
    return {
      list: arr,
      plainColor: []
    }
  },
  mounted() {
    this.getColor()
  },
  methods: {
    getColor() {
      const $tr = this.$refs.tr
      $tr.forEach((item, i) => {
        const color = window.getComputedStyle(item, null).getPropertyValue('color')
        this.$set(this.plainColor, i, color)
      })
    }
  }
}
</script>
<style lang="scss"
  scoped>
$colors:($colorPrimary,
$colorTips,
$colorLinkDefault,
$colorWarn,
$colorTextGeneral,
$colorTextImportant,
$colorTextSecondary,
$colorTextLight,
$colorLineLight,
$colorBtnBg,
$colorBgDefault,
$colorTextPrice,
$colorTextBtn);

$i:1;

@each $color in $colors {
  $i: $i+1;

  .tr_color:nth-child(#{$i}) {
    // tr {
    color: $color;
  }
}

.color-list table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  overflow: auto;
  font-size: 14px;
}

.color-list table th {
  font-weight: 600
}

.color-list table td,
.color-list table th {
  padding: 6px 13px;
  border: 1px solid #dfe2e5
}

.color-list table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1
}

// .primary {
//   color: $colorPrimary;
// }

// .tips {
//   color: $tipsColor;
// }
</style>
