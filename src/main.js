import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/lara-dark-pink/theme.css'
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue); // inyección de depencias
app.component('pv-button',Button)

app.mount('#app')