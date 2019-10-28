import '@/desafio-frontend-2019'
import Vue from 'vue'
import VueConfig from 'vue-config'
import App from './App.vue'
import router from './router'
import store from './store'
import Config from './config'

Vue.config.productionTip = false
Vue.use(VueConfig, Config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
