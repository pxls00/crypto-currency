import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {name: 'crypto', params: {crypto_name: 'btcusdt'}},
    component: () => import('@/views/home.vue')
  },
  {
    path: '/crypto/:crypto_name',
    name: 'crypto',
    component: () => import('@/views/crypto/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
