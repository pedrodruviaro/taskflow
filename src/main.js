import './assets/main.css'
import 'primevue/resources/themes/aura-light-amber/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PriveVue from 'primevue/config'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './libs/firebase'

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.use(router)
app.use(PriveVue)

app.mount('#app')
