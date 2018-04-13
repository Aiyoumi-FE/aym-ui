import { createLocalVue, mount } from '@vue/test-utils'
'

import Actionsheet from '@/components/actionsheet/actionsheet'
import ActionsheetApi from '@/components/actionsheet'

describe('Actionsheet', () => {

    describe('Actionsheet.vue', () => {
        let cmp
        beforeEach(() => {
            cmp = mount(Actionsheet, {
                propsData: {
                    data: ['aaa', 'bbb', 'ccc']
                }
            })
        })
        it('actionsheet 选中参数', () => {
            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()

            cmp.setMethods({ itemClick: confirmEvent })
            cmp.setMethods({ cancel: cancelEvent })

            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.findAll('.mui-actionsheet__cell').at(0).trigger('click')
            expect(confirmEvent).toBeCalledWith('aaa', 0)
            cmp.findAll('.mui-actionsheet__cell').at(1).trigger('click')
            expect(confirmEvent).toBeCalledWith('bbb', 1)
            cmp.findAll('.mui-actionsheet__cell').at(2).trigger('click')
            expect(confirmEvent).toBeCalledWith('ccc', 2)
            cmp.find('.mui-actionsheet_default').trigger('click')
            expect(cancelEvent).toBeCalled()
            // expect(cmp.emitted().select).toBeTruthy()
        })

        it('actionsheet 事件', () => {
            const confirmEvent = jest.spyOn(cmp.vm, 'itemClick')
            const cancelEvent = jest.spyOn(cmp.vm, 'cancel')
            cmp.update()
            // 选中
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.findAll('.mui-actionsheet__cell').at(0).trigger('click')
            expect(confirmEvent).toBeCalledWith('aaa', 0)
            expect(cmp.vm.isVisible).toBe(false)
            // 取消
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.find('.mui-actionsheet_default').trigger('click')
            expect(cmp.vm.isVisible).toBe(false)

        })

    })
    describe('Actionsheet API', () => {
        let cmp
        let ins
        const localVue = createLocalVue()
        localVue.use(ActionsheetApi)
        beforeEach(() => {})
        afterEach(() => {
            cmp.destroy()
            ins = null
        })
        it('$creatActionSheet', () => {
            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()
            cmp = mount({
                template: '<div>xx</div>',
                methods: {
                    show() {
                        ins = this.$createActionSheet({
                            data: ['本科', '专科', '研究生', '博士'],
                            onSelect: confirmEvent
                        }).show()
                    }
                }
            }, {
                localVue
            })
            cmp.vm.show()
            expect(ins.isVisible).toBe(true)
            expect(ins.$el.textContent).toContain('本科专科研究生博士 取消')
            expect(ins.$el).toMatchSnapshot()
            ins.$el.querySelector('.mui-actionsheet__cell').click()
            expect(confirmEvent).toBeCalledWith('本科', 0)
            expect(ins.isVisible).toBe(false)

        })

    })
})
