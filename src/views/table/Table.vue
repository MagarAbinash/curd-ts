<script setup lang="ts">
import { computed, onMounted } from "vue";
import { peopleState } from "../../state/people";

const store = peopleState();
const peeps = computed(() => store.peeps);
const newPeep = {
  firstName: "Ashish",
  lastName: "Lama",
  age: "25",
  gender: "Male",
  occupation: "Student",
};

const updatePeep = {
  id: "2",
  firstName: "Udbodh",
  lastName: "Shrestha",
  age: "35",
  gender: "Male",
  occupation: "Engineer",
};

onMounted(() => {
    store.getPeeps();
})

function addNewPeep() {
  store.addPeep(newPeep);
}

function updateNewPeep() {
  store.updatePeep(updatePeep);
}

function removeNewPeep() {
  store.removePeep(updatePeep);
}
</script>

<template>
  <div>
    <h1>Here goes the table for the data CURD</h1>
    <div>
      {{ peeps }}
    </div>
    <button @click="addNewPeep">Add Peep</button>
    <button @click="updateNewPeep">Update Peep</button>
    <button @click="removeNewPeep">Remove Peep</button>
  </div>
</template>
