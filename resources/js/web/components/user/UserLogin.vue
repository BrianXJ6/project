<template>
    <form @submit.prevent="sendUserLoginForm">
        <div class="form-group">
            <label for="userLogin.email" class="m-0 d-flex justify-content-between align-items-baseline">
                <span>E-mail</span>
                <a href="#" class="small text-muted" tabindex="-1" title="Criar nova conta">Criar conta</a>
            </label>
            <input id="userLogin.email" class="form-control form-control-sm" autofocus type="email" autocomplete="email" placeholder="exemplo@email.com" required maxlength="100" v-model="userLogin.email">
        </div>
        <div class="form-group">
            <label for="userLogin.password" class="m-0 d-flex justify-content-between align-items-baseline">
                <span>Senha</span>
                <a :href="laravelRoutes['password.forgot']" class="small text-muted" tabindex="-1" title="Solicitar recuperação de senha">Esqueci a senha</a>
            </label>
            <input id="userLogin.password" class="form-control form-control-sm" type="password" placeholder="********" required minlength="8" v-model="userLogin.password">
        </div>
        <div class="text-right">
            <div v-if="userLoginLoader" class="spinner-border align-middle mr-2"></div>
            <button type="submit" class="btn btn-sm btn-outline-dark rounded-pill" :disabled="userLoginLoader">Logar</button>
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
                userLoginLoader: false,
                userLogin: { email: 'brianferreira15@hotmail.com', password: '321321321' }
            };
        },

        methods: {
            async sendUserLoginForm() {
                this.userLoginLoader = true;
                try {
                    const response = await axios.post(this.laravelRoutes['user.login'], this.userLogin);
                    const { user, token, redirect } = response.data;
                    localStorage.setItem('userObj', JSON.stringify(user));
                    localStorage.setItem('userToken', token);
                    this.$snotify.success(`Aguarde...`).on(location.href = redirect);
                } catch (error) { this.$showErrors(error, this.$snotify); }
                this.userLoginLoader = false;
            }
        }
    }
</script>
