import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Url base do dashboard
const baseUrl = '/admin/dashboard';

// Routes
const routes = [{
    path: baseUrl,
    component: () => import('./../views/layouts/App'),
    children: [
        { path: '', name: 'dashboard', component: () => import('./../views/pages/home/Home') },
        { path: 'perfil', name: 'profile', component: () => import('./../views/pages/profile/Profile') },
    ]
}];

// Start
export default new VueRouter({ routes, mode: 'history' });

// <router-link to="/bar">Go to Bar</router-link>
// <router-view></router-view>
