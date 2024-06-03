<script setup>
    import { inject, ref } from 'vue';
    import Grandson from "./DrillingGrandson.vue";

    const propsCount = inject("count");
    
</script>

<template>
    <h2>child : {{ propsCount }}</h2>
    <Grandson />
</template>