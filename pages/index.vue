<template>
    <header class="flex flex-row w-full bg-peach">
        <div class="basis-1/4 flex items-center justify-start px-4">
            <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16" >
        </div>
        <div class="basis-1/4"></div> <!-- Remove if not needed -->
        <nav class="basis-1/2 flex flex-row items-center justify-end px-4 gap-4" aria-label="Main navigation">
            <NuxtLink to="/" class="my-auto p-2 hover:bg-red-500 rounded transition-colors">Home</NuxtLink> 
            <NuxtLink to="/Lab3" class="my-auto p-2 hover:bg-teal-500 rounded transition-colors">Lab3</NuxtLink>
            <NuxtLink to="#" class="my-auto p-2 hover:bg-teal-500 rounded transition-colors">LogIn</NuxtLink>
            <NuxtLink to="#" class="my-auto p-2 hover:bg-teal-500 rounded transition-colors">LogOut</NuxtLink>
        </nav>
    </header>
</template>