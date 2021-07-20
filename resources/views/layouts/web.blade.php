@inject('rtService', 'App\Services\RouteService')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">
    <title>{{ config('app.name') }} - @yield('subtitle')</title>
    <meta name="DC.title" content="{{ config('app.name') }} - @yield('subtitle')" />
    <meta property="og:title" content="{{ config('app.name') }} - @yield('subtitle')" />
    <meta name="description" content="@yield('description')">
    <meta property="og:description" content="@yield('description')" />
    <meta name="abstract" content="@yield('description')" />
    <meta name="keywords" content="@yield('keywords')">
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:image" content="@yield('cover', asset(''))">
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="INDEX, FOLLOW" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/web.js') }}" defer></script>
    <link href="{{ mix('css/web.css') }}" rel="stylesheet">
</head>
<body class="h-100">
    <div id="app" class="h-100 d-flex flex-column">
        <header class="flex-shrink-0">
            <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-lg">
                <div class="container">
                    <a class="navbar-brand" href="{{ route('home') }}">{{ config('app.name') }}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main-navbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('home') }}">Início</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle pointer" data-toggle="dropdown">Cliente</a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    @guest('user')
                                    <a class="dropdown-item" href="{{ route('user.login') }}">Login</a>
                                    <a class="dropdown-item" href="#">Seja cliente</a>
                                    @else
                                    <a class="dropdown-item" href="{{ route('user.dashboard') }}">Dashboard</a>
                                    <div class="dropdown-divider"></div>
                                    <user-logout class="dropdown-item"
                                        :laravel-routes="{{ json_encode($rtService->laravelRoutes()) }}"></user-logout>
                                    @endguest
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main class="flex-shrink-0">
            @yield('content')
        </main>
        <footer class="mt-auto small bg-dark text-light shadow-lg-inverse py-2">
            <div class="container small d-flex justify-content-between">
                <span>2021 - {{ now()->year }} {{ config('app.name') }}&reg;</span>
                <div class="dropdown">
                    @if (url()->current() != route('admin.login'))
                    <a class="text-light pointer" data-toggle="dropdown">Admin</a>
                    <div class="dropdown-menu dropdown-menu-right">
                        @guest('admin')
                        <admin-login :laravel-routes="{{ json_encode($rtService->laravelRoutes()) }}" class="p-3"
                            style="width:290px"></admin-login>
                        @else
                        <a class="dropdown-item" href="{{ route('admin.dashboard') }}">Dashboard</a>
                        <div class="dropdown-divider"></div>
                        <admin-logout class="dropdown-item"
                            :laravel-routes="{{ json_encode($rtService->laravelRoutes()) }}"></admin-logout>
                        @endguest
                    </div>
                    @endif
                </div>
            </div>
        </footer>
        <vue-snotify></vue-snotify>
    </div>
    @stack('scripts')
</body>
</html>
