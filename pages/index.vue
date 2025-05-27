<template>
    <header class="grid grid-cols-3 items-center px-6 py-4 bg-peach shadow-sm hover:shadow-lg transition-all duration-300 border-gradient">
        <div class="flex items-center gap-2 select-none">
            <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16" >
            <div class="leading-tight cursor-default select-none">
                <p class="text-xs text-gray-500">THIS IS</p>
                <p class="text-sm font-bold">OKAK TEAM</p>
            </div>
        </div>
        <nav class="flex justify-center space-x-8 text-sm" aria-label="Main navigation">
            <NuxtLink to="/" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">Home</NuxtLink> 
            <NuxtLink to="/Lab3" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">Lab3</NuxtLink>
            <NuxtLink to="#" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">LogIn</NuxtLink>
            <NuxtLink to="#" class="p-2 hover:text-white hover:bg-gradient-to-r from-[#8D0027] to-[#F1A514] rounded transition-colors duration-300">LogOut</NuxtLink>
        </nav>
        <div></div>
    </header>
</template>

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