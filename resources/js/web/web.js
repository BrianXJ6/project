// Environment
import './config/environment';

// Config local
import './config/axios';

// Vue auto components
const files = require.context('./components/', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Start
const app = new Vue().$mount('#app');
