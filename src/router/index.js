import Vue from 'vue'
import VueRouter from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const CartView = () => import('@/views/CartView.vue')
const CheckoutView = () => import('@/views/CheckoutView.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/carrinho',
    name: 'cart',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  }      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
