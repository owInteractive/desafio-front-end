import '@/registerServiceWorker'
import '@/assets/css/style.css'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Theme from '@/components/template/Theme'
import VueToastr2 from 'vue-toastr-2'
import BootstrapVue from 'bootstrap-vue'
import VueTheMask from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2'
import {ValidationProvider, ValidationObserver} from 'vee-validate';

import br from 'vee-validate/dist/locale/pt_BR'
import VueEvents from 'vue-events'
import BlockUI from 'vue-blockui'

import {extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: br.messages[rule]
  });
}

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

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('Theme', Theme)
Vue.use(VueAxios, axios)
Vue.use(VueToastr2, toastrConfigs)
Vue.use(BootstrapVue)
Vue.use(VueTheMask)
Vue.use(VueSweetalert2, {confirmButtonColor: '#716ACA'})
Vue.use(VueEvents)
Vue.use(BlockUI)
