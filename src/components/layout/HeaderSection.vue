<template>
  <div class="relative flex flex-col justify-start h-screen">
    <div 
    class="
    absolute
    object-cover object-bottom opacity-50
    w-full h-full section-bg-image
    ">
    </div>
    <div class="h-full w-5/6 md:w-full max-w-screen-lg mx-auto px-8 lg:px-4">
      <div class="h-full w-full flex flex-col items-start justify-center">
        <div class="container ml-0 mr-auto max-w-3xl mb-8">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-6xl">
            <span class="inline md:block">The age of <span class="text-f-blue-1">Blockchain</span></span>
            {{ ' ' }}
            <span class="inline md:block">in <span class="text-gray-300">Real Estate</span></span>
          </h1>
          <div class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-0">
            <p>Skip the mortgage, buy collaboratively.</p>
            <p>Decide and vote on how to manage it.</p>
            <p>Buy and sell at anytime, real-time.</p>
          </div>
        </div>
        <div class="flex flex-col items-start md:flex md:flex-row md:items-start">
          <Button 
            label="Learn More" 
            @onClick="onLearnMoreClick" 
            customClasses="shadow-xl" 
          />
          <Button 
            kind="secondary" 
            @onClick="onViewWhitePaperClick" 
            label="View Whitepaper" 
            customClasses="shadow-xl ml-0 mt-4 md:ml-4 md:mt-0" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../common/Button'

export default {
  name: 'HeaderSection',
  data() {
    return {
      images: {
        background: require('../../assets/pics/constellation.svg')
      }
    }
  },
  components: {
    Button,
  },
  methods: {
    onLearnMoreClick() {
      this.$emit('scrollTo', 'frabric-explainer')
    },

    onViewWhitePaperClick() {
      window.open('https://www.notion.so/fractionalfinance/Frabric-Whitepaper-f58768fdff4748978095c1733e7b2be5', '_blank')
    }
  }
}
</script>

<style scoped>
.section-bg-image {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='440' height='440' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='769' cy='229' r='21'/%3E%3Ccircle cx='539' cy='269' r='21'/%3E%3Ccircle cx='603' cy='493' r='21'/%3E%3Ccircle cx='731' cy='737' r='21'/%3E%3Ccircle cx='520' cy='660' r='21'/%3E%3Ccircle cx='309' cy='538' r='21'/%3E%3Ccircle cx='295' cy='764' r='21'/%3E%3Ccircle cx='40' cy='599' r='21'/%3E%3Ccircle cx='102' cy='382' r='21'/%3E%3Ccircle cx='127' cy='80' r='21'/%3E%3Ccircle cx='370' cy='105' r='21'/%3E%3Ccircle cx='578' cy='42' r='21'/%3E%3Ccircle cx='237' cy='261' r='21'/%3E%3Ccircle cx='390' cy='382' r='21'/%3E%3C/g%3E%3C/svg%3E");
  mask-image: 
    linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)),
    radial-gradient(at 100% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%);
}
</style>