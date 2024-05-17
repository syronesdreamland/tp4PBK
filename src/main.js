import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Makanan from './components/Makanan.vue'
import Minuman from './components/Minuman.vue'
import Snack from './components/Snack.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('Makanan', Makanan)
app.component('Minuman', Minuman)
app.component('Snack', Snack)


