<script setup lang="ts">
    import Intro from "./Intro.vue";
</script>
<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-9xl uppercase"><span class="text-red-500">Anti</span>social</h1>
        <hr class="border block w-36 m-11">
        <p class="text-sm">
        An experiment with <a href="https://vuejs.org">Vue</a> and <a href="https://tailwindcss.com">Tailwind</a> by <a href="https://github.com/aleksrutins">Aleks Rutins</a>
        </p>
        <a class="block text-md uppercase m-6" @click="$emit('switch-page', Intro)">Begin &rarr;</a>
    </div>
</template>