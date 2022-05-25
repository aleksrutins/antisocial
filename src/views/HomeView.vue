<script setup lang="ts">
  import Welcome from "@/components/Welcome.vue"
  import { ref } from "vue";
  const component = ref(Welcome);
  function switchPage(newComponent: any) {
    component.value = newComponent;
  }
</script>

<template>
  <main class="bg-gradient-to-br from-orange-900 to-stone-900  text-white m-0 p-0 w-[100vw] h-[100vh] flex flex-row items-stretch font-sans justify-evenly">
    <component @switch-page="switchPage"/>
  </main>
</template>
