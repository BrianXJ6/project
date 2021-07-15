import Vue from 'vue';
Vue.use({
    install: (Vue) => {
        Vue.prototype.$showErrors = (err, snotify) => {
            if (!err) return;
            const { errors, message } = err.response.data;
            if (errors) Object.entries(errors).forEach(([k, v]) => v.forEach(msg => snotify.error(msg)));
            else snotify.error(message);
            return err;
        };
    }
});
