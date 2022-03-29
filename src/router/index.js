import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Produtos',
    component: ProductsPage,
  },
  {
    path: '/cart',
    name: 'Carrinho',
    component: () => import('../views/CartPage.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
