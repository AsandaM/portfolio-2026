import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './directives/reveal'
import router from './router'

createApp(App).directive('reveal', reveal).use(router).mount('#app')
