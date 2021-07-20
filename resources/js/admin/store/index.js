import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const adminObj = localStorage.getItem('adminObj');
const adminToken = localStorage.getItem('adminToken');

export default new Vuex.Store({
    state: () => ({
        laravelRoutes: null,
        user: (adminObj) ? JSON.parse(adminObj) : null,
        token: (adminToken) ? adminToken : null,
    }),

    mutations: {
        setUser: (state, obj) => state.user = obj,
        setLaravelRoutes: (state, obj) => state.laravelRoutes = obj,
    },

    actions: {},

    getters: {
        getUser: (state) => state.user,
        getLaravelRoutes: (state) => state.laravelRoutes,
    }
});
