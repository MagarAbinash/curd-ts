<script lang="ts" setup>
import { VForm } from "vuetify/components";
import { peopleState } from "../../state/people";
import { computed, onUnmounted, reactive, ref } from "vue";
import { required, maxLen, numberOnly } from "../../utils/validation";
import { People } from "../../Models/People";
import { useRouter } from "vue-router";

const store = peopleState();
const router = useRouter();
let person: People = reactive({
  firstName: "",
  lastName: "",
  address: "",
  age: "",
  gender: "",
  occupation: "",
});
const selectedPeep = computed(() => {
  const peep = store.selectedPeep;
  if (peep) person = peep;
  return peep;
});
const form = ref<InstanceType<typeof VForm> | null>(null);

onUnmounted(() => {
  store.selectPeep(null);
});

function clearPerson() {
  person.firstName = "";
  person.lastName = "";
  person.address = "";
  person.age = "";
  person.gender = "";
  person.occupation = "";
}

async function submit() {
  if (form.value) {
    const isValid = await form.value.validate();
    if (!isValid.valid) {
      return;
    }

    if (selectedPeep.value) {
      person.id = selectedPeep.value?.id;
      // alert(JSON.stringify(person));
      store.updatePeep(person);
    } else {
      // alert(JSON.stringify(person));
      store.addPeep(person);
    }
    clearPerson();
    form.value.resetValidation();
    router.push("/");
  }
}
</script>

<template>
  <div class="d-flex flex-fill justify-center align-center ma-4">
    <v-card width="60%" class="ma-4 pa-4">
      <v-card-title class="title text-center font-weight-bold">
        {{ selectedPeep ? "Udpate" : "Add" }} Person
      </v-card-title>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                variant="outlined"
                label="First Name"
                v-model="person.firstName"
                :rules="[required, maxLen(person.firstName, 20)]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                variant="outlined"
                label="Last Name"
                v-model="person.lastName"
                :rules="[required, maxLen(person.lastName, 20)]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Address"
                v-model="person.address"
                :rules="[required, maxLen(person.address, 50)]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                variant="outlined"
                label="Age"
                v-model="person.age"
                :rules="[required, numberOnly]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-select
                v-model="person.gender"
                :items="['Male', 'Female']"
                label="Gender"
                variant="outlined"
                :rules="[required]"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                label="Occupation"
                v-model="person.occupation"
                :rules="[required, maxLen(person.firstName, 30)]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" align="center">
            <v-col sm="6" md="4">
              <v-btn
                width="100%"
                color="primary"
                rounded
                flat
                @click="submit"
                >{{ selectedPeep ? "Udpate" : "Submit" }}</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
