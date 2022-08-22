import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Wip from '../views/Wip.vue'
import Wrapper from "../views/Wrapper.vue"
import Login from "../views/Login.vue"
import store from "../store"
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/wip',
      name: "Work In Progress",
      component: Wip,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '/:pathMatch(.*)*', name: 'Not-Found', component: NotFound }
  ]
})

router.beforeEach((to, from) => {
  
  if (
    // make sure the user is authenticated
    !store.state.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
  if ( store.state.isAuthenticated ) {
    return true
  }

  
  
  
})

export default router
