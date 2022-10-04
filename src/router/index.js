import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/views/Home.vue";
import NotFound from "../components/views/NotFound.vue";
import Wip from "../components/views/Wip.vue";
import Gate from "../components/views/Gate.vue";
import Modal from "../components/views/modal/Modal.vue"
import walletConnect from "../components/sections/WalletConnect.vue"
import Wrapper from "../components/views/Wrapper.vue";
import Login from "../components/views/Login.vue";
import store from "../store";
import { Whitelist } from "../whitelist";
import { nextTick } from "vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/gate"
    },
    {
      path: "/walletConnect",
      component: Modal,
      props: {component: walletConnect}
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/wip",
      name: "Work In Progress",
      component: Wip,
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
