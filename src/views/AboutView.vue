<script setup>
import { onMounted, onUnmounted } from 'vue'

const previousTitle = document.title

onMounted(() => {
  document.title = 'About | DevPortfolio'
})

onUnmounted(() => {
  document.title = previousTitle
})
</script>

<template>
  <main class="mx-auto max-w-container-max px-gutter py-section-gap-sm md:py-section-gap-lg">
    <div class="mx-auto max-w-3xl space-y-16">
      <header class="space-y-4">
        <h1 class="font-headline-lg text-headline-lg text-primary">About Me</h1>
        <div class="h-px w-12 bg-primary"></div>
      </header>

      <article v-reveal class="space-y-6">
        <p class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          I've always been curious about how technology works beyond what we see on the screen. That curiosity led me to study Computing and explore different areas of technology. I enjoy learning how systems are built, how they communicate, and how they can be made secure, reliable, and efficient.
        </p>
        <p class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          As someone who is still growing in the industry, I enjoy every opportunity to learn something new. Whether it's building applications, working with cloud services, or deepening my understanding of networking and security, I'm constantly looking for ways to improve my skills and broaden my knowledge.
        </p>
      </article>

      <section class="space-y-8">
        <h2 class="font-headline-md text-headline-md text-primary">Experience</h2>
        <div class="space-y-12">
          <div v-reveal class="relative border-l border-outline-variant pl-8">
            <div class="absolute top-2 -left-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></div>
            <div class="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 class="font-headline-md text-[20px] text-primary">Software Engineer Intern</h3>
              <span class="font-code-label text-code-label text-secondary">2026 — Present</span>
            </div>
            <p class="mb-4 font-body-md font-medium text-primary">Mukuru</p>
            <ul class="space-y-3 font-body-md text-on-surface-variant">
              <li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span><span>Develop and maintain backend solutions using C# and .NET.</span></li>
              <li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span><span>Gain hands-on experience with software testing, debugging, and code reviews.</span></li>
            </ul>
          </div>

          <div v-reveal class="relative border-l border-outline-variant pl-8">
            <div class="absolute top-2 -left-1.5 h-3 w-3 rounded-full bg-outline-variant ring-4 ring-background"></div>
            <div class="mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 class="font-headline-md text-[20px] text-primary">AWS Cloud Support Associate Intern</h3>
              <span class="font-code-label text-code-label text-secondary">Feb 2025 — Aug 2025</span>
            </div>
            <p class="mb-4 font-body-md font-medium text-primary">Amazon Web Services (AWS)</p>
            <ul class="space-y-3 font-body-md text-on-surface-variant">
              <li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span><span>Gained hands-on experience with troubleshooting and supporting real-world cloud solutions.</span></li>
              <li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span><span>Collaborated with a team to design, build, and present a cloud-based application.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h2 class="font-headline-md text-headline-md text-primary">Tech Stack</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-reveal class="space-y-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <h3 class="font-code-label text-[11px] text-code-label uppercase tracking-widest text-secondary">Languages</h3>
            <div class="flex flex-wrap gap-2"><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">TypeScript</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Rust</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Go</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Python</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">C++</span></div>
          </div>
          <div v-reveal class="space-y-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <h3 class="font-code-label text-[11px] text-code-label uppercase tracking-widest text-secondary">Frontend</h3>
            <div class="flex flex-wrap gap-2"><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">React</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Next.js</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Tailwind</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">WebGL</span></div>
          </div>
          <div v-reveal class="space-y-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <h3 class="font-code-label text-[11px] text-code-label uppercase tracking-widest text-secondary">Infrastructure</h3>
            <div class="flex flex-wrap gap-2"><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">AWS</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Kubernetes</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Docker</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Terraform</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Redis</span></div>
          </div>
          <div v-reveal class="space-y-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <h3 class="font-code-label text-[11px] text-code-label uppercase tracking-widest text-secondary">Specialized</h3>
            <div class="flex flex-wrap gap-2"><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">Distributed Systems</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">LLM Integration</span><span class="rounded-DEFAULT bg-surface-container px-3 py-1 font-code-label text-[12px] text-on-surface-variant">CI/CD Automation</span></div>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <h2 class="font-headline-md text-headline-md text-primary">Certificates</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div v-reveal class="flex items-center gap-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container"><span class="material-symbols-outlined text-primary">verified</span></div>
            <div><h3 class="font-body-md font-bold text-primary">AWS Certified Solutions Architect</h3><p class="text-sm text-secondary">Amazon Web Services</p></div>
          </div>
          <div v-reveal class="flex items-center gap-4 rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container"><span class="material-symbols-outlined text-primary">verified</span></div>
            <div><h3 class="font-body-md font-bold text-primary">Professional Cloud Architect</h3><p class="text-sm text-secondary">Google Cloud</p></div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
