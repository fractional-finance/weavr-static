<template>
  <div class="">
    <div
      class="w-5/6 m-auto mt-6 xl:mt-20 flex flex-col xl:flex-row xl:justify-between items-center font-body"
    >
      <div class="flex flex-col items-center xl:items-start xl:w-2/5">
        <p
          class="text-3xl md:text-5xl xl:text-7xl text-center xl:text-left font-heading font-semibold"
        >
          Buy, Sell and Build
        </p>
        <p
          class="mt-5 md:mt-6 xl:mt-10 xl:w-3/4 md:text-xl text-center xl:text-left text-sm text-zinc-400"
        >
          The first totally decentralized Real estate market. Invest in
          tokenized Real Estate, Manage it, earn, and sell anytime.
        </p>
        <div
          class="flex flex-row justify-between items-center mt-5 xl:mt-9 text-sm md:text-lg"
        >
          <a
            href="https://app.gitbook.com/o/FeJyij3TaJCZ1uPDMagy/s/OmUjBV5GSeMyKyEeNy8r/whitepaper/introduction"
            class="px-3 md:px-5 py-1.5 md:py-3 bg-[#5A50D8] rounded-sm mr-3"
            target="_blank"
            >White Paper</a
          >
          <a
            href="#"
            class="px-3 md:px-5 py-1.5 md:py-3 border-2 border-[#5A50D8] bg-[#1F1D25] rounded-sm ml-3"
            >
            <router-link :to="{ name: 'Work In Progress'}" target = "_blank">
              Marketplace
            </router-link></a
          >
        </div>
      </div>
      <img
        src="../assets/hero-image.svg"
        alt=""
        class="mt-5 w-3/4 md:w-3/5 xl:w-2/5"
      />
    </div>
    <div
      class="w-5/6 m-auto mt-6 md:mt-8 xl:mt-20 flex flex-col items-center font-body"
    >
      <p class="text-xl md:text-3xl xl:text-4xl font-medium text-center">
        The Real Estate community for everyone
      </p>
      <div
        class="h-px md:h-[2px] w-1/3 md:w-2/5 bg-[#5A50D8] mt-2 md:mt-4 xl:mt-8"
      ></div>
      <div
        class="xl:flex xl:flex-row xl:justify-around xl:items-center xl:mt-10 md:w-[87%] xl:w-full"
      >
        <img
          src="../assets/for-buyers.svg"
          alt="buyers"
          class="pr-14 md:pr-14 md:-mb-28 md:w-4/5 mt-4 -mb-8 xl:-mb-14 xl:w-2/5"
        />
        <div class="flex flex-col w-full m-auto">
          <p
            class="font-heading text-center xl:text-left xl:ml-[70px] text-2xl md:text-5xl text-[#5A50D8] mb-3 md:mb-5"
          >
            For buyers
          </p>
          <div v-for="forBuyer in forBuyers" :key="forBuyer.id">
            <ForEveryone :props="forBuyer" />
          </div>
        </div>
      </div>
      <div
        class="xl:flex xl:flex-row-reverse xl:justify-around xl:items-center md:mt-6 xl:mt-10 md:w-[87%] xl:w-full"
      >
        <img
          src="../assets/for-builders.svg"
          alt="sellers"
          class="mt-4 mb-5 md:mb-5 w-3/5 mx-auto md:w-3/5 md:mx-auto xl:w-4/12"
        />
        <div class="flex flex-col w-full m-auto">
          <p
            class="font-heading text-center xl:text-left xl:ml-[70px] text-2xl md:text-5xl text-[#5A50D8] mb-3 md:mb-5"
          >
            For builders
          </p>
          <div v-for="forBuilder in forBuilders" :key="forBuilder.id">
            <ForEveryone :props="forBuilder" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-screen m-auto bg-[#1F1C2F]">
      <div
        class="w-full md:w-5/6 m-auto p-3 mt-4 md:mt-8 rounded-xl font-body h-[50rem] xl:h-[38rem] overflow-y-visible"
      >
        <div
          class="mt-5 md:mt-6 flex flex-col xl:flex-row items-center xl:items-start justify-center"
        >
          <div>
            <p
              class="text-2xl md:text-5xl text-white font-medium text-center font-heading xl:pt-28"
            >
              What makes us Unique?
            </p>
          </div>
          <UniquePoints />
        </div>
      </div>
    </div>
    <div
      class="w-5/6 m-auto mt-28 md:mt-40 xl:mt-48 xl:flex xl:justify-between"
    >
      <div
        class="rounded-3xl p-4 border-2 border-[#5A50D8] hidden md:block md:w-3/5 xl:w-2/6 md:mx-auto"
      >
        <img
          src="../assets/arbitrum-network.png"
          alt="arbitrum network"
          class="rounded-2xl"
        />
      </div>
      <div
        class="flex flex-col items-center xl:items-start font-body xl:w-3/6 xl:mx-auto"
      >
        <p
          class="text-2xl md:text-5xl text-[#5A50D8] font-medium font-heading md:mt-8"
        >
          Arbitrum Network
        </p>
        <p class="my-6 text-md md:text-xl xl:text-lg text-center xl:text-left">
          Arbitrum is a Layer 2 protocol that enables super fast and cheap EVM
          transactions, while relying on the Ethereum mainnet for security.
        </p>
        <a
          href="https://portal.arbitrum.one"
          target="_blank"
          class="px-4 md:px-6 lg:px-10 py-2 md:py-3.5 bg-[#5A50D8] rounded-sm md:text-xl xl:text-lg"
          >Learn More ></a
        >
      </div>
    </div>
    <!-- <div
      class="w-5/6 m-auto mt-5 md:mt-8 font-body bg-white text-black px-3.5 md:px-5 py-3 md:py-4 md:flex md:flex-col xl:flex-row md:items-center xl:justify-center rounded-lg"
    >
      <div class="xl:flex xl:flex-col xl:items-start xl:ml-14">
        <p
          class="text-2xl md:text-5xl xl:text-3xl font-semibold text-center xl:text-left"
        >
          Gain Access to our Marketplace
        </p>
        <p
          class="mt-3 md:mt-7 md:text-xl xl:text-lg md:text-center xl:text-left"
        >
          Join our newsletter and learn to gain your access to Frabric
        </p>
        <div class="flex flex-row justify-evenly mt-3 md:mt-6 text-sm">
          <a
            href="#"
            class="px-5 md:px-7 py-2 md:py-3 bg-[#34303D] rounded-sm md:rounded-md text-white md:text-xl xl:text-sm  xl:mr-4"
            >Your email address</a
          >
          <a
            href="#"
            class="px-5 md:px-7 py-2 md:py-3 bg-[#5A50D8] rounded-sm md:rounded-md text-white md:text-xl xl:text-sm"
            >Subscribe</a
          >
        </div>
      </div>
      <img
        src="../assets/envelope.svg"
        alt="Subscribe to our newsletter"
        class="ml-14 md:ml-40 xl:ml-36 xl:-mr-28 -mt-6 md:-mt-20 xl:-mt-28"
      />
    </div> -->
   <iframe width="540" height="525" src="https://3a567f7a.sibforms.com/serve/MUIEAGQx7T-wtvSq_ZgppYcoGL_EhMhib4X8SjJhbe5tKHAT3T8_-VssK2tpbB45mIhFBfhwkgW1LiIouyQD03GEUoL4VR7x4U9JXWFhdBiTWBUa5IR6mTOZIWxnv1964sjZzI_swXwut-7QTeTnMtvrMnePnzvOVXB-_XyX3_729sjz94iV2JjJdw51x7u5WvwA2ELLJIP9R2G1" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe>
  </div>
</template>

<script>
import ForEveryone from "@/components/ForEveryone.vue";
import UniquePoints from "@/components/UniquePoints.vue";
import { forBuyers } from "../composables/forBuyers";
import { forBuilders } from "../composables/forBuilders";
export default {
  components: {
    ForEveryone,
    UniquePoints,
  },
  setup() {
    return {
      forBuyers,
      forBuilders,
    };
  },
};
</script>

<style></style>
