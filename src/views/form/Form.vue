<script lang="ts" setup>
import { peopleState } from "../../state/people";
import { computed, onUnmounted } from "vue";

const store = peopleState();
const selectedPeep = computed(() => store.selectedPeep);

onUnmounted(() => {
  store.selectPeep(null);
});
</script>

<template>
  <div class="d-flex flex-column flex-fill justify-center align-center">
    <h1 class="text-center">{{ selectedPeep ? "Udpate" : "Add" }} Person</h1>
    <div>
      {{ selectedPeep }}
    </div>
  </div>
</template>
