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
  goTo("/form");
}

function removePeep(peep: People) {
  store.removePeep(peep);
}

function goTo(path: string) {
  router.push(path);
}
</script>

<template>
  <div class="d-flex flex-column flex-fill justify-center ma-4 pa-4">
    <h1 class="text-center my-2 text-primary">Peoples Table</h1>
    <div>
      <v-btn color="primary" variant="outlined" @click="goTo('/form')"
        ><v-icon class="ma-2">fas fa-user</v-icon>Add Person</v-btn
      >
    </div>
    <v-table fixed-header>
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
              color="primary"
              variant="text"
              size="x-small"
              density="compact"
              icon="fas fa-pen-to-square"
            ></v-btn>
            <v-btn
              @click="removePeep(item)"
              flat
              color="warning"
              variant="text"
              size="x-small"
              density="compact"
              icon="fas fa-trash-can"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
