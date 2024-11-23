import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Material from "@primevue/themes/material";

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

app.mount("#app");
