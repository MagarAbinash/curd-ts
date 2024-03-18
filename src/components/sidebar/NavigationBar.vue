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
</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <template v-for="item in navItems" :key="item.text">
        <v-list-item
          class="ma-4 pa-2 rounded"
          :class="{ 'active text-primary': item.path === route.path, 'unactive': item.path != route.path }"
          @click="goTo(item.path)"
          >{{ item.text }}</v-list-item
        >
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.active {
    background-color: #e4e4e4;
}
.unactive {
    background-color: white;
    color: black;
}
</style>
