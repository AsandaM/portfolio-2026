const observers = new WeakMap()

export const reveal = {
  mounted(element) {
    element.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('opacity-100', 'translate-y-0')
            element.classList.remove('opacity-0', 'translate-y-10')
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    observers.set(element, observer)
    observer.observe(element)
  },
  unmounted(element) {
    observers.get(element)?.disconnect()
    observers.delete(element)
  },
}
