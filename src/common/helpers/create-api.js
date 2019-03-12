import { camelize } from '../lang/string'
import createAPIComponent from './create-api-component'

export default function createAPI(Vue, Component, events, single) {
  const api = createAPIComponent.apply(this, arguments)
  const name = Component.name // 组件名 m-xx
  const pureName = name.replace(/^m-/i, '') // 去掉m- 的组件名
  const createName = `$${camelize(`create-${pureName}`)}` // 加上create的驼峰命名
  Vue.prototype[createName] = api.create
  return api
}
