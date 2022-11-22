import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-toast-notification/dist/theme-sugar.css";
import VueToast from "vue-toast-notification";
import VueMask from "v-mask";

Vue.config.productionTip = false;
Vue.use(VueToast, {
  position: "top-right",
});

Vue.use(VueMask);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
