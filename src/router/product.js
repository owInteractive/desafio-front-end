const routes = [
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/products/List.vue')
  },
]

export default routes
