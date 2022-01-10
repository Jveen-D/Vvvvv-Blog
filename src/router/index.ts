/*
 * @Date: 2021-06-28 10:55:47
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2022-01-10 14:02:52
 * @FilePath: /Vvvvv-Blog/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '/@/layout/layout.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/category',
    meta: {
      title: 'Vvvvv-Blog!',
    },
  },
  {
    path: '/category',
    name: 'Category',
    component: Layout,
    meta: {
      title: 'Vvvvv-Blog!',
    },
    redirect: '/category/vue3',
    children: [
      {
        path: '/friend/:slug',
        name: 'friendLink',
        component: () => import('/@/pages/friendLink/friendLink.vue'),
      },
      {
        path: '/category/:slug',
        name: 'category',
        component: () => import('/@/pages/categoryLists/categoryLists.vue'),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('/@/pages/postDetail/postDetail.vue'),
      },
      {
        path: '/utils/:slug',
        name: 'utils',
        component: () => import('/@/pages/utilsGather/utilsGather.vue'),
      },
      {
        path: '/vueUse',
        name: 'vueUseLayout',
        redirect:'/vueUse/useActiveElement',
      },
      {
        path: '/vueUse/:component',
        name: 'vueUse',
        component: () => import('/@/pages/vueUse/vueUse.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'Notfound',
    meta: {
      title: 'Vvvvv-Blog! not fount',
    },
    component: Layout,
    children: [
      {
        path: '/:catchAll(.*)',
        name: 'test',
        component: () => import('/@/pages/notFound/index.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  document.title = to.meta.title as string;
});
router.isReady().then(() => {
  console.log('Welcome Vvvv-Blog!');
  console.log(
    '%cGitHub： https://github.com/Jveen-D/Vvvvv-Blog ',
    'color:orangered;font-weight:bolder'
  );
});

export default router;
