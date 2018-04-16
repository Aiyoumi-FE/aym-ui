import Vue from 'vue'
import { mount } from '@vue/test-utils'

import Button from '@/components/button/button'

describe('Button', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Button)
    })
    afterEach(() => {
        cmp.destroy()
    })
    it('renders a button', () => {
        expect(cmp.contains('button')).toBe(true)
    })
    it('属性disabled', () => {
        cmp.setProps({ disabled: true })
        expect(cmp.attributes().disabled).toBe('disabled')
        expect(cmp.classes()).toContain('disabled')
    })

    function testAttr(type) {
        let attrKey = Object.keys(type)[0]
        it(`属性${JSON.stringify(type)}包含mui-btn_${type[attrKey]}`, () => {
            cmp.setProps(type)
            expect(cmp.classes()).toContain(`mui-btn_${type[attrKey]}`)
        })
    }
    testAttr({ type: 'primary' })
    testAttr({ type: 'plain' })
    testAttr({ type: 'warn' })
    testAttr({ type: 'border' })
    testAttr({ type: 'full' })
    testAttr({ size: 'large' })
    testAttr({ size: 'middle' })
    testAttr({ size: 'small' })

    it('事件调用', () => {

        const fn = jest.fn()
        cmp = mount(Button, {
            methods: {
                handleClick: fn
            }
        })
        cmp.trigger('click')
        expect(fn).toBeCalled()
    })
})
