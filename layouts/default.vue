<template>
    <header class="relative grid group w-full max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2 grid-cols-3 items-center px-6 py-4 border-gradient shadow-sm hover:shadow-lg transition-all duration-300">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[2000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(241,165,20,0.6),rgba(255,227,206,0.9))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[2000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(141,0,39,0.6),rgba(255,227,206,0.9))] opacity-0 group-hover:opacity-100"></div>
        
        <div class="flex items-center gap-2 select-none z-10 max-sm:justify-center">
          <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16 bg-peach rounded-3xl shadow-md p-1" >
          <div class="leading-tight cursor-default select-none">
              <p class="text-xs text-gray-500">THIS IS</p>
              <p class="text-sm font-bold">OKAK TEAM</p>
          </div>
        </div>

        <nav :class="{'flex justify-center space-x-8 text-sm z-10': !burger || burger,
                    'max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:items-center max-sm:w-full max-sm:bg-white max-sm:p-4 max-sm:border-t max-sm:border-gray-300': burger,
                    'max-sm:hidden': !burger}">
            <NuxtLink to="/" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:border max-sm:rounded-lg">Home</NuxtLink>
            <div class="my-auto p-2 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center max-sm:px-0 max-sm:pb-0"@click="switch_submenu">Labs
              <div class="flex flex-col absolute top-full bg-white text-black w-56 text-center max-sm:relative max-sm:bg-red-100" v-show="submenu">
                <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:w-full max-sm:border-t-2 max-sm:test-center max-sm:rounded-lg">Lab3</NuxtLink>
                <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:w-full max-sm:rounded-lg">Lab4</NuxtLink>
                <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:w-full max-sm:rounded-lg">Lab5</NuxtLink>
                <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:w-full max-sm:rounded-lg">Lab6</NuxtLink>
              </div>
            </div>
            <NuxtLink to="/login" :class="{'p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:border-black max-sm:text-center max-sm:rounded-lg max-sm:w-full': submenu,
            'p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:border-black max-sm:text-center max-sm:rounded-lg max-sm:w-full': !submenu}"">LogIn</NuxtLink>
            <NuxtLink to="/logout" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300 w-full text-center max-sm:border max-sm:rounded-lg">LogOut</NuxtLink>
        </nav>
        <div v-if="!burger" @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
          <span class="h-[3px] w-full bg-black"></span>
          <span class="h-[3px] w-full bg-black"></span>
          <span class="h-[3px] w-full bg-black"></span>
        </div>
        <div v-else class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6" @click="switch_burger">
          <span class="h-[3px] w-full bg-black rotate-45 relative top-[9px]"></span>
          <span class="h-[3px] w-full bg-black opacity-0"></span>
          <span class="h-[3px] w-full bg-black relative bottom-3 rotate-[-45deg]"></span>
        </div>
    </header>

    <main class="group relative h-screen overflow-hidden max-sm:h-auto max-sm:min-h-screen max-sm:flex max-sm:flex-col max-sm:p-4">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_top_left,rgba(255,227,206,0.85),rgba(45,175,145,0.6),rgba(255,227,206,0.9))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_top_right,rgba(255,227,206,0.85),rgba(45,175,145,0.6),rgba(255,227,206,0.9))] opacity-0 group-hover:opacity-100"></div>

        <div class="relative z-10 p-5 flex max-sm:p-2 max-sm:flex-col max-sm:items-center">
          <slot />
        </div>
    </main>
    
    <footer class="relative group overflow-hidden flex flex-row w-full border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4 
                  max-sm:flex-col max-sm:gap-2 max-sm:py-4 max-sm:px-2">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(141,0,39,0.6),rgba(255,227,206,0.85))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_left,rgba(141,0,39,0.5),rgba(218,64,17,0.4),rgba(241,165,20,0.5),rgba(45,175,145,0.4))] opacity-0 group-hover:opacity-100"></div>
        <div class="relative z-10 flex flex-row items-center justify-center gap-6 max-sm:flex-col max-sm:gap-2">
          <a href="https://www.youtube.com/"><img src="assets/images/hd-youtube-logo-png-transparent-background-20.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12"></a>
          <a href="https://github.com/"><img src="assets/images/github_PNG20.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12"></a>
          <a href="https://www.facebook.com/facebook/"><img src="assets/images/facebook-black-radius-transparent-26.png" class="w-16 h-16 max-sm:w-12 max-sm:h-12"></a>
        </div>
    </footer>
</template>

<!-- Google tag (gtag.js) -->
<script setup>
import { useHead } from '#app';
import{ref} from 'vue'

useHead({
  script: [
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-S42JX70M25",
      async: true,
    },
    {
      hid: "gtag-init",
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-S42JX70M25');
      `,
      type: "text/javascript",
      tagPosition: 'head',
    },
  ],
  __dangerousDisableSanitizersByTagID: {
    'gtag-init': ['innerHTML'],
  },
});

const burger = ref<Boolean>(false)
const submenu = ref<Boolean>(false)

const switch_burger = ()=> {burger.value = !burger.value}
const switch_submenu = ()=> {submenu.value = !submenu.value}
</script>

<style scoped>
.border-gradient {
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    #8D0027,
    #DA4011,
    #F1A514,
    #2DAF91
  );
}
</style>