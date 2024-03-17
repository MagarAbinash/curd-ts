<script setup lang="ts">
import NavigationBar from './components/sidebar/NavigationBar.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar">
      <span class="pa-2">CRUD App</span>
    </v-app-bar>

    <NavigationBar />

    <v-main class="d-flex align-center justify-center flex-fill">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped>
.underline {
  text-decoration: underline;
}
</style>
