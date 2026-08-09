<script setup>
import { RouterView } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <AppFooter />
</template>
