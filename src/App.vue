<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/table">Go to Table</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
