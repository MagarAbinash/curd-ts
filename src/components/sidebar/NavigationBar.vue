<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const navItems = [
  {
    path: "/",
    text: "Table",
  },
  {
    path: "/form",
    text: "Form",
  },
];

const router = useRouter();
const route = useRoute();

function goTo(path: string) {
  router.push(`${path}`);
}

function isActive(path: string) {
  return path === route.path;
}
</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <template v-for="item in navItems" :key="item.text">
        <v-list-item
          class="ma-4 pa-2 rounded"
          :class="{ 'active': isActive(item.path) }"
          @click="goTo(item.path)"
          >{{ item.text }}</v-list-item
        >
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.active {
    background-color: rgba(228, 228, 228, 0.01);
}
</style>
