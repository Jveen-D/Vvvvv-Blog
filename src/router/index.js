import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/layout.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    redirect: "/category",
    meta: {
      title: "Vvvvv-Blog!",
    },
  },
  {
    path: "/category",
    name: "Category",
    component: Layout,
    meta: {
      title: "Vvvvv-Blog!",
    },
    redirect: "/category/vue3",
    children: [
      {
        path: "/category/:slug",
        name: "category-slug",
        component: () => import("@/pages/categoryLists/categoryLists.vue"),
      },
      {
        path: "/detail/:id",
        name: "detail-id",
        component: () => import("@/pages/postDetail/postDetail.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "Notfound",
    meta: {
      title: "Vvvvv-Blog! not fount",
    },
    component: Layout,
    children: [
      {
        path: "/:catchAll(.*)",
        name: "test",
        component: () => import("@/pages/notFound/index.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  document.title = to.meta.title;
});
router.isReady().then(() => {
  console.log("Welcome Vvvv-Blog!");
  console.log(
    "%cGitHub： https://github.com/Jveen-D/Vvvvv-Blog ",
    "color:orangered;font-weight:bolder"
  );
});

export default router;
