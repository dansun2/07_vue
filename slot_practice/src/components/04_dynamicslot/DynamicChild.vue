<script setup>
</script>

<template>
    <div class="container">
        <div class="north">
            <slot name="north"></slot>
        </div>
        <div class="east">
            <slot name="east"></slot>
        </div>
        <div class="west">
            <slot name="west"></slot>
        </div>
        <div class="south">
            <slot name="south"></slot>
        </div>
    </div>
</template>

<style>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}

</style>