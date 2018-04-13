import { createLocalVue, mount } from '@vue/test-utils'

import Modal from '@/components/modal/modal'
import ModalApi from '@/components/modal'

describe('Modal', () => {

    describe('Modal.vue', () => {
        let cmp
        beforeEach(() => {})
        it('modal render', () => {
            cmp = mount(Modal, {
                propsData: {
                    isShow: false,
                },
                slots: {
                    content: `<div><p>cotent</p> <p>cotent</p> <p>cotent</p> <p>cotent</p> </div> <div slot="footer">
                  <m-button type="full"@click="hide">关闭</m-button></div>`
                }
            })
            // console.log(cmp.html())

            expect(cmp.vm.isVisible).toBe(false)
            cmp.vm.show()
            expect(cmp.vm.isVisible).toBe(true)
            cmp.vm.hide()
            expect(cmp.vm.isVisible).toBe(false)

            cmp.setProps({
                isShow: true
            })
            expect(cmp.vm.isVisible).toBe(true)
            cmp.setProps({
                isShow: false
            })
            expect(cmp.vm.isVisible).toBe(false)
        })
        it('modal slots ', () => {
            cmp = mount(Modal, {
                propsData: {
                    isShow: false,
                },
                slots: {
                    content: `<div>hehe</div>`
                }
            })
            expect(cmp.html()).toContain('<div>hehe</div>')
        })

    })
    describe('Modal API', () => {
        let cmp
        let ins
        const localVue = createLocalVue()
        localVue.use(ModalApi)
        beforeEach(() => {})
        afterEach(() => {
            // cmp.destroy()
            ins = null
        })
        it('$creatModal', () => {

            const confirmEvent = jest.fn()
            const cancelEvent = jest.fn()
            cmp = mount({
                template: '<div>xx</div>',
                methods: {
                    show() {
                        ins = this.$createModal({
                            title: '主标题',
                            content: '<div>heheda</div>'
                        }).show()
                    }
                }
            }, {
                localVue
            })
            cmp.vm.show()
            expect(ins.isVisible).toBe(true)
            expect(ins.$el.textContent).toContain('heheda')
            ins.hide()
            expect(ins.isVisible).toBe(false)

            // expect(ins.$el).toMatchSnapshot()
        })

    })
})
