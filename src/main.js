import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

import App from './App.vue'
import router from './router'

//import en from './src/translations/en.json'
//import ua from './src/translations/ua.json'

import './assets/main.css'

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
