<script setup lang="ts">
    import { reactive, ref } from 'vue';
    import Prism from 'prismjs';

    const code = ref(`renderFeed(feed)`);

    const feed = [
        {
            poster: 'John Doe',
            content: 'What a wonderful day!'
        }
    ]

    function renderFeed(feed) {

    }

    function execute() {

    }
</script>
<template>
    <div class="flex flex-row justify-evenly justify-items-stretch p-10 gap-3 items-stretch flex-1">
        <div class="bg-stone-900 p-6 rounded-lg flex-1 font-serif overflow-auto shadow prose prose-invert prose-headings:font-sans prose-p:font-serif">
            <slot>
            </slot>
        </div>
        <div class="flex flex-col justify-evenly items-stretch gap-3 flex-1">
            <div class="bg-stone-600 p-6 rounded-lg flex flex-col items-stretch flex-1 shadow">
                <div class="flex flex-row gap-2 mb-6">
                    <div class="rounded-full p-2 bg-red-500"></div>
                    <div class="rounded-full p-2 bg-yellow-500"></div>
                    <div class="rounded-full p-2 bg-green-500"></div>
                </div>
                <div class="flex-1 relative">
                    <textarea class="absolute top-0 z-0 bg-transparent focus:outline-none h-[100%] w-[100%] resize-none font-mono" v-model="code"></textarea>
                    <pre class="absolute top-0 z-1 pointer-events-none font-mono"><code v-html="Prism.highlight(code, Prism.languages.python, 'python')"></code></pre>
                    <button class="bg-stone-500 border border-stone-400 px-2 py-1 absolute bottom-0 right-0 rounded hover:shadow-md transition" @click="execute">Run &rtrif;</button>
                </div>
            </div>
            <div class="bg-white rounded-lg flex-1 font-sans overflow-auto text-black shadow">
                <div class="sticky p-6 top-0 border-b backdrop-blur-sm bg-[#ffffffaa]">
                    <h1 class="font-sans text-2xl">Snapgram</h1>
                </div>
                
            </div>
        </div>
    </div>
</template>