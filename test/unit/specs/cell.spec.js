import Vue from 'vue'
import { mount } from '@vue/test-utils'

import Cell from '@/components/cell/cell'
// import { go } from 'src/libs/router'
//
describe('Cell', () => {
  let cmp
  const TITLE = 'cellTitle'
  const SUB_TITLE = 'cellSubTitle'
  const VALUE = 'cellValue'
  const SUB_VALUE = 'cellSubValue'
  const PLACEHOLDER = '请选择'
  const LINK_URL = 'https:www.aiyoumi.com'
  beforeEach(() => {
    cmp = mount(Cell, {})
    // jest.resetModules()
    // jest.clearAllMocks()
  })
  afterEach(() => {
    cmp.destroy()
  })

  describe('属性测试', () => {

    it('cell title,默认单行', () => {
      cmp.setProps({ title: TITLE })
      expect(cmp.find('.mui-cell__bd').text()).toContain(TITLE)
      expect(cmp.contains('.mui-cell_multiline')).toBe(false)
      expect(cmp.vm.$el).toMatchSnapshot()
    })
    it('cell subTitle', () => {
      cmp.setProps({ title: TITLE, subTitle: SUB_TITLE })
      expect(cmp.find('.mui-cell__bd_title').text()).toContain(TITLE)
      expect(cmp.find('.mui-cell__bd_subtitle').text()).toContain(SUB_TITLE)
      expect(cmp.contains('.mui-cell_multiline')).toBe(true)
      expect(cmp.vm.$el).toMatchSnapshot()
    })
    it('cell value', () => {
      cmp.setProps({ value: VALUE })
      expect(cmp.find('.mui-cell__ft').text()).toContain(VALUE)
      expect(cmp.contains('.mui-cell_multiline')).toBe(false)
      expect(cmp.vm.$el).toMatchSnapshot()
    })
    it('cell subValue', () => {
      cmp.setProps({ value: VALUE, subValue: SUB_VALUE })
      expect(cmp.find('.mui-cell__ft_value').text()).toContain(VALUE)
      expect(cmp.find('.mui-cell__ft_subvalue').text()).toContain(SUB_VALUE)
      expect(cmp.contains('.mui-cell_multiline')).toBe(true)
      expect(cmp.vm.$el).toMatchSnapshot()
    })
    it('cell placeholder', () => {
      cmp.setProps({ placeholder: PLACEHOLDER })
      expect(cmp.contains('.mui-cell__ft_placeholder')).toBe(true)
      cmp.setProps({ value: VALUE })
      expect(cmp.contains('.mui-cell__ft_placeholder')).toBe(false)
    })
    it('cell isLink', () => {
      expect(cmp.classes()).not.toContain('mui-cell_access')
      cmp.setProps({ isLink: true })
      expect(cmp.classes()).toContain('mui-cell_access')
    })
    it('cell link', () => {
      expect(cmp.classes()).not.toContain('mui-cell_access')
      cmp.setProps({ link: LINK_URL })
      expect(cmp.classes()).toContain('mui-cell_access')
    })

    it('cell linkEvent', () => {
      const clickEvent = jest.fn()

      cmp = mount(Cell, {
        methods: {
          handleClick: clickEvent // ???  setMethods 不行
        }
      })

      // 测试链接跳转
      cmp.setProps({ link: LINK_URL })
      expect(cmp.emitted('click')).toBeFalsy()

      cmp.trigger('click')
      expect(clickEvent).toBeCalled()
    })
    it('cell autoHeight', () => {
      expect(cmp.classes()).not.toContain('mui-cell_autoheight')
      cmp.setProps({ title: TITLE, value: VALUE, autoHeight: true })
      expect(cmp.classes()).toContain('mui-cell_autoheight')
      expect(cmp.vm.$el).toMatchSnapshot()
    })

    xit('isSelect', () => {
      expect(cmp.classes()).not.toContain('select')
      cmp.setProps({ isSelect: true })
      expect(cmp.classes()).toContain('select')
    })
    xit('isSwitch', () => {
      expect(cmp.classes()).not.toContain('mui-cell_switch')
      cmp.setProps({ isSwitch: true })
      expect(cmp.classes()).toContain('mui-cell_switch')
    })
    it('cell event', () => {
      cmp.trigger('click')
      expect(cmp.emitted('click')).toBeTruthy()

    })
    it('cell disabled event', () => {
      cmp.setProps({ disabled: true })
      cmp.trigger('click')
      expect(cmp.emitted('click')).toBeFalsy()

    })
    xit('组合', () => {
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
