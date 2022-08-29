import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/table',
    children:[{
      path: '/book',
      name: 'book',
      component: () => import('../views/book.vue')
    },{
      path: '/back',
      name: 'back',
      component: () => import('../views/back.vue')
    },{
      path: '/country',
      name: 'country',
      component: () => import('../views/country.vue')
    },{
      path: '/tab',
      name: 'tab',
      component: () => import('../views/tab.vue')
    },{
      path: '/table',
      name: 'table',
      component: () => import('../views/table.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
