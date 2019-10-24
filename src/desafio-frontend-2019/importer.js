import '@/registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

require('bootstrap')

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
