// Vue
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// Vue Router
import router from './router'
// Vuex
import store from './store'
// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Vue Carousel
import VueCarousel from 'vue-carousel'
// Axios
import api from './axios'
// Styles (Sass)
import "./assets/sass/styles.sass"

Vue.prototype.$http = api

Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
