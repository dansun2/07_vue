<script setup>
    import {ref} from 'vue';

    
    const dynamicName = ref("name");
</script>

<template>
    <div>
        <h1>DynamicSlot : </h1>
        <input v-model="dynamicName"/> <!--v-model은 양방향 바인딩-->
        <DynamicChild>
            <template #[dynamicName]>

            </template>
        </DynamicChild>
    </div>
</template>

<style scoped>

</style>