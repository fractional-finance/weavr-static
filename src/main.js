import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from "vue3-click-away"
import router from './router'
import './assets/base.css'

const app = createApp(App)

app.use(VueClickAway)
app.use(router)

app.mount('#app')
