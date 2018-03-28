import { createLocalVue, mount } from 'vue-test-utils'

import Picker from '@/components/picker/picker'
import PickerApi from '@/modules/picker'

import { data1, data2, data3 } from '../../../examples/data/picker'
import { provinceList, cityList, areaList } from '../../../examples/data/area'

describe('Picker', () => {

    describe('Picker.vue', () => {
        let cmp
        beforeEach(() => {
            cmp = mount(Picker, {
                propsData: {
                    isShow: false,
                    title: 'picker title',
                    // data: this.comPickerData,
                    // selectedIndex: [3, 0, 0]
                },
                data() {
                    return {
                        comPickerIndex: [0, 0, 0]
                    }
                },
                computed: {
                    comPickerData() {
                        const provinces = provinceList
                        const cities = cityList[provinces[this.comPickerIndex[0]].value]
                        const areas = areaList[cities[this.comPickerIndex[1]].value]
                        return [provinces, cities, areas]
                    }
                }
            })
        })
        it('Picker render', () => {
            cmp.setProps({
                data: cmp.vm.comPickerData,
                selectedIndex: cmp.vm.comPickerIndex
            })
            // let provinceText = provinceList.map(item => item.text).join('')
            // let cityText = cityList.map(item => item.text).join('')
            // let areasText = areaList.map(item => item.text).join('')

            let textAll = cmp.vm.comPickerData.map(item => item.map(i => i.text).join(''))
            console.log(textAll)
            let expectText = [...cmp.findAll('ul')]
            // expect(cmp.vm.comPickerData).toEqual(
            //     expect.arrayContaining(expected),
            // );

            console.log(expectText)
            // console.log(cmp.findAll('ul').at(0).text())
            // console.log(cmp.findAll('ul').at(1).text())
            // console.log(cmp.findAll('ul').at(2).text())

            // cmp = mount(Picker, {
            //     propsData: {
            //         isShow: false,
            //         title: 'picker title'
            //     },
            //     slots: {
            //         content: `<div><p>cotent</p> <p>cotent</p> <p>cotent</p> <p>cotent</p> </div> <div slot="footer">
            //       <m-button type="full"@click="hide">关闭</m-button></div>`
            //     }
            // })

        })

    })
    describe('Picker API', () => {
        let cmp
        let ins
        const localVue = createLocalVue()
        localVue.use(PickerApi)
        beforeEach(() => {})
        afterEach(() => {
            // cmp.destroy()
            ins = null
        })
        it('$creatPicker', () => {

            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()
            cmp = mount({
                template: '<div>xx</div>',
                methods: {
                    show() {
                        // ins = this.$createPicker({
                        //     title: '主标题',
                        //     content: '<div>heheda</div>'
                        // }).show()
                    }
                }
            }, {
                localVue
            })
            // cmp.vm.show()
            // expect(ins.isVisible).toBe(true)
            // expect(ins.$el.textContent).toContain('heheda')
            // ins.hide()
            // expect(ins.isVisible).toBe(false)

            // expect(ins.$el).toMatchSnapshot()
        })

    })
})
