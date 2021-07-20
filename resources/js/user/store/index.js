import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userObj = localStorage.getItem('userObj');
const userToken = localStorage.getItem('userToken');

export default new Vuex.Store({
    state: () => ({
        laravelRoutes: null,
        user: (userObj) ? JSON.parse(userObj) : null,
        token: (userToken) ? userToken : null,
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
