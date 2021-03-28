// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
        theme
    }
};

export default new Vuetify(opts)

