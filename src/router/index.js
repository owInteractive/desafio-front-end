import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Carrinho from '@/views/Carrinho';
import Checkout from '@/views/Checkout';

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
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

const router = new Router({
  history: true,
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
});

export default router;