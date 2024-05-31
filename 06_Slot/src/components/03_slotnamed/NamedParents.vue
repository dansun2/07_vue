<script setup>
import { reactive } from 'vue';
import NameChild from './NamedChild.vue';

const obj = reactive({
    name : "vue",
    founder : "Evan you",
    img: "https://images.ctfassets.net/s5uo95nf6njh/2fEr6ctL9FxPtOPhUcM4FA/773007e573bfa16aebdb736f767b45fa/evan-you-hero.jpg"
});
</script>

<template>
    <div class="container">
        <h1>NamedSlot</h1>
        <NameChild></NameChild>
    </div>

</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
    }

    img{
        width: 200px;
        height: 200px;
    }
</style>