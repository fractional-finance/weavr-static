import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import './styles/index.css'

Vue.config.productionTip = false
require('dotenv').config()

Vue.use(VueYouTubeEmbed)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
