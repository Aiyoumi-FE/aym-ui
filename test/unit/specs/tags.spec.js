import Vue from 'vue'
import { mount } from '@vue/test-utils'

import Tags from '@/components/tags/tags'

describe('Tags', () => {
    let cmp

    beforeEach(() => {
        cmp = mount(Tags)
    })
    afterEach(() => {
        cmp.destroy()
    })
    it('type bg', () => {
        expect(cmp.vm.type).toBe('bg')
        expect(cmp.classes()).toContain('mui-tags_bg')
        const bgColorTest = (bgColor) => {
            cmp.setProps({ bgColor })
            expect(cmp.classes()).toContain('mui-tags_' + bgColor)
        }
        bgColorTest('orange')
        bgColorTest('red')
        bgColorTest('yellow')
        bgColorTest('linear-blue')
        bgColorTest('linear-red')
    })
    it('type border', () => {
        expect(cmp.vm.type).toBe('bg')
        cmp.setProps({ type: 'border' })
        expect(cmp.vm.type).toBe('border')
        expect(cmp.classes()).toContain('mui-tags_border')

    })

})
