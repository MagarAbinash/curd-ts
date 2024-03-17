import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { People } from "../Models/People";

type PeopleState = {
    peeps: Array<People>;
};

export const peopleState = defineStore('people', () => {
    const state: PeopleState = reactive({
        peeps: [],
    });
    const peeps = computed(() => state.peeps);

    function getPeeps() {
        //fetch peoples data
    }

    function addPeep(peep: People) {
        state.peeps.push(peep);
    };

    function updatePeep(peep: People) {
        const index = state.peeps.findIndex((item) => item.id === peep.id);
        state.peeps[index] = peep;
    };

    function removePeep(peep: People) {
        const index = state.peeps.findIndex((item) => item.id === peep.id);
        state.peeps.splice(index, 1);
    };

    return { state, peeps, getPeeps, addPeep, updatePeep, removePeep }
})
