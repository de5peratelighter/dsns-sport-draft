import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi',
    },
}

export default new Vuetify(opts)