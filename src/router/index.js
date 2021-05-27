import { createRouter, createWebHashHistory } from "vue-router"
import Index from "/@/pages/index.vue"

const routes = [
    { path: '/:pathMatch(.*)*', name: '', component: Index },//捕获所有路由
    { path: '/Index', name: 'Index', component: Index }
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