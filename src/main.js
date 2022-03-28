import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.scss'
import router from './router'

const app = createApp(App);
app.use(router)

app.mount('#app')
