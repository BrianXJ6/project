<template>
    <form @submit.prevent="sendAdminLoginForm">
        <div class="form-group">
            <label for="adminLogin.email" class="m-0 d-flex justify-content-between align-items-baseline">E-mail</label>
            <input id="adminLogin.email" class="form-control form-control-sm" autofocus type="email" autocomplete="email" placeholder="exemplo@email.com" required v-model="adminLogin.email">
        </div>
        <div class="form-group">
            <label for="adminLogin.password" class="m-0 d-flex justify-content-between align-items-baseline">
                <span>Senha</span>
                <a :href="laravelRoutes['password.forgot']" class="small text-muted" tabindex="-1" title="Solicitar recuperação de senha">Esqueci a senha</a>
            </label>
            <input id="adminLogin.password" class="form-control form-control-sm" type="password" placeholder="********" required minlength="8" v-model="adminLogin.password">
        </div>
        <div class="text-right">
            <div v-if="adminLoginLoader" class="spinner-border align-middle mr-2"></div>
            <button type="submit" class="btn btn-sm btn-outline-dark rounded-pill" :disabled="adminLoginLoader">Logar</button>
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
                adminLoginLoader: false,
                adminLogin: { email: 'brianferreira15@hotmail.com', password: '321321321' }
            };
        },

        methods: {
            async sendAdminLoginForm() {
                this.adminLoginLoader = true;
                try {
                    const response = await axios.post(this.laravelRoutes['admin.login'], this.adminLogin);
                    const { user, token, redirect } = response.data;
                    localStorage.setItem('adminObj', JSON.stringify(user));
                    localStorage.setItem('adminToken', token);
                    this.$snotify.success(`Aguarde...`).on(location.href = redirect);
                } catch (error) { this.$showErrors(error, this.$snotify); }
                this.adminLoginLoader = false;
            }
        }
    }
</script>
