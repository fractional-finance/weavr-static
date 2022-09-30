<template>
  <div class="w-5/6 m-auto mt-6">
    <div class="md:flex md:flex-row md:justify-evenly md:items-center">
      <div class="flex flex-col items-center md:items-start">
        <p class="text-2xl xl:text-4xl">LOGIN</p>
        <p class="text-md mt-3 xl:text-lg">Please enter credentials to enter our website</p>
        <p class="text-md mt-2 xl:text-md">
          If you are missing the credentials please join our community to gain access
        </p>
        <input v-model="input.hash" class="px-4 py-2 bg-[#5A50D8] rounded-sm mt-3"/>

        <button @click="login" class="px-4 py-2 bg-[#5A50D8] rounded-sm mt-3">Login</button>
      </div>
      <img
        src="../assets/under-construction.png"
        alt="Page not found"
        class="w-3/4 mx-auto mt-4 md:w-2/5 xl:mr-3"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import {store } from '../store'
export default {
  name: 'Login',
  methods: {
    login() {
      store.action.authenticate(this.input.hash)
      this.router.replace('/')
    }
  },
  setup() {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
    let input = {
        hash: ''
      }
    return {
      handleBack,
      router,
      input
    };
  }
};
</script>

<style></style>
