<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import Prism from 'prismjs';

    const code = ref("");
</script>
<template>
    <div class="flex flex-row justify-evenly justify-items-stretch p-10 gap-3 items-stretch flex-1">
        <div class="bg-stone-700 p-6 rounded-lg flex-1 font-serif overflow-auto">
            <slot></slot>
        </div>
        <div class="flex flex-col justify-evenly items-stretch gap-3 flex-1">
            <div class="bg-stone-600 p-6 rounded-lg flex flex-col items-stretch flex-1">
                <div class="flex flex-row gap-2 mb-6">
                    <div class="rounded-full p-2 bg-red-500"></div>
                    <div class="rounded-full p-2 bg-yellow-500"></div>
                    <div class="rounded-full p-2 bg-green-500"></div>
                </div>
                <div class="flex-1 relative">
                    <textarea class="absolute top-0 z-0 bg-transparent focus:outline-none h-[100%] w-[100%] resize-none font-mono" v-model="code"></textarea>
                    <pre class="absolute top-0 z-1 pointer-events-none font-mono"><code v-html="Prism.highlight(code, Prism.languages.javascript, 'javascript')"></code></pre>
                </div>
            </div>
            <div class="bg-white p-6 rounded-lg flex-1 font-sans"></div>
        </div>
    </div>
</template>