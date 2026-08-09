<script setup>
const projects = [
  {
    title: 'Nexus Analytics',
    description: 'A real-time telemetry processing engine designed to handle 50k+ events per second with sub-100ms latency across global nodes.',
    technologies: ['React', 'Go', 'Redis'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4guNgUt1bqnys508lI7q9Euqym272eoBnbBSZaJ7ys7vI9c_uk3Ui8KiC9mesI3uXZVO5lj6NOZebspVNSZAgyPgwmhfygSApDzcDNdNie1l8KmWv_MEYqrRC7ydbHdB6Fg1MjhBm1o5_mJbwHboIQ_PMV4eoa2Hi9YoPUtlrtLmtg6I3AojBB3uIcNRG8reALPVRXuIwqjdOr_kg3nfvAgYK8wjMW6mX_0GBHFJckIreil-d_CRMXRiaNz5_-tBgxcoLxpWeww',
    imageAlt: 'A clean, minimalist software dashboard interface showing complex data visualizations.',
  },
  {
    title: 'Core Protocol v2',
    description: 'Distributed consensus implementation for edge computing clusters, focusing on Byzantine fault tolerance and minimal state overhead.',
    technologies: ['Rust', 'WASM', 'P2P'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcrvcX3Q90MaPgFh3rwHnO-3siNKjM0nN84N4w_BVipvP41fn3VZPof0ukUmXduNbwsVn7n-7mFxdoBHe--0Z6wZDCVp1BbYB644IJttcVXO8AJ9g4bD5yqDy-UUPg-jbthEIR0iJixRrS6FnWbRl0VuCVgfv8MvMUIq2PRw_FU7QrUbMJQoP03WkAPYfSq-3bo7WDVBJxDLPy_7hRN3HlayWIOLFNeQ70PYAzpqgSPXisG9avxIN_R3GQdl1F_UOW8ejsMPdOZg',
    imageAlt: 'A server room with glowing blue fiber optic cables.',
  },
  {
    title: 'Atlas UI',
    description: 'An uncompromising design system built for complex enterprise interfaces, prioritizing density without sacrificing clarity or accessibility.',
    technologies: ['TypeScript', 'Tailwind', 'Framer'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmM9ntLjG5ZcXEBvkAnLC_CGHiAdr_D_LxUaVkDk_azsGptetAyUSq_CvjL5rFcuBE8eJOFay4QyJERZMZiIBSlUVXDhz3d9sQX0KSMZkzN0qVkoFOx9VPDdcreOsDn4HAGV0DGzwvLfmax6n-kAUpOjNh5Y3qYLAyTyCSVndENn0XPPoBkPM9GnYy4AHRDbc59outMjTTXhUXpBw9PX8olWU03vU2iJx4U8EclXehZqCIzBsb6KIHe3Sd7Up7t8nsQhQhvwRw-A',
    imageAlt: 'A minimalist code editor showing a TypeScript configuration file.',
  },
  {
    title: 'Prism Bridge',
    description: 'Universal asset bridge supporting cross-chain transactions with verified formal proofs and automated liquidity rebalancing.',
    technologies: ['Solidity', 'Node.js', 'AWS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI_-b1VPoMdaX-FVQDTC6cAOFCAGJh4Yx9fkqjx2VQj_RxhpBpj4CzwzDzXM6vYKaqa6XaV8F8TiPMH5wOmPkYY6tWnFS3UJVN_tntkx1Wy1SmYiT0oe48zfSZ6vPnGiFKCOHc3C2Ac1OkwLimWWd_sShfr3BnNOxMsAoOtTax_hoWTvoRuEiRDgu0xnC6GfM4NOEsoDxRp-VNcDDSA0aMxs7E17yXvir0m-_gsbSSKjFzgcgOEdxRSL7fdU-LOLM47KNlOCpLeQ',
    imageAlt: 'Abstract geometric shapes rendered in three dimensions.',
  },
  {
    title: 'Zenith OS',
    description: 'A custom-built UNIX-like kernel and shell environment optimized for low-power ARM architecture and embedded systems.',
    technologies: ['C++', 'Assembly', 'ARM'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEnT2ln24H1SAIEFEY9szV1ATSKIn8dKrkf2RY9GnxS6hKoLAGoF90JOSAxgrundLfQbzZTBp5wspME0JXhhYafCh2kx9Z0dAUsph-Jph53OBHZWBlhUQdr4ucS0r-HYHrtqp9uXfzBzCzkjErHLsd566lNl_164X_VpeDhcBfgUybiu5-h3gXpyj1qD6l3REnLCU9o_QCer3ksMlGR75uppuxLkSGWpNb_Ue7op7BLiM1LwhpPfeebrx9AruuoWqstGxil60jIA',
    imageAlt: 'A modern, minimalist workstation in a bright room.',
  },
  {
    title: 'Neural Mesh',
    description: 'Distributed machine learning platform for federated training across untrusted hardware providers with privacy-preserving encryption.',
    technologies: ['Python', 'PyTorch', 'Docker'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATO5Gnny5ifB8HvatRXPDnj04T8LRM5RAFbSzRK7UZ2Lk2u_jjVp31IL3lvNh1468LlGGZFGzTeipDAn8CaQtwUUO58xSjrheJJELnbtb22NhIoACXkcHKNJAHSkaw3I40eWzTBBGkF6UguKK1QhSKjrijW4zdNx4ApYfEXTQoXpU4y--JmFbfcCb_TpvmLPKcNTP3sM_GW8AOoNUFsNU41OaeB9_BWq5ISDw_HRCo7nECrlLIuDWKPRfOq2whC03ZaJMo4m4QFg',
    imageAlt: 'A digital visualization of an interconnected neural network.',
  },
]
</script>

<template>
  <main class="min-h-screen">
    <section v-reveal class="mx-auto max-w-container-max px-gutter pt-section-gap-sm pb-16">
      <div class="max-w-[720px]">
        <h1 class="mb-6 font-display text-5xl leading-tight text-on-surface md:text-6xl">Selected Work</h1>
      </div>
    </section>

    <section class="mx-auto max-w-container-max px-gutter pb-section-gap-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="project in projects" :key="project.title" v-reveal class="project-card group flex flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:border-primary-container hover:shadow-xl">
          <div class="aspect-video overflow-hidden bg-surface-container">
            <img :alt="project.imageAlt" :src="project.image" class="project-image h-full w-full object-cover transition-transform duration-500">
          </div>
          <div class="flex grow flex-col p-6 md:p-8">
            <div class="mb-4 flex items-start justify-between">
              <h2 class="font-display text-2xl text-on-surface">{{ project.title }}</h2>
              <span class="material-symbols-outlined text-xl text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">arrow_outward</span>
            </div>
            <p class="mb-6 line-clamp-3 font-body text-secondary">{{ project.description }}</p>
            <div class="mt-auto flex flex-wrap gap-2">
              <span v-for="technology in project.technologies" :key="technology" class="rounded bg-surface-container-high px-3 py-1 font-label text-xs font-bold text-on-surface-variant">
                {{ technology }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.project-card:hover {
  transform: translateY(-8px);
}

.project-card:hover .project-image {
  transform: scale(1.02);
}
</style>
