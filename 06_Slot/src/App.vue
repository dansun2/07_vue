<script setup>
    import MyComponent from './components/01_component/MyComponent.vue';
    import Parents from './components/02_slotintro/SlotParents.vue';
</script>

<template>
    <div>
        <h1>component Container</h1>
        <MyComponent/>
    </div>

    <main>
    
    </main>
</template>

<!--
  현재 컴포넌트에서만 적용되는 스타일을 작성한다.
-->
<style scoped>
/* css를 정의하는 스코프 */
</style>