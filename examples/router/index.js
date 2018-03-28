import Vue from 'vue'
import VueRouter from 'vue-router'
import NavConfig from './nav.json'
import demo from '../demo.vue'

Vue.use(VueRouter)
const registerRoute = (config) => {
    let route = []
    config.map(nav =>
        nav.list.map(page =>
            route.push({
                name: page.name,
                path: page.path,
                component: (resolve) => require([`../pages${page.path}`], resolve),
                meta: {
                    title: page.title || page.name,
                    description: page.description
                }
            })
        )
    )

    return { route, navs: config }
}

const route = registerRoute(NavConfig)

route.route.push({
    path: '/',
    component: demo
}, {
    path: '*',
    component: demo
})

const router = new VueRouter({
    base: __dirname,
    routes: route.route,
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || document.title
    next()
})

export const navs = route.navs

export default router
