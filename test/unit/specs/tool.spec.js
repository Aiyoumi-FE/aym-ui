import Vue from 'vue'
import { mount } from '@vue/test-utils'

import { formatDate } from '@/common/lang/date'
import { camelize } from '@/common/lang/string'

describe('Tool', () => {
    // let cmp

    // beforeEach(() => {
    //     cmp = mount(Tool)
    // })
    // afterEach(() => {
    //     cmp.destroy()
    // })
    describe('日期格式化测试', () => {
        let date
        let result
        afterEach(() => {
            date = null
            result = null
        })
        it('空参数返回空字符串', () => {
            result = formatDate()
            expect(result).toBe('')
        })

        it('参数为字符串', () => {
            date = '2018-04-12'
            result = formatDate(date)
            expect(result).toBe('2018-04-12 00:00:00')
            date = '2018/04/12'
            result = formatDate(date)
            expect(result).toBe('2018-04-12 00:00:00')
        })
        it('参数为number', () => {
            date = 1523462400000
            result = formatDate(date)
            console.log(date, '-------', result)
            // expect(result).toBe('2018-04-12 00:00:00')
        })
        it('模版测试', () => {
            date = '2018-04-12 15:06:00'
            result = formatDate(date, 'YYYY-MM-DD HH:mm:ss EEE')
            expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss EE')).toBe('2018-04-12 15:06:00 周四')
            expect(formatDate(date, 'YYYY-MM-DD HH:mm:ss EEE')).toBe('2018-04-12 15:06:00 星期四')
            expect(formatDate(date, 'HH:mm:ss EEE')).toBe('15:06:00 星期四')
            expect(formatDate(date, 'hh:mm:ss EEE')).toBe('03:06:00 星期四')
            expect(formatDate(date, 'h:mm:ss EEE')).toBe('3:06:00 星期四')
            expect(formatDate(date, '第q季度')).toBe('第2季度')
        })
        it('异常测试', () => {
            date = '2018-19-12'
            result = formatDate(date)
            // console.log(result)
            expect(result).toBe('')
            date = 'abcd'
            result = formatDate(date)
            expect(result).toBe('')
        })
    })
    describe('去掉-转驼峰', () => {

        let str
        let result
        afterEach(() => {
            str = null
            result = null
        })
        it('abc-def=>abcDef', () => {
            str = 'abc-def'
            result = camelize(str)
            expect(result).toBe('abcDef')
        })
        it('abc => abc', () => {
            str = 'abc'
            result = camelize(str)
            expect(result).toBe('abc')

        })

    })


})
