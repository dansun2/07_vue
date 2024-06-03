<script setup>
    import {inject} from 'vue';

    const darkMode = inject("darkMode");
</script>

<template>
    <button @click="darkMode"> Dark Mode vue 다크 모드</button>
</template>