<template>
    <form @submit.prevent="sendPassForgotForm">
        <div class="form-group">
            <label for="passForgot.email" class="m-0">E-mail</label>
            <input id="passForgot.email" class="form-control form-control-sm" autofocus type="email" autocomplete="email" placeholder="exemplo@email.com" required maxlength="100" v-model="passForgot.email">
        </div>
        <div class="text-right">
            <div v-if="passForgotLoader" class="spinner-border align-middle mr-2"></div>
            <button type="submit" class="btn btn-sm btn-outline-dark rounded-pill" :disabled="passForgotLoader">Enviar</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            laravelRoutes: { required: true, type: Object },
        },

        data: () => {
            return {
                passForgotLoader: false,
                passForgot: { email: 'brianferreira15@hotmail.com' },
            };
        },

        methods: {
            async sendPassForgotForm() {
                this.passForgotLoader = true;
                try {
                    const response = await axios.post(this.laravelRoutes['password.forgot'], this.passForgot);
                    this.$snotify.success(response.data.message).on('beforeHide', () => location.href = '/');
                } catch (error) { this.$showErrors(error, this.$snotify); }
                this.passForgotLoader = false;
            }
        }
    }
</script>
