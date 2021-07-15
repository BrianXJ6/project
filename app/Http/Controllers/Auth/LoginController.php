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

    // public function __construct() {
    //     $this->middleware('guest')->except('logout');
    // }

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

    public function logout(Request $request) {
        $this->guard()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([], 204);
    }

    protected function guard(String $name) {
        return Auth::guard($name);
    }
}
