import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from "vue3-click-away"
import store from './store'
import Toaster from "@meforma/vue-toaster";

import router from './router'
import './assets/base.css'
import "./styles/frabric-custom.scss";

const app = createApp(App)
app.use(store)
app.use(VueClickAway)
app.use(router)
app.use(Toaster)
app.mount('#app')
