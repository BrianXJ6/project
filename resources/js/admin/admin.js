// Environment
import './config/environment';

// Config local
import './config/axios';

// Router / Store
import router from './router';
import store from './store';

// Start
const app = new Vue({ router, store }).$mount('#app');
