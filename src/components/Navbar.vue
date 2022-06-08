<template>
  <div
    v-click-away="onClickAway"
    class="w-full text-white bg-[#1e1c25] dark-mode:text-gray-200 dark-mode:bg-gray-800"
  >
    <div
      class="w-11/12 mx-auto flex flex-col items-center max-w-screen-xl px-4 md:items-center md:justify-between lg:flex-row md:px-6 lg:px-8"
    >
      <div class="p-4 flex flex-row items-center justify-between">
        <router-link :to="{ name: 'Home' }"
          ><img src="../assets/frabric-logo.svg" alt="Frabric Logo"
        /></router-link>
      </div>
      <nav
        class="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-row items-center justify-between xl:justify-evenly text-xs xl:text-base font-body my-2"
      >
        <div class="relative">
          <a @click="handleAbout" class="" href="#">About</a>
          <div
            v-if="aboutIsOpen"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute -left-16 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div class="px-2 py-2 bg-[#1e1c25] rounded-md shadow">
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://the-frabric.gitbook.io/thefrabric/whitepaper/introduction"
                target="_blank"
                >Whitepaper</a
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://the-frabric.gitbook.io/thefrabric"
                target="_blank"
                >FAQ</a
              >
            </div>
          </div>
        </div>
        <div class="relative">
          <a @click="handleInvest" class="" href="#">Invest</a>
          <div
            v-if="investIsOpen"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute -left-16 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div class="px-2 py-2 bg-[#1e1c25] rounded-md shadow">
              <router-link
                to="/wip"
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >Buy</router-link
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://dkwnhnualcm.typeform.com/to/EzESZLnR"
                >Sell</a
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://dkwnhnualcm.typeform.com/to/ksJv35hX"
                >Fund</a
              >
            </div>
          </div>
        </div>
        <div class="relative">
          <a @click="handleCommunity" class="" href="#">Community</a>
          <div
            v-if="communityIsOpen"
            x-transition:enter="transition ease-out duration-100"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="absolute -left-16 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
          >
            <div class="px-2 py-2 bg-[#1e1c25] rounded-md shadow">
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://chat.thefrabric.com/"
                target="_blank"
                >Forum</a
              >
              <a
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="https://discord.gg/5ATNnF53vW"
                target="_blank"
                >Discord</a
              >
              <router-link
                to="/wip"
                class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >Governance</router-link
              >
            </div>
          </div>
        </div>
        <router-link
          to="/wip"
          class="px-6 xl:px-8 py-3 bg-[#5A50D8] text-white rounded-md"
          >Marketplace</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const aboutIsOpen = ref(false);
    const investIsOpen = ref(false);
    const communityIsOpen = ref(false);

    const handleAbout = () => {
      aboutIsOpen.value = !aboutIsOpen.value;
      investIsOpen.value = false;
      communityIsOpen.value = false;
    };
    const handleInvest = () => {
      investIsOpen.value = !investIsOpen.value;
      aboutIsOpen.value = false;
      communityIsOpen.value = false;
    };
    const handleCommunity = () => {
      communityIsOpen.value = !communityIsOpen.value;
      aboutIsOpen.value = false;
      investIsOpen.value = false;
    };

    const onClickAway = () => {
      aboutIsOpen.value = false;
      investIsOpen.value = false;
      communityIsOpen.value = false;
    };
    return {
      aboutIsOpen,
      investIsOpen,
      communityIsOpen,
      handleAbout,
      handleInvest,
      handleCommunity,
      onClickAway,
    };
  },
};
</script>

<style>
.header {
  width: 100%;
}
</style>
