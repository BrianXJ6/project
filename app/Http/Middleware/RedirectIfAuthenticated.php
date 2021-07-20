<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class RedirectIfAuthenticated {

    public function handle(Request $request, Closure $next, ...$guards) {
        $guards = empty($guards) ? [null] : $guards;
        foreach ($guards as $guard)
            if (Auth::guard($guard)->check() && $guard == 'user') return redirect(RouteServiceProvider::USER);
            else if (Auth::guard($guard)->check() && $guard == 'admin') return redirect(RouteServiceProvider::ADMIN);
        return $next($request);
    }
}
