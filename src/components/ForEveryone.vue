<template>
  <div class="flex flex-row items-center md:w-4/5 md:mx-auto mb-3 rounded-sm md:rounded-md bg-[#1F1D25] ">
    <div class="flex items-center justify-center">
      <p class="bg-[#5A50D8] h-max rounded-md p-2">◉</p>
    </div>
    <p class="pl-5 pr-3 md:text-xl xl:text-md">{{ props.text }}</p>
  </div>
</template>

<script>
export default {
  props: ["props"],
  setup(props) {
    return {
      props: props.props,
    };
  },
};
</script>

<style></style>
