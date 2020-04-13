import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index';
import { currency } from '@/utils/currency';

import router from '@/router';
import './register';
import './registerServiceWorker'
Vue.filter('currency', currency);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
