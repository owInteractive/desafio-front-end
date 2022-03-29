import { createApp } from 'vue'
import Maska from 'maska'
import App from './App.vue'
import './assets/css/reset.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.scss'
import router from './router'
import store from './store'

const app = createApp(App);
app.use(Maska);
app.use(router);
app.use(store);

app.mount('#app');
