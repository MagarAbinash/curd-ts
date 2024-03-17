<script setup lang="ts">
import { computed } from "vue";
import { peopleState } from "../../state/people"

const store = peopleState();
const peeps = computed(() => store.peeps)
</script>

<template>
    <div>
        Here goes the table for the data CURD
        {{ peeps }}
    </div>
</template>