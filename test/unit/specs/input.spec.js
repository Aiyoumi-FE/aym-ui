import Vue from 'vue'
import { mount } from '@vue/test-utils'

import Input from '@/components/cell/input'
jest.useFakeTimers()

describe('Input', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(Input, {})
    jest.resetModules()
    jest.clearAllMocks()
  })
  afterEach(() => {
    cmp.destroy()
  })
  describe('属性测试', () => {
    const TITLE = 'inputTitle'
    const VALUE = 'inputValue'
    it('init', () => {
      expect(cmp.contains('input')).toBe(true)
    })

    it('title', () => {
      cmp.setProps({ title: TITLE })
      expect(cmp.find('.mui-label').text()).toContain(TITLE)
    })
    it('type', () => {
      expect(cmp.find('.mui-input').attributes().type).toBe('text')
      const typeTest = (type) => {
        cmp.setProps({ type })
        expect(cmp.find('.mui-input').attributes().type).toBe(type)

      }
      typeTest('tel')
      typeTest('text')
      typeTest('button')
      typeTest('file')
      typeTest('password')
      typeTest('number')
    })

    it('value', () => {
      expect(cmp.vm.value).toBe('')
      cmp.setProps({ value: VALUE })
      expect(cmp.vm.value).toBe(VALUE)
    })
    it('disabled', () => {
      expect(cmp.vm.disabled).toBeFalsy()
      expect(cmp.find('input').attributes()).not.toContain('disabled')
      cmp.setProps({ disabled: true })
      expect(cmp.find('input').attributes('disabled')).toBe('disabled')
    })
    it('readonly', () => {
      expect(cmp.vm.readonly).toBeFalsy()
      expect(cmp.find('input').attributes()).not.toContain('readonly')
      cmp.setProps({ readonly: true })
      expect(cmp.find('input').attributes('readonly')).toBe('readonly')
    })
    it('upAndDown', () => {
      cmp.setProps({ title: TITLE, value: VALUE, upAndDown: true })
      expect(cmp.classes()).toContain('mui-cell_autoheight')
      expect(cmp.classes()).toContain('mui-cell__input_upanddown')
    })
    it('upAndDown+vcode', () => {
      cmp.setProps({ title: TITLE, value: VALUE, inputType: 'vcode' })
      expect(cmp.find('.mui-cell__ft').text()).toContain('获取验证码')
      cmp.setProps({ upAndDown: true })
      expect(cmp.find('.mui-cell__bd').text()).toContain('获取验证码')
    })

    it('vcode', (done) => {
      cmp.setProps({ inputType: 'vcode' })
      expect(cmp.find('.mui-vcode__btn').text()).toBe('获取验证码')
      cmp.find('.mui-vcode__btn').trigger('click')
      expect(cmp.emitted('getCode')[0]).toEqual(['send'])

      cmp.setProps({ isTiming: true })
      cmp.vm.$nextTick().then(() => {
        expect(cmp.vm.$el).toMatchSnapshot('倒计时开始')
        expect(cmp.vm.currentTime).toBe(60)
        expect(cmp.find('.mui-vcode__btn').text()).toBe('60s后重发')
        jest.advanceTimersByTime(60000)
      }).then(() => {
        expect(cmp.vm.$el).toMatchSnapshot('倒计时到0')
        expect(cmp.vm.currentTime).toBe(0)
        expect(cmp.find('.mui-vcode__btn').text()).toBe('0s后重发')
        expect(cmp.emitted('getCode')[1]).toEqual(['done'])
        cmp.setProps({ isTiming: false })
      }).then(() => {
        expect(cmp.vm.$el).toMatchSnapshot('计时完毕，保持原样')
        expect(cmp.find('.mui-vcode__btn').text()).toBe('获取验证码')
        done()
      })
    })
  })



})
