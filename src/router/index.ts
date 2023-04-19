import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

// 自定义RouteMeta跟内置的RouteMeta进行接口合并，可以限定meta对象下属性的类型
declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
})

/* router.beforeEach((from, to, next)=>{
}) */

export default router
