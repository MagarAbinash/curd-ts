<script setup lang="ts">
import { computed, onMounted } from "vue";
import { peopleState } from "../../state/people";
import { People } from "../../Models/People";
import { useRouter } from "vue-router";

const store = peopleState();
const peeps = computed(() => store.peeps);
const router = useRouter();

onMounted(() => {
  store.getPeeps();
});

function updatePeep(peep: People) {
  store.selectPeep(peep);
  router.push("/form");
}

function removePeep(peep: People) {
  store.removePeep(peep);
}
</script>

<template>
  <div class="d-flex flex-column flex-fill justify-center">
    <h1 class="text-center my-2 pa-2">Peoples Table</h1>

    <v-table fixed-header class="ma-4 pa-2">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Gender</th>
          <th class="text-center">Age</th>
          <th class="text-center">Occupation</th>
          <th class="text-cetner">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in peeps" :key="item.id">
          <td class="text-left">{{ `${item.firstName} ${item.lastName}` }}</td>
          <td class="text-left">{{ item.gender }}</td>
          <td class="text-center">{{ item.age }}</td>
          <td class="text-center">{{ item.occupation }}</td>
          <td class="d-flex justify-cetner align-center ga-3">
            <v-btn
              @click="updatePeep(item)"
              flat
              density="compact"
              icon="fas fa-pen-to-square"
            ></v-btn>
            <v-btn
              @click="removePeep(item)"
              flat
              density="compact"
              icon="fas fa-trash-can"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
