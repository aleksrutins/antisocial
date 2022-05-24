import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Prism from 'prismjs';
import "./index.css";
import "prismjs/themes/prism-tomorrow.css"

const app = createApp(App);

app.use(router);

app.mount("#app");
