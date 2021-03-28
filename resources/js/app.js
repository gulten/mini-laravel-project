require('./bootstrap');

window.Vue = require('vue').default;
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import vuetify from './plugins/vuetify';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import exportingInit from 'highcharts/modules/exporting'

import router from './router';
import App from './layouts/App.vue';

Vue.use(HighchartsVue, {
    highcharts: Highcharts
});
exportingInit(Highcharts);

const app = new Vue({
    router,
    vuetify,
    el: '#app',
    render: h => h(App)
});
