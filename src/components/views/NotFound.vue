<template>
  <div class="w-5/6 m-auto mt-6">
    <div class="md:flex md:flex-row md:justify-evenly md:items-center">
      <div class="flex flex-col items-center md:items-start">
        <p class="text-2xl xl:text-4xl">Ooops...</p>
        <p class="text-md mt-3 xl:text-lg">Did you get lost?</p>
        <p class="text-md mt-2 xl:text-lg">
          We couldn’t find the page you’re looking for.
        </p>
        <button @click="handleBack" class="px-4 py-2 bg-[#5A50D8] rounded-sm mt-3">Go Home</button>
      </div>
      <img
        src="../assets/not-found.svg"
        alt="Page not found"
        class="w-3/4 mx-auto mt-4 md:w-2/5 xl:mr-3"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const handleBack = () => {
      router.push('/');
    };

    return {
      handleBack,
      router
    };
  }
};
</script>

<style></style>
