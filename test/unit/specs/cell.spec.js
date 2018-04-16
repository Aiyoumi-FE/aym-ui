import Vue from 'vue'
import { mount } from '@vue/test-utils'

import Cell from '@/components/cell/cell'
// import { go } from 'src/libs/router'
describe('Cell', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Cell, {})
        // jest.resetModules()
        // jest.clearAllMocks()
    })
    afterEach(() => {
        cmp.destroy()
    })

    describe('属性测试', () => {
        const TITLE = 'cellTitle'
        const VALUE = 'cellValue'
        const LINK_URL = 'https:www.aiyoumi.com'
        it('cell title', () => {
            cmp.setProps({ title: TITLE })
            expect(cmp.find('.mui-cell__bd').text()).toContain(TITLE)

        })
        it('cell value', () => {
            cmp.setProps({ value: VALUE })
            expect(cmp.find('.mui-cell__ft').text()).toContain(VALUE)
        })
        it('cell isLink', () => {
            const clickEvent = jest.fn()

            cmp = mount(Cell, {
                methods: {
                    handleClick: clickEvent // ???  setMethods 不行
                }
            })
            expect(cmp.classes()).not.toContain('mui-cell_access')
            cmp.setProps({ isLink: true })
            expect(cmp.classes()).toContain('mui-cell_access')

            // 测试链接跳转
            cmp.setProps({ link: LINK_URL })
            expect(cmp.emitted('click')).toBeFalsy()

            cmp.trigger('click')
            expect(clickEvent).toBeCalled()
        })
        it('isSelect', () => {
            expect(cmp.classes()).not.toContain('select')
            cmp.setProps({ isSelect: true })
            expect(cmp.classes()).toContain('select')
        })
        it('isSwitch', () => {
            expect(cmp.classes()).not.toContain('mui-cell_switch')
            cmp.setProps({ isSwitch: true })
            expect(cmp.classes()).toContain('mui-cell_switch')
        })
        it('event', () => {
            cmp.trigger('click')
            expect(cmp.emitted('click')).toBeTruthy()
        })
        it('组合', () => {
            cmp.setProps({
                title: TITLE,
                value: VALUE,
                isLink: true,
                isSelect: true
            })
            expect(cmp.find('.mui-cell__bd').text()).toContain(TITLE)
            expect(cmp.find('.mui-cell__ft').text()).toContain(VALUE)
            expect(cmp.classes()).toContain('mui-cell_access')
            expect(cmp.classes()).toContain('select')
            expect(cmp.vm.$el).toMatchSnapshot()
        })
    })

})
