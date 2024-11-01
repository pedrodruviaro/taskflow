import 'primeicons/primeicons.css'
import '@/assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import { AppPreset } from '@/assets/presets/Aura'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from '@/libs/firebase'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})

app.use(PrimeVue, {
  theme: {
    preset: AppPreset,
    options: {
      darkModeSelector: false || 'none',
    },
  },
})

app.use(ToastService)

app.use(router)

app.mount('#app')
