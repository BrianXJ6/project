<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller {

    protected $redirectToUser  = RouteServiceProvider::USER;
    protected $redirectToAdmin = RouteServiceProvider::ADMIN;

    public function __construct() {
        $this->middleware('guest:user')->only('userShowLoginForm', 'userWebLogin');
        $this->middleware('auth:user')->only('userWebLogout');
    }

    // Tela de login para cliente
    public function userShowLoginForm() {
        $header = [
            'subtitle'    => 'Login',
            'description' => 'da página Login',
            'keywords'    => 'da página Login',
        ];
        return view('web.user.login', compact('header'));
    }

    // Processo de login para usuários na WEB
    public function userWebLogin(Request $request) {
        $user = $this->login($request, 'user');
        return response()->json([
            'user'     => $user,
            'token'    => $user->generateApiToken(),
            'redirect' => redirect()->intended($this->redirectToUser)->getTargetUrl(),
        ]);
    }

    // Processo geral para logar usuários
    protected function login(Request $request, String $guard) {
        $request->validate([
            'email'    => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);
        $guard = $this->guard($guard);
        if (!$guard->attempt($request->only('email', 'password')))
            throw ValidationException::withMessages(['email' => [trans('auth.failed')]]);
        $request->session()->regenerate();
        return $guard->user();
    }

    // Processo de logout para user
    public function userWebLogout(Request $request) {
        $guard = $this->guard('user');
        $guard->user()->invalidateApiToken();
        $guard->logout();
        $request->session()->regenerateToken();
        return response()->json([], 204);
    }

    // Guard
    protected function guard(String $name) {
        return Auth::guard($name);
    }
}
