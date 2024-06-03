<script setup>
    import {ref} from 'vue';
    import DynamicChild from './DynamicChild.vue';
    
    const dynamicName = ref("");
    const image = ref("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAzMThfMTg4%2FMDAxNzEwNzUxMDE2MTE4.hoNyIeAanaZaTa9hLFaMna4v6rIJ3TLvB6TDulMzya0g.P-0a2_SDNlVvw9X8UdSxGsqUpKH862_eAjeByTFTxSkg.JPEG%2F%25B0%25AD%25BE%25C6%25C1%25F6_%25B8%25B6%25C5%25B7_%25B0%25FC%25B8%25AE%25BF%25CD_%25BF%25B9%25B9%25E6%25B9%25E6%25B9%25FD_%25288%2529.jpg&type=a340");
</script>

<template>
    <div>
        <h1>DynamicSlot : </h1>
        <input v-model="dynamicName"/> <!--v-model은 양방향 바인딩-->
        <DynamicChild>
            <template #[dynamicName]>
                <img :src="image" alt="dynamic image" />
            </template>
        </DynamicChild>
    </div>
</template>

<style scoped>
    .parentsContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;
    }
</style>