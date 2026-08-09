<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const previousTitle = document.title
const contactForm = ref(null)
const formStatus = ref('idle')
let sentTimeout
let resetTimeout

const submitForm = () => {
  if (formStatus.value !== 'idle') {
    return
  }

  formStatus.value = 'sending'

  sentTimeout = window.setTimeout(() => {
    formStatus.value = 'sent'

    resetTimeout = window.setTimeout(() => {
      contactForm.value?.reset()
      formStatus.value = 'idle'
    }, 3000)
  }, 1200)
}

onMounted(() => {
  document.title = 'Contact — DevPortfolio'
})

onUnmounted(() => {
  document.title = previousTitle
  window.clearTimeout(sentTimeout)
  window.clearTimeout(resetTimeout)
})
</script>

<template>
  <main class="min-h-screen">
    <section v-reveal class="mx-auto max-w-container-max px-gutter pt-section-gap-sm pb-12">
      <div class="max-w-[720px]">
        <span class="mb-4 block font-code-label text-code-label uppercase tracking-widest text-on-surface-variant">Available for Hire</span>
        <h1 class="mb-6 font-display text-display text-primary">Let's build something <span class="text-outline">precise</span>.</h1>
        <p class="max-w-[600px] font-body-lg text-body-lg text-secondary">
          Whether it's a technical architecture challenge or a sleek user experience, I'm open to discussing new projects and opportunities.
        </p>
      </div>
    </section>

    <section v-reveal class="mx-auto max-w-container-max px-gutter pb-section-gap-lg">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div class="border border-outline-variant bg-surface-container-lowest p-8 lg:col-span-7 md:p-12">
          <form ref="contactForm" class="space-y-12" @submit.prevent="submitForm">
            <div class="group relative">
              <label class="mb-2 block font-code-label text-caption uppercase text-on-surface-variant" for="name">Full Name</label>
              <input id="name" class="form-input-border w-full py-3 font-body-md text-primary" name="name" placeholder="John Doe" required type="text">
            </div>
            <div class="group relative">
              <label class="mb-2 block font-code-label text-caption uppercase text-on-surface-variant" for="email">Email Address</label>
              <input id="email" class="form-input-border w-full py-3 font-body-md text-primary" name="email" placeholder="john@example.com" required type="email">
            </div>
            <div class="group relative">
              <label class="mb-2 block font-code-label text-caption uppercase text-on-surface-variant" for="message">Your Message</label>
              <textarea id="message" class="form-input-border w-full resize-none py-3 font-body-md text-primary" name="message" placeholder="Tell me about your project..." required rows="4"></textarea>
            </div>
            <button class="group flex w-full items-center justify-center gap-2 rounded px-10 py-4 font-body-md font-bold uppercase tracking-wider transition-all md:w-auto" :class="formStatus === 'sent' ? 'bg-surface-container-highest text-primary' : 'bg-primary text-on-primary hover:bg-tertiary-container hover:text-on-tertiary-container'" :disabled="formStatus !== 'idle'" type="submit">
              <template v-if="formStatus === 'idle'">
                Send Message
                <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </template>
              <template v-else-if="formStatus === 'sending'">Sending...</template>
              <template v-else>
                <span class="material-symbols-outlined">check_circle</span>
                Sent
              </template>
            </button>
          </form>
        </div>

        <div class="flex flex-col justify-between space-y-12 lg:col-span-5">
          <div class="group relative aspect-video overflow-hidden border border-outline-variant bg-surface-container-high lg:aspect-square">
            <div class="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhsZR-jGYH_czTfvsWxaGFet-gsKuLXZ6yPjbdTnY-rGWhanUv694zCvjZgnkuVwYKqEgzUo-No_wBuyi8pwdF8ioOo3p086OvqKEET7mBsa82F7NNye26v0V_FpsYJPGkqWtNA7EExkyGRUzW_6ZpBvfFd-hH1AbSXBws_BmUBKozz5z-A4YzrgRHfysRWnvt9twyHko0PVJCXhJRbhCS6eY9eP336dZuxxah4Afhdl4_gJpIpU13qqMppQSDSdXPCSf-3wfyfg')"></div>
          </div>

          <div class="space-y-8">
            <div>
              <h2 class="mb-4 font-code-label text-caption uppercase tracking-widest text-on-surface-variant">Contact Info</h2>
              <p class="font-headline-md text-headline-md text-primary">hello@devportfolio.com</p>
              <p class="mt-2 font-body-md text-secondary">Based in Berlin, Germany. Working Worldwide.</p>
            </div>

            <div>
              <h2 class="mb-4 font-code-label text-caption uppercase tracking-widest text-on-surface-variant">Digital Presence</h2>
              <div class="flex flex-col gap-4">
                <a class="group flex items-center justify-between border-b border-outline-variant pb-2 text-primary transition-colors hover:text-secondary" href="#"><span class="font-body-lg">GitHub</span><span class="material-symbols-outlined text-sm">north_east</span></a>
                <a class="group flex items-center justify-between border-b border-outline-variant pb-2 text-primary transition-colors hover:text-secondary" href="#"><span class="font-body-lg">LinkedIn</span><span class="material-symbols-outlined text-sm">north_east</span></a>
                <a class="group flex items-center justify-between border-b border-outline-variant pb-2 text-primary transition-colors hover:text-secondary" href="#"><span class="font-body-lg">Twitter</span><span class="material-symbols-outlined text-sm">north_east</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.form-input-border {
  border: none;
  border-bottom: 1px solid #adb5bd;
  border-radius: 0;
  background: transparent;
}

.form-input-border:focus {
  outline: none;
  border-bottom: 2px solid #212529;
  box-shadow: none;
}
</style>
