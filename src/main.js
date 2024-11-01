import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";

import router from "./router";

createApp(App).use(router).mount('#app');


