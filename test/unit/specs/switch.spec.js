import Vue from 'vue'
import { mount } from 'vue-test-utils'

import Switch from '@/components/switch/switch'

describe('Switch', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Switch)
    })
    afterEach(() => {
        cmp.destroy()
    })
    it('default', () => {
        expect(cmp.vm.$el.querySelector('input').checked).toBe(false)

        cmp.find('input').trigger('click')

        expect(cmp.emitted('change')[0]).toEqual([true])
        expect(cmp.emitted('input')[0]).toEqual([true])
        cmp.setProps({ checked: true })
        expect(cmp.vm.$el.querySelector('input').checked).toBe(true)
        cmp.find('input').trigger('click')
        expect(cmp.emitted('change')[1]).toEqual([false])
        expect(cmp.emitted('input')[1]).toEqual([false])

    })
    it('disabled', () => {
        cmp.setProps({ checked: true })
        for (let i = 0; i < 5; i++) {
            cmp.find('input').trigger('click')
            expect(cmp.emitted('change')[i]).toEqual([false])
            expect(cmp.emitted('input')[i]).toEqual([false])
        }
        expect(cmp.vm.$el.querySelector('input').checked).toBe(true)

    })
})
