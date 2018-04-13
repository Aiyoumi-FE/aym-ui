import Vue from 'vue'
import { mount, shallow } from '@vue/test-utils'

import Progress from '@/components/progress/progress'

describe('Progress', () => {
    describe('step', () => {
        let cmp

        beforeEach(() => {
            cmp = mount(Progress)
        })
        afterEach(() => {
            cmp.destroy()
        })
        it('type:step', () => {
            expect(cmp.classes()).toContain('mui-progress_step')

        })
        // cmp.setProps({ type: 'step' })
        it('stepText：显示文本', () => {
            expect(cmp.text()).toContain('012')
            cmp.setProps({ stepText: ['a1', 'a2', 'a3'] })
            expect(cmp.text()).toContain('a1a2a3')

        })
        it('curStep：当前所在步数', () => {
            cmp.setProps({ stepText: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'] })
            const AllLi = cmp.findAll('li')
            expect(AllLi.at(0).classes()).toContain('cur')

            const activeLi = (len) => AllLi.filter((item, index) => {
                if (index <= len) {
                    // 确保是前几个
                    expect(AllLi.at(index).classes()).toContain('cur')
                }
                return item.classes().includes('cur')
            })
            for (let i = 1; i < 6; i++) {
                cmp.setProps({ curStep: i })
                expect(activeLi(i).length).toBe(i + 1)
            }
            expect(cmp.vm.$el).toMatchSnapshot('满格')
        })
    })
    describe('timeline', () => {
        let cmp
        const timelineArr = [{
            date: '3.28',
            title: '第1步标题',
            desc: '第1步描述'
        }, {
            date: '3.29',
            title: '第2步标题',
            desc: '第2步描述'
        }]
        beforeEach(() => {
            cmp = mount(Progress, {
                propsData: {
                    type: 'timeline',
                    stepText: timelineArr
                }
            })
        })
        afterEach(() => {
            cmp.destroy()
        })
        it('type:timeline', () => {
            expect(cmp.classes()).toContain('mui-progress_timeline')

        })

        it('默认不显示一半线', () => {

            const AllLi = cmp.findAll('li')
            expect(AllLi.at(0).classes()).toContain('none-halfline')
            cmp.setProps({ // ???? curStep 和type 的位置先后居然会影响循环渲染？？？？
                // curStep 在下的话，样式会在下一轮作渲染（nextTick）,抽空查一下test-util, 和初始化prop也有关系
                curStep: 1

            })
            expect(AllLi.at(1).classes()).toContain('none-halfline')
            expect(cmp.vm.$el).toMatchSnapshot('不显示那半条线')

        })
        it('显示那半条线', () => {
            cmp.setProps({
                isHalfLine: false
            })
            // return cmp.vm.$nextTick(() => { // ???????
            expect(cmp.findAll('li').at(0).classes()).not.toContain('none-halfline')
            expect(cmp.vm.$el).toMatchSnapshot('显示那半条线')

            //  })
        })
    })
})
