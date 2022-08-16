import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/xueyuan',
        name: 'xueyuan',
        component: () => import('../views/xueyuan.vue')
      },
      {
        path: '/jiang',
        name: 'jiang',
        component: () => import('../views/jiang.vue')
      },
      {
        path: '/zhu',
        name: 'zhu',
        component: () => import('../views/zhu.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
 
]

const router = new VueRouter({
  routes
})

export default router
