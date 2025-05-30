<template>
    <header class="group w-full relative grid grid-cols-3 items-center px-6 py-4 border-gradient shadow-sm hover:shadow-lg transition-all duration-300">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[2000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(241,165,20,0.6),rgba(255,227,206,0.9))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[2000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(141,0,39,0.6),rgba(255,227,206,0.9))] opacity-0 group-hover:opacity-100"></div>
        
        <div class="flex items-center gap-2 select-none z-10">
            <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16 bg-peach rounded-3xl shadow-md p-1" >
            <div class="leading-tight cursor-default select-none">
                <p class="text-xs text-gray-500">THIS IS</p>
                <p class="text-sm font-bold">OKAK TEAM</p>
            </div>
        </div>
        <nav class="flex justify-center space-x-8 text-sm z-10" aria-label="Main navigation">
            <NuxtLink to="/" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">Home</NuxtLink> 
            <NuxtLink to="/Lab3" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">Lab3</NuxtLink>
            <NuxtLink to="/login" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">LogIn</NuxtLink>
            <NuxtLink to="/logout" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">LogOut</NuxtLink>
        </nav>
        <div></div>
    </header>

    <main class="group relative h-screen overflow-hidden">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_top_left,rgba(255,227,206,0.85),rgba(45,175,145,0.6),rgba(255,227,206,0.9))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_top_right,rgba(255,227,206,0.85),rgba(45,175,145,0.6),rgba(255,227,206,0.9))] opacity-0 group-hover:opacity-100"></div>

        <div class="relative z-10 p-5 flex">
            <slot />
        </div>
    </main>
    
    <footer class="relative group overflow-hidden flex flex-row w-full border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
        <!---Первый градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_right,rgba(255,227,206,0.85),rgba(141,0,39,0.6),rgba(255,227,206,0.85))] opacity-100 group-hover:opacity-0"></div>

        <!-- Второй градиент -->
        <div class="absolute inset-0 z-0 transition-opacity duration-[3000ms] bg-[linear-gradient(to_left,rgba(141,0,39,0.5),rgba(218,64,17,0.4),rgba(241,165,20,0.5),rgba(45,175,145,0.4))] opacity-0 group-hover:opacity-100"></div>
        <div class="relative z-10 flex flex-row items-center justify-center gap-6">
            <a href="https://www.youtube.com/"><img src="assets/images/hd-youtube-logo-png-transparent-background-20.png" class="w-16 h-16"></a>
            <a href="https://github.com/"><img src="assets/images/github_PNG20.png" class="w-16 h-16"></a>
            <a href="https://www.facebook.com/facebook/"><img src="assets/images/facebook-black-radius-transparent-26.png" class="w-16 h-16"></a>
        </div>
    </footer>
</template>

<!-- Google tag (gtag.js) -->
<script setup>
import { useHead } from '#app'

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