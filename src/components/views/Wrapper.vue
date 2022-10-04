<template>

</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };

    return {
      handleBack,
      router
    };
  }
};
</script>
<style></style>