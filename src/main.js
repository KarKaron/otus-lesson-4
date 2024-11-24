import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Material from "@primevue/themes/material";
import ToastService from 'primevue/toastservice';
import axios from "axios";
import VueAxios from "vue-axios";

import "primeicons/primeicons.css";
import "./assets/main.css";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      darkModeSelector: ".theme-dark"
    }
  }
});
app.use(ToastService);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios'

app.mount("#app");
