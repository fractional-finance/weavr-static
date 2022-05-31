<template>
<div class="h-px w-4/5 m-auto bg-[#5A50D8] mt-5"></div>
  <div class="mt-6 font-body flex flex-col md:flex-row md:justify-evenly">
    <div class="flex flex-col items-center xl:items-start ">
      <p class="footer-link-headings">Pages</p>
      <a class="footer-links" href="#">My Assets</a>
      <a class="footer-links" href="#">Threads</a>
      <a class="footer-links mb-4" href="#">Needles</a>
    </div>
    <div class="flex flex-col items-center xl:items-start">
      <p class="footer-link-headings">Explore</p>
      <a class="footer-links" href="#">Blog</a>
      <a class="footer-links" href="https://app.gitbook.com/o/FeJyij3TaJCZ1uPDMagy/s/OmUjBV5GSeMyKyEeNy8r/whitepaper/introduction">Whitepaper</a>
      <a class="footer-links mb-4" href="#">Documentation</a>
    </div>
    <div class="flex flex-col items-center xl:items-start">
      <p class="footer-link-headings">Governance</p>
      <a class="footer-links" href="https://chat.thefrabric.com/">Forum</a>
      <a class="footer-links" href="#">Vote</a>
      <a class="footer-links" href="#">Proposals</a>
      <a class="footer-links mb-4" href="#">Community</a>
    </div>
  </div>
  <div class="h-px w-4/5 m-auto bg-[#5A50D8] mt-5"></div>
  <div class="xl:w-5/6 xl:mx-auto mt-3 md:mt-5 flex flex-col xl:flex-row xl:justify-between mb-6">
    <img
      src="../assets/footer-logo.png"
      alt="Frabric Logo"
      class="w-4/12 md:w-1/5 mx-auto xl:mx-0 md:mb-3 xl:mb-0"
    />
    <div class="flex justify-evenly md:justify-center items-center mt-3">
      <a href="#">
        <img
          src="../assets/footer-twitter.svg"
          alt="Follow us on Twitter"
          class="w-5 md:w-10 md:mr-3"
        />
      </a>
      <a href="#">
        <img
          src="../assets/footer-github.svg"
          alt="Check us out at Github"
          class="w-5 md:w-10 md:mr-3"
        />
      </a>
      <a href="https://discord.gg/5ATNnF53vW">
        <img
          src="../assets/footer-discord.svg"
          alt="Join our Discord Community"
          class="w-5 md:w-10"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer-links {
  color: #cacaca;
  margin-bottom: 0.6em;
  font-size: 0.8rem;
  text-decoration: none;
}
.footer-link-headings {
  margin-bottom: 0.4em;
}
@media only screen and (min-width: 1024px){
  .footer-link-headings {
    margin-bottom: 1em;
    font-weight: 600;
  }
}
</style>
