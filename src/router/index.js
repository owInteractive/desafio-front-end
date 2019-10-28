import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from './views'
import Product from './product'

Vue.use(VueRouter)

const routes = [
  ...Views,
  ...Product,
]

const router = new VueRouter({
  history: true,
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

export default router
