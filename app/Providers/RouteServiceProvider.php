<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider {

    public const USER  = '/cliente/dashboard';
    public const ADMIN = '/admin/dashboard';
    // protected $namespace = 'App\\Http\\Controllers';

    public function boot() {
        $this->configureRateLimiting();
        $this->routes(function () {
            Route::prefix('api')->middleware('api')->namespace($this->namespace)->group(base_path('routes/api.php'));
            Route::middleware('web')->namespace($this->namespace)->group(base_path('routes/web.php'));
        });
    }

    protected function configureRateLimiting() {
        RateLimiter::for('api', fn (Request $request) => Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip()));
    }
}
