<script setup lang="ts">
import NavigationBar from './components/sidebar/NavigationBar.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar class="text-primary" title="CRUD APP">
    </v-app-bar>

    <NavigationBar />

    <v-main class="d-flex align-center justify-center flex-fill">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style>
.text-primary {
  color: #1859a9;
}
</style>
