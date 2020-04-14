import Vue from 'vue';
import VueRouter from 'vue-router';

import Produto from '@/views/Produto';
import Carrinho from '@/views/Carrinho';
import Checkout from '@/views/Checkout';

Vue.use(VueRouter);

const routes = [
  {
    name: 'produto',
    path: '/',
    component: Produto
  },
  {
    name: 'carrinho',
    path: '/carrinho',
    component: Carrinho
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: Checkout
  }
];

const router = new VueRouter({
  history: true,
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
});

export default router;