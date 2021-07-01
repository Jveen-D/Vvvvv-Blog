import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/layout.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/category',
    meta: {
      title: 'Vvvvv-Blog!'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Layout,
    meta: {
      title: 'Vvvvv-Blog!'
    },
    redirect: '/category/vue3',
    children: [
      {
        path: '/category/:slug',
        name: 'category-slug',
        component: () => import('@/pages/categoryLists/categoryLists.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail-id',
        component: () => import('@/pages/postDetail/postDetail.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    meta: {
      title: 'Vvvvv-Blog! not fount'
    },
    redirect: '/404',
    component: Layout,
    children: [
      {
        path: '/404',
        name: 'test',
        component: () => import('@/pages/notFound/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  console.log(to, from)
  if (to.fullPath === '/') {
    router.push({ name: 'Category' })
  }
  document.title = to.meta.title
})
router.isReady().then(() => {
  console.log('Welcome Vvvv-Blog!')
  console.log('%cGitHub： https://github.com/Jveen-D/Vvvvv-Blog ', 'color:orangered;font-weight:bolder')
})

export default router
