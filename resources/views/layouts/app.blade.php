@inject('rtService', 'App\Services\RouteService')
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no">
    <title>{{ config('app.name') }} - {{ $subtitle }}</title>
    <script src="{{ mix('js/manifest.js') }}" defer></script>
    <script src="{{ mix('js/vendor.js') }}" defer></script>
    <script src="{{ mix('js/'. $environment .'.js') }}" defer></script>
    <link href="{{ mix('css/'. $environment .'.css') }}" rel="stylesheet">
</head>
<body class="h-100">
    <div id="app" class="h-100">
        <router-view class="h-100 d-flex flex-column" :laravel-routes="{{ json_encode($rtService->laravelRoutes()) }}"
            :logged="{{ Auth::guard('user')->user() }}"></router-view>
        <vue-snotify></vue-snotify>
    </div>
</body>
</html>
