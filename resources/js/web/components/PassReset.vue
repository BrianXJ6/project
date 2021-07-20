<template>
    <form @submit.prevent="sendPassResetForm">
        <div class="form-group">
            <label for="passReset.email" class="m-0">E-mail</label>
            <input id="passReset.email" class="form-control form-control-sm" autofocus type="email" autocomplete="email" placeholder="exemplo@email.com" required maxlength="100" v-model="passReset.email">
        </div>
        <div class="form-group">
            <label for="passReset.password" class="m-0">Senha</label>
            <input id="passReset.password" class="form-control form-control-sm" type="password" placeholder="********" required minlength="8" v-model="passReset.password">
        </div>
        <div class="form-group">
            <label for="passReset.password_confirmation" class="m-0">Confirmar senha</label>
            <input id="passReset.password_confirmation" class="form-control form-control-sm" type="password" placeholder="********" required minlength="8" v-model="passReset.password_confirmation">
        </div>
        <div class="text-right">
            <div v-if="passResetLoader" class="spinner-border align-middle mr-2"></div>
            <button type="submit" class="btn btn-sm btn-outline-dark rounded-pill" :disabled="passResetLoader">Logar</button>
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            laravelRoutes: { required: true, type: Object },
            requestEmail: { required: true, type: String, default: '' },
            requestToken: { required: true, type: String, default: '' },
        },

        data: () => {
            return {
                passResetLoader: false,
                passReset: { token: '', email: '', password: '', password_confirmation: '' }
            };
        },

        methods: {
            async sendPassResetForm() {
                this.passResetLoader = true;
                try {
                    const response = await axios.post(this.laravelRoutes['password.update'], this.passReset);
                    const { user, token, redirect, isAdmin, message } = response.data;
                    if (isAdmin) {
                        localStorage.setItem('adminObj', JSON.stringify(user));
                        localStorage.setItem('adminToken', token);
                    } else {
                        localStorage.setItem('userObj', JSON.stringify(user));
                        localStorage.setItem('userToken', token);
                    }
                    this.$snotify.success(response.data.message).on('beforeHide', () => location.href = redirect);
                } catch (error) { this.$showErrors(error, this.$snotify); }
                this.passResetLoader = false;
            },

            resetPassResetForm() {
                this.passReset = { token: this.requestToken, email: this.requestEmail, password: '', password_confirmation: '' };
            }
        },

        created() {
            this.resetPassResetForm();
        }
    }
</script>
