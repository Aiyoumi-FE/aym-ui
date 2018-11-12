export function go(url, $router) {
    if (/^javas/.test(url) || !url) return
    const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url))
    if (useRouter) {
        if (typeof url === 'object' && url.replace === true) {
            $router.replace(url)
        } else {
            url === 'BACK' ? $router.go(-1) : $router.push(url)
        }
    } else {
        window.location.href = url
    }
}
