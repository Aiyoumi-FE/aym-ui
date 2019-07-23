export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent
export const isAndroid = UA.indexOf('Android') > -1 || UA.indexOf('Adr') > -1
export const isIOS = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
export const isWX = UA.indexOf('MicroMessenger') > -1