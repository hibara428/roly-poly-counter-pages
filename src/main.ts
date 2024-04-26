import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { store, key } from '@/stores/index'
import router from '@/router'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.mount('#app')
