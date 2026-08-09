<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 z-50 w-full border-b border-outline-variant bg-surface">
    <nav class="mx-auto flex h-16 w-full max-w-container-max items-center justify-between px-gutter" aria-label="Main navigation">
      <RouterLink class="font-headline-md text-headline-md font-bold text-primary" to="/" @click="closeMenu">
        AsandaMehlo
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="border-b-2 border-primary pb-1 text-primary" to="/">
          Home
        </RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="border-b-2 border-primary pb-1 text-primary" to="/about">
          About
        </RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="border-b-2 border-primary pb-1 text-primary" to="/project">
          Project
        </RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="border-b-2 border-primary pb-1 text-primary" to="/contact">
          Contact
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <a class="rounded bg-primary px-6 py-2 font-body-md text-body-md text-on-primary transition-all hover:opacity-90" href="#">
          Resume
        </a>
        <button class="text-primary md:hidden" type="button" :aria-expanded="isMenuOpen" aria-controls="mobile-navigation" aria-label="Toggle navigation menu" @click="isMenuOpen = !isMenuOpen">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>

    <div v-if="isMenuOpen" id="mobile-navigation" class="border-t border-outline-variant bg-surface px-gutter py-4 md:hidden">
      <div class="mx-auto flex max-w-container-max flex-col gap-4">
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="font-bold text-primary" to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="font-bold text-primary" to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="font-bold text-primary" to="/project" @click="closeMenu">Project</RouterLink>
        <RouterLink class="font-body-md text-body-md text-secondary transition-colors hover:text-primary" active-class="font-bold text-primary" to="/contact" @click="closeMenu">Contact</RouterLink>
      </div>
    </div>
  </header>
</template>
