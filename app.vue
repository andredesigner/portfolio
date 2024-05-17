<script setup>
</script>

<template>
    <NuxtPage/>
</template>

<style>
.page-leave-active {
    transition: all 0.8s;
}

.page-enter-active{
    transition: all 0.8s;
}

.page-enter-from{
    opacity: 0;
    filter: blur(10px);
    transform: translate(-100px, 0);
}

.page-leave-to {
    opacity: 0;
    filter: blur(10px);
    transform: translate(50px, 0);
}
</style>
