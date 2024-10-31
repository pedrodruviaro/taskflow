import '@/assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { Noir } from '@/assets/presets/Noir'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Noir,
  },
})
app.use(router)

app.mount('#app')
