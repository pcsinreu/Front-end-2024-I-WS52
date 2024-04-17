import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask'
import i18n from "@/locales/i18n.js";
import router from '@/router.js'


const app = createApp(App);

app.use(PrimeVue); // inyección de depencias
app.use(i18n);
app.use(router)


app.component('pv-button',Button)
app.component('pv-calendar',Calendar)
app.component('pv-rating',Rating)
app.component('pv-input-text',InputText)
app.component('pv-input-mask',InputMask)

app.mount('#app')