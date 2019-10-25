const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('@/views/ShoppingCart.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/Checkout.vue')
  },
]

export default routes
