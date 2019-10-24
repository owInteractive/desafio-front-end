import '@/registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/style.css'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import Theme from '@/components/template/Theme'

require('bootstrap')

Vue.component('Theme', Theme)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
