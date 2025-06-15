import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import 'vuetify/styles'
import { vuetify } from '@/plugins/vuetify'


// pinia
import { createPinia } from 'pinia'
// persistencia
import { createPersistedState } from 'pinia-plugin-persistedstate'

// configuration persistencia
const pinia = createPinia()
pinia.use(createPersistedState())

// i18n
import { createI18n } from 'vue-i18n'
import { defaultLanguage, languages } from './I18n'

const i18n = createI18n({
    legacy: false,
    locale: defaultLanguage,
    fallbackLocale: defaultLanguage,
    messages: languages
})

const app = createApp(App)
app.use(vuetify)
   .use(router)
   .use(pinia)
   .use(i18n)
   .mount('#app')
