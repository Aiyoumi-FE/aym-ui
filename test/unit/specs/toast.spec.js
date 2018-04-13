import Vue from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'

import Toast from '@/components/toast/toast'
import ToastApi from '@/components/toast'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Toast', () => {
    jest.useFakeTimers()
    describe('toast.vue', () => {
        let cmp
        let spy
        const localVue = createLocalVue()

        // localVue.use(ToastApi)
        beforeEach(() => {
            cmp = mount(Toast, {
                localVue
            })
            spy = jest.spyOn(cmp.vm, 'show')
        })

        afterEach(() => {
            spy.mockReset()
            spy.mockRestore()
        })

        it('事件调用', () => {
            cmp.setProps({
                txt: 'toast调用'
            })
            cmp.vm.show()
            expect(cmp.vm.show).toBeCalled()
            expect(spy).toBeCalled()
        })

        it('回调测试', () => {
            const callback = jest.fn()
            cmp.setProps({
                txt: 'toast调用',
                callback: callback,
                time: 3000
            })
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            expect(callback).not.toBeCalled()
            return Vue.nextTick()
                .then(() => {
                    expect(setTimeout).toHaveBeenCalledTimes(2)
                    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000)
                    jest.runAllTimers()
                    expect(cmp.vm.isVisible).toBe(false)
                    expect(callback).toBeCalled()
                })
        })

        it('文本测试 ', () => {
            cmp.setProps({
                txt: '呵呵呵'
            })
            expect(cmp.find('.mui-toast__txt').text()).toContain('呵呵呵')
        })

        it('icon测试 ', () => {
            cmp.setProps({
                txt: '呵呵呵',
                icon: 'loading'
            })
            expect(cmp.find('.mui-icon-loading').exists()).toBe(true)
        })

        describe('时间测试', () => {
            it('time为3000时，setTimeout参数为3000ms ', () => {
                cmp.setProps({
                    txt: '呵呵呵',
                    time: 3000
                })
                cmp.vm.show()
                return cmp.vm.$nextTick()
                    .then(() => {
                        jest.advanceTimersByTime(3000)
                        expect(cmp.vm.isVisible).toBe(false)
                        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000)
                    })
            })
            it('time为0时，toast需要手动关闭 ', () => {
                cmp.setProps({
                    txt: '呵呵呵',
                    time: 0
                })
                cmp.vm.show()
                return cmp.vm.$nextTick()
                    .then(() => {
                        jest.runAllTimers()
                        expect(cmp.vm.isVisible).toBe(true)
                        cmp.vm.hide() // 手动关闭
                        expect(cmp.vm.isVisible).toBe(false)
                    })
            })
        })

    })
    describe('toast api', () => {
        let cmp
        let ins
        const localVue = createLocalVue()
        // jest.useFakeTimers()
        beforeEach(() => {

            // spy = jest.spyOn(cmp.vm, 'show')
        })
        afterEach(() => {
            cmp.destroy()
            ins = null
            // spy.mockReset()
            // spy.mockRestore()
        })
        localVue.use(ToastApi)
        it('$_toast 方法', () => {
            cmp = mount({
                template: '<div>xx</div>',
                destroyed() {
                    //  console.log('销毁')
                },
                methods: {
                    showToast() {
                        ins = this.$_toast('111')
                    }
                }
            }, {
                localVue
            })
            cmp.vm.showToast()
            expect(ins.isVisible).toBeTruthy()
            expect(ins.$el.parentElement).toEqual(document.body)
            expect(ins.$el.querySelector('.mui-toast__txt').textContent).toEqual('111')
        })
        it('$_toast("xx",()=>{})', () => {
            let callback = jest.fn()
            cmp = mount({
                data() {
                    return {
                        text: 'xx'
                    }
                },
                template: '<div>{{text}}</div>',
                destroyed() {
                    // console.log('销毁222')
                },
                methods: {
                    showToast() {
                        ins = this.$_toast('111', callback)
                    }
                }
            }, {
                localVue
            })
            cmp.vm.showToast()
            expect(ins.isVisible).toBeTruthy()
            expect(ins.$el.parentElement).toEqual(document.body)
            expect(ins.$el.querySelector('.mui-toast__txt').textContent).toEqual('111')

            return cmp.vm.$nextTick(() => {
                // jest.runAllTimers()
                jest.advanceTimersByTime(2000)
                expect(ins.isVisible).toBe(false)
                expect(callback).toBeCalled()
            })
        })
    })
})
