import Vue from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'

import Dialog from '@/components/dialog/dialog'
import DialogApi from '@/components/dialog'

describe('Dialog', () => {

    describe('dialog.vue', () => {
        let cmp
        let spy
        const localVue = createLocalVue()
        beforeEach(() => {
            cmp = mount(Dialog, {
                propsData: {

                },
                localVue
            })
            // spy = jest.spyOn(cmp.vm, 'show')
        })

        afterEach(() => {
            // spy.mockReset()
            // spy.mockRestore()
        })

        it('dialog 渲染', () => {
            cmp.setProps({
                title: '渲染测试',
                type: 'confirm',
                confirmBtn: '确定按钮',
                cancelBtn: '取消按钮'
            })
            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()

            cmp.setMethods({ confirm: confirmEvent })
            cmp.setMethods({ cancel: cancelEvent })
            cmp.vm.show()
            // console.log(cmp.html())
            expect(cmp.vm.isVisible).toBe(true)
            expect(cmp.find('.mui-dialog__title').text()).toBe('渲染测试')
            expect(cmp.findAll('.mui-dialog__btn').length).toBe(2)
            expect(cmp.find('.mui-dialog__btn_primary').text()).toBe('确定按钮')
            expect(cmp.find('.mui-dialog__btn_default').text()).toBe('取消按钮')
            cmp.find('.mui-dialog__btn_primary').trigger('click')
            expect(confirmEvent).toBeCalled()
            cmp.find('.mui-dialog__btn_default').trigger('click')
            expect(cancelEvent).toBeCalled()
        })

        it('alert 按钮只有1个;不传title,就不显示标题', () => {
            cmp.setProps({
                type: 'alert'
            })
            expect(cmp.findAll('.mui-dialog__btn').length).toBe(1)
            expect(cmp.find('.mui-dialog__title').exists()).toBe(false)
            //  cmp.setProps({
            //     title: '渲染测试',
            //     type: 'confirm',
            //     confirmBtn: '确定按钮',
            //     cancelBtn: '取消按钮'
            // })
        })
        it('点击按钮默认关闭弹窗', () => {
            cmp.setProps({
                type: 'confirm'
            })
            const confirmEvent = jest.spyOn(cmp.vm, 'confirm')
            const cancelEvent = jest.spyOn(cmp.vm, 'cancel')
            // cmp.update()
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.find('.mui-dialog__btn_primary').trigger('click')
            expect(cmp.vm.isVisible).toBe(false)
            expect(confirmEvent).toBeCalled()
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.find('.mui-dialog__btn_default').trigger('click')
            expect(cmp.vm.isVisible).toBe(false)
            expect(cancelEvent).toBeCalled()
        })

        it('点击按钮不关闭弹窗', () => {
            cmp.setProps({
                closeOnConfirm: false
            })
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.find('.mui-dialog__btn_primary').trigger('click')
            expect(cmp.vm.isVisible).toBe(true)
            expect(cmp.emitted().confirm).toBeTruthy()
        })
        // ref = "dialog4"
        // title = "title4"
        // type = "confirm"
        // @confirm = "dialog4Confirm"
        // @cancel = "dialog4Cancel"
        // v - transfer - dom
    })
    describe('dialog API', () => {
        let cmp
        let ins
        const localVue = createLocalVue()
        localVue.use(DialogApi)
        beforeEach(() => {})
        afterEach(() => {
            cmp.destroy()
            ins = null
        })

        it('$createDialog.confirm', () => {
            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()
            cmp = mount({
                template: '<div>xx</div>',
                methods: {
                    show() {
                        ins = this.$createDialog({
                            type: 'confirm',
                            content: 'createDialog',
                            onConfirm: confirmEvent,
                            onCancel: cancelEvent
                        }).show()
                    }
                }
            }, {
                localVue
            })
            // 确定按钮
            cmp.vm.show()
            expect(ins.isVisible).toBe(true)
            expect(ins.$el.querySelectorAll('.mui-dialog__btn').length).toBe(2)
            expect(ins.$el.parentElement).toEqual(document.body)
            expect(ins.$el.querySelector('.mui-dialog__bd').textContent).toContain('createDialog')
            ins.$el.querySelector('.mui-dialog__btn_primary').click()
            expect(ins.isVisible).toBe(false)
            expect(confirmEvent).toBeCalled()
            // 取消按钮
            cmp.vm.show()
            expect(ins.isVisible).toBe(true)
            ins.$el.querySelector('.mui-dialog__btn_default').click()
            expect(ins.isVisible).toBe(false)
            expect(cancelEvent).toBeCalled()
        })

        it('$createDialog.alert', () => {
            const confirmEvent = jest.fn()
            cmp = mount({
                template: '<div>xx</div>',
                methods: {
                    show() {
                        ins = this.$createDialog({
                            content: 'createDialog',
                            onConfirm: confirmEvent
                        }).show()
                    }
                }
            }, {
                localVue
            })
            cmp.vm.show()
            expect(ins.isVisible).toBe(true)
            expect(ins.$el.querySelectorAll('.mui-dialog__btn').length).toBe(1)
            expect(ins.$el.parentElement).toEqual(document.body)
            expect(ins.$el.querySelector('.mui-dialog__bd').textContent).toContain('createDialog')
            ins.$el.querySelector('.mui-dialog__btn_primary').click()
            expect(ins.isVisible).toBe(false)
            expect(confirmEvent).toBeCalled()
        })

    })
})
