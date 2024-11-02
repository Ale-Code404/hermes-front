import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import PrimeVue from 'primevue/config'
// Styles
import './assets/main.css'
import './assets/base.css'

const app = createApp(App)

app.use(router).use(PrimeVue, {
  theme: 'none',
})

app.mount('#app')
