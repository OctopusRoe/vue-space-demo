import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// import index from '@/components/errcard.vue'
// import index from '@/components/infocard.vue'
import index from '@/pages/index.vue'
import login from '@/pages/login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }
]

const router = new VueRouter({
  routes
})

export default router
