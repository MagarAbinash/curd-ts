<script setup lang="ts"></script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/" active-class="underline">Go to Home</RouterLink>
    <RouterLink to="/table" active-class="underline">Go to Table</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
