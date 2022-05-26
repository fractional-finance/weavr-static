<template>
    <div class="mt-3 md:mt-8 md:flex md:flex-row md:flex-wrap xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-1 xl:w-11/12">
        <div v-for="uniquePoint in uniquePoints" :key="uniquePoint.id" class="xl:w-10/12">
            <div class="h-min xl:h-[20rem] bg-[#1C1A23] rounded-xl py-4 md:py-6 px-3 md:px-5 mb-4">
                <div class="h-7 w-7 rounded-full bg-[#5A50D8] mb-4"></div>
                <p class="text-lg md:text-2xl xl:text-xl mb-4">
                    {{uniquePoint.heading}}
                </p>
                <p class="text-sm md:text-lg xl:text-sm font-thin">
                    {{uniquePoint.text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { uniquePoints } from '../composables/uniquePoints'
export default {
setup() {
  return {
    uniquePoints,
  }
}
}
</script>

<style>

</style>