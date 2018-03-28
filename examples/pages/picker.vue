<template>
    <m-page>
        <m-header slot="header"></m-header>
        <demo-content>
            <h5>api调用</h5>
            <m-cell-group>
                <m-cell isLink
                    title="单列选择"
                    :value="pickerText"
                    @click="showPicker"></m-cell>
                <m-cell isLink
                    title="多列选择"
                    :value="mutiPickerText"
                    @click="showMutiPicker"></m-cell>
                <m-cell isLink
                    title="多列联动选择"
                    :value="linkagePickerText"
                    @click="showLinkagePicker"></m-cell>
            </m-cell-group>
            <br>
            <h5>组件调用</h5>
            <m-cell-group>
                <m-cell isLink
                    title="组件调用"
                    :value="comPickerText"
                    @click="showComPicker"></m-cell>
                <m-picker :isShow='isShow'
                    ref="comPicker"
                    title="Picker-数据联动"
                    :data="comPickerData"
                    :selectedIndex="comPickerIndex"
                    @select="comPickerSelect"
                    @change="comPickerChange"
                    @cancel="hideComPicker"></m-picker>
            </m-cell-group>
        </demo-content>
    </m-page>
</template>
<script>
import { data1, data2, data3 } from '../data/picker'
import { provinceList, cityList, areaList } from '../data/area'
export default {
    name: 'demo-picker',
    data() {
        return {
            picker: null,
            pickerText: '请选择',
            mutiPicker: null,
            mutiPickerText: '请选择',
            linkagePicker: null,
            linkagePickerText: '请选择',
            tempIndex: [0, 0, 0],
            comPickerIndex: [3, 0, 0],
            isShow: false,
            comPickerText: '请选择'
        }
    },
    watch: {
        linkageData() {
            this.linkagePicker.refresh()
        }
    },
    computed: {
        linkageData() {
            const provinces = provinceList
            const cities = cityList[provinces[this.tempIndex[0]].value]
            const areas = areaList[cities[this.tempIndex[1]].value]
            return [provinces, cities, areas]
        },
        comPickerData() {
            const provinces = provinceList
            const cities = cityList[provinces[this.comPickerIndex[0]].value]
            const areas = areaList[cities[this.comPickerIndex[1]].value]
            return [provinces, cities, areas]
        }
    },
    mounted() {
        this.picker = this.$createPicker({
            title: 'Picker-单列',
            data: [data1],
            selectedIndex: [1],
            cancelTxt: 'xx',
            confirmTxt: '确定',
            onSelect: (selectedItem, selectedIndex) => {
                this.pickerText = this.showText(selectedItem)
            },
            onCancel: () => {
                // this.$_toast({
                //     type: 'correct',
                //     txt: 'Clicked cancel button',
                //     time: 1000
                // })
            }
        })
        this.mutiPicker = this.$createPicker({
            title: 'Picker-多列',
            data: [data1, data2, data3],
            onSelect: (selectedItem, selectedIndex) => {
                this.mutiPickerText = this.showText(selectedItem)
            },
            onCancel: () => {
                // this.$_toast({
                //     type: 'correct',
                //     txt: 'Clicked cancel button',
                //     time: 1000
                // })
            }
        })
        this.linkagePicker = this.$createPicker({
            title: 'Picker-数据联动',
            data: this.linkageData,
            selectedIndex: this.tempIndex,
            onChange: (col, newIndex) => {
                if (newIndex !== this.tempIndex[col]) {
                    for (let j = 2; j > col; j--) {
                        this.tempIndex.splice(j, 1, 0)
                        this.linkagePicker.scrollTo(j, 0)
                    }
                    this.tempIndex.splice(col, 1, newIndex)
                    this.linkagePicker.setData(this.linkageData, this.tempIndex)
                }
            },
            onSelect: (selectedItem, selectedIndex) => {
                this.linkagePickerText = this.showText(selectedItem)
            },
            onCancel: () => {
                // this.$_toast({
                //     type: 'correct',
                //     txt: 'Clicked cancel button',
                //     time: 1000
                // })
            }
        })
    },
    methods: {
        showPicker() {
            this.picker.show()
        },
        showMutiPicker() {
            this.mutiPicker.show()
        },
        showLinkagePicker() {
            this.linkagePicker.show()
        },
        showComPicker() {
            this.$refs.comPicker.show()
            // this.isShow = true
        },
        hideComPicker() {
            // this.isShow = false
        },
        showText(arr) {
            return arr.reduce((accumulator, cur) => {
                return accumulator + cur.text
            }, '')
        },
        comPickerSelect(selectedItem, selectedIndex) {
            this.comPickerText = this.showText(selectedItem)
            this.isShow = false
        },
        comPickerChange(col, newIndex) {
            if (newIndex !== this.comPickerIndex[col]) {
                for (let j = 2; j > col; j--) {
                    this.comPickerIndex.splice(j, 1, 0)
                    this.$refs.comPicker.scrollTo(j, 0)
                }
                this.comPickerIndex.splice(col, 1, newIndex)
            }
        }

    }
}
</script>
<style lang="scss"
    scoped>
</style>
