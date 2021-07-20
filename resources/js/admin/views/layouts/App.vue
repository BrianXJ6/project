<template>
    <div>
        <header class="flex-shrink-0">
            <nav class="navbar navbar-expand-md navbar-dark bg-success shadow-lg">
                <a class="navbar-brand" href="/">{{ appName }}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="main-navbar">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'dashboard'}">Início</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle pointer" data-toggle="dropdown">Olá {{ logged.name.split(' ')[0] }}</a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <router-link class="dropdown-item" :to="{name: 'profile'}">Perfil</router-link>
                                <div class="dropdown-divider"></div>
                                <AdminLogout :laravel-routes="laravelRoutes" class="dropdown-item" />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <main class="container-fluid flex-shrink-0 my-5">
            <router-view></router-view>
        </main>
        <footer class="mt-auto small bg-success text-light shadow-lg-inverse py-2">
            <div class="container-fluid small">
                <span>{{ appName }}&reg;</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import AdminLogout from './../../../web/components/admin/AdminLogout';
    export default {
        components: { AdminLogout },

        props: {
            laravelRoutes: { required: true, type: Object },
            logged: { required: true, type: Object, default: null },
        },

        data: () => {
            return {
                appName: process.env.MIX_APP_NAME,
            };
        },

        created() {
            this.$store.commit('setUser', this.logged);
            this.$store.commit('setLaravelRoutes', this.laravelRoutes);
        }
    }
</script>
