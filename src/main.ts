import 'primeicons/primeicons.css'
import '@/assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { Noir } from '@/assets/presets/Noir'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/libs/firebase'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.use(PrimeVue, {
  theme: {
    preset: Noir,
  },
})

app.use(router)

app.mount('#app')
