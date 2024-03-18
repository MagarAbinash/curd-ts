import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { People } from "../Models/People";
import { messageState } from "./message";

type PeopleState = {
  peeps: Array<People>;
  selectedPeep: People | null;
};

export const peopleState = defineStore("people", () => {
  const state: PeopleState = reactive({
    peeps: [],
    selectedPeep: null,
  });
  const peeps = computed(() => state.peeps);
  const selectedPeep = computed(() => state.selectedPeep);

  async function getPeeps() {
    //fetch peoples data
    const peepList = await fetch("http://localhost:3000/person")
      .then((res) => res.json())
      .then((body): Array<People> => body)
      .catch((err: Error) => messageState().showMessage(err.message, "error"));
    if (peepList) state.peeps = peepList;
  }

  async function addPeep(peep: People) {
    const resPeep = await fetch("http://localhost:3000/person", {
      method: "POST",
      body: JSON.stringify(peep),
    })
      .then((res) => res.json())
      .then((body) => {
        messageState().showMessage("Successfully added", "success");
        return body;
      })
      .catch((err: Error) => messageState().showMessage(err.message, "error"));
    if (resPeep) state.peeps.push(resPeep);
  }

  async function updatePeep(peep: People) {
    const resPeep = await fetch(`http://localhost:3000/person/${peep.id}`, {
      method: "PUT",
      body: JSON.stringify(peep),
    })
      .then((res) => res.json())
      .then((body) => {
        messageState().showMessage("Successfully updated", "success");
        return body;
      })
      .catch((err: Error) => messageState().showMessage(err.message, "error"));
    if (resPeep) {
      const index = state.peeps.findIndex((item) => item.id === resPeep.id);
      if (index != -1) state.peeps[index] = resPeep;
      else alert("failed to udpate");
    }
  }

  async function removePeep(peep: People) {
    const resPeep = await fetch(`http://localhost:3000/person/${peep.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((body) => {
        messageState().showMessage("Successfully removed", "success");
        return body;
      })
      .catch((err: Error) => messageState().showMessage(err.message, "error"));
    if (resPeep) {
      const index = state.peeps.findIndex((item) => item.id === resPeep.id);
      if (index != -1) state.peeps.splice(index, 1);
      else alert("failed to delete");
    }
  }

  function selectPeep(peep: People | null) {
    state.selectedPeep = peep;
  }

  return {
    state,
    peeps,
    selectedPeep,
    getPeeps,
    addPeep,
    updatePeep,
    removePeep,
    selectPeep,
  };
});
