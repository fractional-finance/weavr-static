import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Wip from '../views/Wip.vue'
import Wrapper from "../views/Wrapper.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wip',
      name: "Work In Progress",
      component: Wip
    },
    {
      path: '/burntcoat',
      component: Wrapper,
      name: 'Welcome to your first real estate token',
      beforeEnter(to, from, next){
        window.location.href="https://dkwnhnualcm.typeform.com/to/QObnRTbh";
      }
    },
      
    { path: '/:pathMatch(.*)*', name: 'Not-Found', component: NotFound }
  ]
})

export default router
