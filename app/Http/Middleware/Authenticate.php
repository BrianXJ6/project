<?php

namespace App\Http\Middleware;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware {

    protected function unauthenticated($request, array $guards) {
        throw new AuthenticationException('Não autenticado.', $guards, $this->redirectCustom($request, $guards));
    }

    protected function redirectCustom($request, $guards) {
        if ($request->expectsJson()) return response()->json(['message' => 'Não autenticado'], 401);
        foreach ($guards as $guard)
            if ($guard == 'user') return route('user.login');
            else if ($guard == 'admin') return route('admin.login');
    }
}
