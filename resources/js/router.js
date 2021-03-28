
import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './pages/Dashboard.vue';
import Datatable from './pages/Datatable.vue';
import Login from './pages/sessions/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/datatable',
            name: 'datatable',
            component: Datatable
        },
        {
            path: '/',
            name: 'login',
            component: Login
        },
    ]
});

export default router;
