import {createI18n} from "vue-i18n";

import en from "@/locales/en.js";
import es from "@/locales/es.js";

const i18n = createI18n({
    locale:'es',
    messages:{
        en ,
        es,
        fr:{
            hello :'Bonjour v2',
            greet :'Bonjour {user}'
        }
    }
})

export  default  i18n;