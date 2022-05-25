import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import prism from "vite-plugin-prismjs";
// import mdx from "@mdx-js/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), prism({
    languages: ["python"]
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
