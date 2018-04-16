 import Vue from 'vue'
 import { mount } from '@vue/test-utils'

 import Tabbar from '@/components/tabbar/tabbar'
 import TabbarItem from '@/components/tabbar/tabbar-item'

 describe('Tabbar', () => {
     let cmp
     const demo = {
         template: `
             <tabbar v-model="tabbarIndex">
                <tabbarItem>
                    <span slot="label">tab1</span>
                </tabbarItem>
                <tabbarItem>
                    <span slot="label">tab2</span>
                </tabbarItem>
                <tabbarItem>
                    <span slot="label">tab3</span>
                </tabbarItem>
             </tabbar>
          `,
         data() {
             return {
                 tabbarIndex: 0
             }
         }
     }
     beforeEach(() => {
         cmp = mount(demo, {
             components: {
                 tabbar: Tabbar,
                 tabbarItem: TabbarItem
             }
         })
     })
     afterEach(() => {
         cmp.destroy()
     })
     it('属性测试', () => {
         expect(cmp.findAll('.m-tabbar__item').length).toBe(3)
         expect(cmp.findAll('.m-tabbar__item').at(0).classes()).toContain('m-tabbar__item_on')
         expect(cmp.findAll('.m-tabbar__item').at(1).classes()).not.toContain('m-tabbar__item_on')
         expect(cmp.findAll('.m-tabbar__item').at(2).classes()).not.toContain('m-tabbar__item_on')

         cmp.setData({ tabbarIndex: 1 })
         expect(cmp.findAll('.m-tabbar__item').at(1).classes()).toContain('m-tabbar__item_on')
         expect(cmp.findAll('.m-tabbar__item_on').length).toBe(1)

         cmp.setData({ tabbarIndex: 2 })
         expect(cmp.findAll('.m-tabbar__item').at(2).classes()).toContain('m-tabbar__item_on')
         expect(cmp.findAll('.m-tabbar__item_on').length).toBe(1)

         // cmp.setData({ tabbarIndex: 3 })
         // expect(cmp.findAll('.m-tabbar__item_on').length).toBe(0)

     })
     it('event', () => {
         const clickTest = (i) => {
             cmp.findAll('.m-tabbar__item').at(i).trigger('click')
             expect(cmp.findAll('.m-tabbar__item').at(i).classes()).toContain('m-tabbar__item_on')
             expect(cmp.findAll('.m-tabbar__item_on').length).toBe(1)
         }
         // clickTest(0)
         expect(cmp.findAll('.m-tabbar__item').at(0).classes()).toContain('m-tabbar__item_on')
         clickTest(1)
         clickTest(2)

     })


 })
