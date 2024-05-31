<script setup>
    import MyComponent from './components/01_component/MyComponent.vue';
    import Parents from './components/02_slotintro/SlotParents.vue';
    import NamedParents from './components/03_slotnamed/NamedParents.vue';
</script>

<template>
    <div>
        <h1>component Container</h1>
        <MyComponent/>
    </div>

    <main>
        <Parents/>
        <div class="test">
          <NamedParents/>
        </div>
      
    </main>
</template>

<!--
  현재 컴포넌트에서만 적용되는 스타일을 작성한다.
-->
<style scoped>
.test{
  border: 1px solid red;
}
/* css를 정의하는 스코프 */
</style>