// Vue
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// Vue Router
import router from './router'
// Vuex
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' // importando o Bootstrap Vue
import 'bootstrap/dist/css/bootstrap.css' // Importando CSS do Bootstrap Vue
import 'bootstrap-vue/dist/bootstrap-vue.css' // Importando CSS do Bootstrap Vue
// Styles (Sass)
import "./assets/sass/styles.sass"

Vue.use(BootstrapVue) // Adicionando o bootstrap vue na aplicação vue
Vue.use(IconsPlugin) // Adicionando o plugin de ícones do bootstrap vue na aplicação vue

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
