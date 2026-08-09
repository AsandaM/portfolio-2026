<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const heroGlow = ref(null)
const homePage = ref(null)
let observer

const moveGlow = (event) => {
  const x = event.clientX / window.innerWidth
  const y = event.clientY / window.innerHeight

  if (heroGlow.value) {
    heroGlow.value.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px))`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', moveGlow)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  homePage.value?.querySelectorAll('.group').forEach((item) => {
    item.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10')
    observer.observe(item)
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', moveGlow)
  observer?.disconnect()
})
</script>

<template>
  <main ref="homePage" class="pt-16">
    <section
      class="relative mx-auto grid min-h-[921px] max-w-container-max grid-cols-1 items-center gap-12 overflow-hidden px-gutter md:grid-cols-12">
      <div class="grid-bg absolute inset-0 -z-10 opacity-30"></div>
      <div ref="heroGlow"
        class="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/20 blur-[120px]">
      </div>

      <div class="group w-full space-y-8 text-left md:col-span-7">
        <div
          class="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container px-3 py-1">
          <span class="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
          <span class="font-code-label text-code-label uppercase tracking-widest text-on-surface-variant">Available for
            new projects</span>
        </div>

        <h1 class="font-display text-display-mobile leading-tight tracking-tighter text-primary md:text-display">
          Building My Career Through Code
        </h1>

        <p class="max-w-[640px] font-body-lg text-body-lg leading-relaxed text-secondary">
          From web development and cloud projects to backend development and automation, I'm always looking for
          opportunities to learn and create something useful.
        </p>

        <div class="flex flex-col items-center gap-4 pt-4 md:flex-row">
          <RouterLink
            class="w-full rounded bg-primary px-10 py-4 text-center font-headline-md text-headline-md text-on-primary transition-colors duration-300 hover:bg-on-surface-variant md:w-auto"
            to="/project">
            View My Projects
          </RouterLink>
          <RouterLink
            class="w-full rounded border border-outline bg-transparent px-10 py-4 text-center font-headline-md text-headline-md text-primary transition-colors duration-300 hover:bg-surface-container-low md:w-auto"
            to="/contact">
            Get in Touch
          </RouterLink>
        </div>
      </div>

      <div class="group relative md:col-span-5">
        <div class="aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-high">
          <img alt="Professional Portrait"
            class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg">
        </div>
        <div class="absolute -right-4 -bottom-4 -z-10 h-24 w-24 border-r-2 border-b-2 border-primary"></div>
        <div class="absolute -top-4 -left-4 -z-10 h-24 w-24 border-t-2 border-l-2 border-primary"></div>
      </div>
    </section>
  </main>
</template>
