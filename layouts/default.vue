<template>
  <header class="relative w-full border-gradient shadow-sm transition-all duration-300">
    <!-- Background gradients -->
    <div class="absolute inset-0 z-0 transition-opacity duration-2000 bg-gradient-to-r from-[#FFE3CED9] via-[#F1A51499] to-[#FFE3CEE6] opacity-100 group-hover:opacity-0"></div>
    <div class="absolute inset-0 z-0 transition-opacity duration-2000 bg-gradient-to-r from-[#FFE3CED9] via-[#8D002799] to-[#FFE3CEE6] opacity-0 group-hover:opacity-100"></div>

    <!-- Header content -->
    <div class="relative z-10 flex items-center justify-between px-6 py-4 sm:grid sm:grid-cols-3">
      <!-- Logo -->
      <div class="flex items-center gap-2 select-none sm:justify-start justify-center">
        <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16 bg-peach rounded-3xl shadow-md p-1" />
        <div class="leading-tight">
          <p class="text-xs text-gray-500">THIS IS</p>
          <p class="text-sm font-bold">OKAK TEAM</p>
        </div>
      </div>

      <!-- Burger Icon -->
      <div class="sm:hidden flex flex-col items-center justify-center w-8 h-10 cursor-pointer" @click="switch_burger">
        <span :class="burger ? 'rotate-45 relative top-[9px]' : ''" class="h-[3px] w-full bg-black transition-transform my-1"></span>
        <span :class="burger ? 'opacity-0' : ''" class="h-[3px] w-full bg-black transition-opacity my-1"></span>
        <span :class="burger ? 'rotate-[-45deg] relative bottom-3' : ''" class="h-[3px] w-full bg-black transition-transform my-1"></span>
      </div>

      <!-- Navigation -->
      <nav :class="['sm:flex sm:space-x-8 sm:justify-center sm:text-sm sm:col-span-1 z-10', burger ? 'flex flex-col items-center w-full bg-peach rounded mt-4 p-4 space-y-2 border-t sm:hidden' : 'hidden sm:flex']">
        <NuxtLink to="/" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">Home</NuxtLink>

        <div class="relative">
          <div class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full cursor-pointer" @click="switch_submenu">Labs</div>
          <div v-show="submenu" class="bg-[#FFF1E0] text-black w-full text-center shadow-md sm:w-56 sm:ml-0 sm:mt-2 space-y-1">
            <NuxtLink to="/Lab3" class="block p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">Lab3</NuxtLink>
            <NuxtLink to="/Lab4" class="block p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">Lab4</NuxtLink>
            <NuxtLink to="/Lab5" class="block p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">Lab5</NuxtLink>
            <NuxtLink to="/Lab6" class="block p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">Lab6</NuxtLink>
          </div>
        </div>

        <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 text-center w-full">LogOut</NuxtLink>
      </nav>
    </div>
  </header>

  <main class="group relative min-h-screen max-sm:flex max-sm:flex-col max-sm:p-4 overflow-hidden">
    <!-- Gradients -->
    <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-gradient-to-tl from-[#FFE3CED9] via-[#2DAF9199] to-[#FFE3CEE6] opacity-100 group-hover:opacity-0"></div>
    <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-gradient-to-tr from-[#FFE3CED9] via-[#2DAF9199] to-[#FFE3CEE6] opacity-0 group-hover:opacity-100"></div>

    <!-- Content -->
    <div class="relative z-10 p-5 max-sm:p-2">
      <slot />
    </div>
  </main>

  <footer class="relative group overflow-hidden w-full border-t-2 border-gray-400 px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-4">
    <!-- Gradients -->
    <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-gradient-to-r from-[#FFE3CED9] via-[#8D002799] to-[#FFE3CED9] opacity-100 group-hover:opacity-0"></div>
    <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-gradient-to-l from-[#8D002780] via-[#DA401166] via-[#F1A51480] via-[#2DAF9180] opacity-0 group-hover:opacity-100"></div>

    <!-- Icons -->
    <div class="relative z-10 flex flex-row items-center justify-center gap-6">
      <a href="https://www.youtube.com/"><img src="assets/images/hd-youtube-logo-png-transparent-background-20.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12" /></a>
      <a href="https://github.com/"><img src="assets/images/github_PNG20.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12" /></a>
      <a href="https://www.facebook.com/facebook/"><img src="assets/images/facebook-black-radius-transparent-26.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12" /></a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#app';

const burger = ref(false);
const submenu = ref(false);

const switch_burger = () => (burger.value = !burger.value);
const switch_submenu = () => (submenu.value = !submenu.value);

useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-S42JX70M25',
      async: true,
    },
    {
      hid: 'gtag-init',
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-S42JX70M25');
      `,
      type: 'text/javascript',
      tagPosition: 'head',
    },
  ],
  __dangerousDisableSanitizersByTagID: {
    'gtag-init': ['innerHTML'],
  },
});
</script>

<style scoped>
.border-gradient {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #8D0027, #DA4011, #F1A514, #2DAF91);
}
</style>