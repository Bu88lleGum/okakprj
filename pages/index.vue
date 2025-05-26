<template>
    <header class="flex items-center justify-between px-6 py-4 border-b shadow-sm bg-peach">
        <div class="flex items-center gap-2">
            <img src="assets/images/logo.png" alt="Site Logo" class="w-16 h-16" >
            <div class="leading-tight">
                <p class="text-xs text-gray-500">THIS IS</p>
                <p class="text-sm font-bold">OKAK TEAM</p>
            </div>
        </div>
        <nav class="flex space-x-8 text-sm mx-auto" aria-label="Main navigation">
            <NuxtLink to="/" class="p-2 hover:bg-retrogreen rounded transition-colors">Home</NuxtLink> 
            <NuxtLink to="/Lab3" class="p-2 hover:bg-retrogreen rounded transition-colors">Lab3</NuxtLink>
            <NuxtLink to="#" class="p-2 hover:bg-retrogreen rounded transition-colors">LogIn</NuxtLink>
            <NuxtLink to="#" class="p-2 hover:bg-retrogreen rounded transition-colors">LogOut</NuxtLink>
        </nav>
        <div class="text-sm">En ▾</div>
    </header>
</template>