import Vue from 'vue'
import VueRouter from 'vue-router'
import NavConfig from 'examples/router/nav.json'
import doc from '../doc.vue'
import introduction from './nav.json'

Vue.use(VueRouter)

const registerRoute = (config, prefix) => {
    let routeList = []
    let navs = []
    config.forEach(group => {
        group.list.forEach(item => {
            console.log(`${prefix}${item.path}`)
            routeList.push({
                name: item.name,
                path: item.path,
                /* beautify preserve:start */
                component: () => import(`../${prefix}${item.path}.md`),
                /* beautify preserve:end */
                meta: {
                    title: item.title || item.name,
                    description: item.description
                }
            })
        })
    })
    return { navs: config, routeList }
}
NavConfig.unshift(introduction)
const docRoute = registerRoute(NavConfig, 'docs')
docRoute.routeList.push({
    path: '/',
    redirect: '/other/introduction',
    component: doc
})
const router = new VueRouter({
    base: __dirname,
    routes: docRoute.routeList,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title
    next()
})

export const navs = docRoute.navs

export default router
