const { default: store } = require('../../store');
const environment = 'user';
const rtLogout = '/cliente/logout';
const rtLogin = '/cliente/login';

if (!store.state.token) forceLogout();
window.axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

// Interceptors
window.axios.interceptors.request.use(config => config, error => Promise.reject(error));
window.axios.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) forceLogout();
    return Promise.reject(error);
});

async function forceLogout() {
    await window.axios.post(rtLogout).then(() => {
        localStorage.removeItem(`${environment}Obj`);
        localStorage.removeItem(`${environment}Token`);
        delete window.axios.defaults.headers.common['Authorization'];
        location.href = rtLogin;
    });
}
