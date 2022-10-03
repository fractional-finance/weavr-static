import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Wip from "../views/Wip.vue";
import Gate from "../views/Gate.vue";
import Wrapper from "../views/Wrapper.vue";
import Login from "../views/Login.vue";
import store from "../store";
import { nextTick } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/wip",
      name: "Work In Progress",
      component: Wip,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/gate",
      name: "Gate",
      component: Gate,
    },

    { path: "/:pathMatch(.*)*", name: "Not-Found", component: NotFound },
  ],
});

let originalPath = "";
let hasOriginalPathBeenSet = false;
let hasRedirectedAfterWhitelisting = false;

router.beforeEach((to, from) => {
  if (!hasOriginalPathBeenSet) {
    originalPath = to.fullPath;
    hasOriginalPathBeenSet = true;
    console.log(originalPath);
  }

  if (to.fullPath === "/gate") {
    return true;
  }

  if (to.fullPath === "/walletConnect") {
    return true;
  }
  const address = store.getters.userWalletAddress;
  const isConnected = ethers.utils.isAddress(address);
  if (!isConnected) {
    router.push("/");
  }
  const whitelisted = store.getters.isWhitelisted;
  if (whitelisted) {
    if (!hasRedirectedAfterWhitelisting) {
      router.push(originalPath);
      hasRedirectedAfterWhitelisting = true;
    }
    return true;
  } else {
    router.push("/gate");
  }

  return true;
});

export default router;
