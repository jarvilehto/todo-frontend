import "./assets/main.css";
import dotenv from "dotenv";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

dotenv.config();

const app = createApp(App);

app.use(router);

app.mount("#app");
