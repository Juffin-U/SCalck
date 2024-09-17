import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const meta = document.createElement('meta')
const app = createApp(App)
document.head.appendChild(meta)

app.use(createPinia())
app.use(router)

app.mount('#app')
