import '@/registerServiceWorker'
import '@/assets/css/style.css'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Theme from '@/components/template/Theme'
import VueToastr2 from 'vue-toastr-2'
import BootstrapVue from 'bootstrap-vue'

const toastrConfigs = {
  closeButton: true,
  debug: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
}

window.toastr = require('toastr')

Vue.component('Theme', Theme)
Vue.use(VueAxios, axios)
Vue.use(VueToastr2, toastrConfigs)
Vue.use(BootstrapVue)
