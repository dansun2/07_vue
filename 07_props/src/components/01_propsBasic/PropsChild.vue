<script setup>
    import {inject} from 'vue';

    // inject : 주입하다
    // inject("전달한 key값");
    const { message } = inject('data');
    const darkMode = inject("darkMode");
    const darkState = inject("darkState");
</script>

<template>
    <h3> 전달 받은 props : {{ message }}</h3>
    <button @click="darkMode"> 자식의 DarkMode +  {{ darkState }} </button>
</template>