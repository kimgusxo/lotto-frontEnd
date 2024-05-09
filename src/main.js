import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import './styles/global.css';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(createPinia())
  .mount('#app')

