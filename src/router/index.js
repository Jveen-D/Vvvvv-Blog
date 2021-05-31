import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "/@/layout/layout.vue"
const routes = [
    { path: '/', name: 'Index', redirect: '/category' },//捕获所有路由
    {
        path: '/category',
        name: 'Category',
        component: Layout,
        redirect: '/category/slug/vue3',
        children: [
            {
                path: '/category/slug/:slug',
                name: 'category-slug',
                component: () => import('/@/pages/categoryLists/categoryLists.vue'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach(() => {
})
router.isReady().then(() => {
    console.log('Welcome Vvvv-Blog!')
})

export default router