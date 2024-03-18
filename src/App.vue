<script setup lang="ts">
import { computed } from "vue";
import NavigationBar from "./components/sidebar/NavigationBar.vue";
import { messageState } from "./state/message";

const messageStore = messageState();

const show = computed({
    get() {
      return messageStore.show;
    },
    set(_) {
      closeMessage();
    }
  });

function closeMessage() {
  messageStore.hideMessage();
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-snackbar
      v-model="show"
      :color="messageStore.color"
      variant="outlined"
      location="bottom right"
      timer
      :timeout="messageStore.timer"
    >
      {{ messageStore.message }}
      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="closeMessage"> Close </v-btn>
      </template>
    </v-snackbar>
    <v-app-bar class="text-primary" title="CRUD APP"> </v-app-bar>

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
