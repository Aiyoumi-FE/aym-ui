import { camelize } from '../lang/string'
// export default function parseRenderData(data = {}, events = {}) {
export default function parseRenderData(data = {}) {
  // events = parseEvents(events)
  // const props = { ...data }
  // const on = {}
  // for (const name in events) {
  //     if (events.hasOwnProperty(name)) {
  //         const handlerName = events[name]
  //         if (props[handlerName]) {
  //             on[name] = props[handlerName]
  //             delete props[handlerName]
  //         }
  //     }
  // }
  // return {
  //     props,
  //     on
  // }
  return separateData({ ...data })
}

function separateData(data) {
  let regEvent = /^on([A-Z]\w+)/
  let events = []
  let on = {}
  let props = {}
  for (const prop in data) {
    let result = prop.match(regEvent)
    if (result) {
      let str = result[1]
      let eventName = str.charAt(0).toLowerCase() + str.slice(1)
      on[eventName] = data[result[0]]
    } else {
      props[prop] = data[prop]
    }
  }
  return {
    props,
    on
  }
}

function parseEvents(events) {
  const parsedEvents = {}
  events.forEach((name) => {
    parsedEvents[name] = camelize(`on-${name}`)
  })
  return parsedEvents
}
