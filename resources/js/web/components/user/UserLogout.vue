<template>
    <a class="pointer" @click.prevent="processLogout">{{ label }}</a>
</template>

<script>
    export default {
        props: {
            laravelRoutes: { required: true, type: Object },
            label: { required: false, type: String, default: 'Sair' }
        },

        data: () => {
            return {
                spinerHtml: '<div class="spinner-border text-light mx-auto"></div>'
            };
        },

        methods: {
            processLogout() {
                this.$snotify.confirm('Deseja realmente sair?', {
                    backdrop: 0.7,
                    buttons: [
                        { text: 'Sim', action: (toast) => this.logout(toast) },
                        { text: 'Não', action: (toast) => this.$snotify.remove(toast.id) },
                    ]
                });
            },

            async logout(toast) {
                toast.config.html = this.spinerHtml;
                try {
                    await axios.post(this.laravelRoutes['user.logout']);
                    localStorage.removeItem('userObj');
                    localStorage.removeItem('userToken');
                    location.href = '/';
                } catch (error) { this.$showErrors(error, this.$snotify); }
                this.$snotify.remove(toast.id);
            }
        }
    }
</script>
