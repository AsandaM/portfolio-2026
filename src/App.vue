<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import NavBar from './components/NavBar.vue'

const backgroundGlow = ref(null)

const moveGlow = (event) => {
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight

  if (backgroundGlow.value) {
    backgroundGlow.value.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px))`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', moveGlow)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', moveGlow)
})
</script>

<template>
  <div class="relative isolate min-h-screen overflow-x-hidden">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="grid-bg absolute inset-0 opacity-30"></div>
      <div ref="backgroundGlow" class="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/20 blur-[120px]"></div>
    </div>

    <NavBar />
    <RouterView />
    <AppFooter />
  </div>
</template>
