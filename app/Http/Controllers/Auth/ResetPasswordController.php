<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class ResetPasswordController extends Controller {

    protected $user;
    protected $token;
    protected $redirect;
    protected $isAdmin;

    // Tela para resertar senha de usuários
    public function showResetForm(Request $request) {
        $header = [
            'subtitle'    => 'Resetar senha',
            'description' => 'Descrição da página Resetar senha',
            'keywords'    => 'Keywords da página Resetar senha',
        ];
        return view('web.passreset', compact('header'))->with([
            'token' => $request->route()->parameter('token'),
            'email' => $request->email,
        ]);
    }

    // Processo para resetar senha dos usuários
    public function reset(Request $request) {
        $request->validate([
            'token'    => ['required'],
            'email'    => ['required', 'email'],
            'password' => ['required', 'confirmed', 'min:8'],
        ]);
        $response = $this->broker()->reset($request->only('email', 'password', 'password_confirmation', 'token'), fn ($user, $password) => $this->resetPassword($user, $password));
        if ($response != Password::PASSWORD_RESET) throw ValidationException::withMessages(['email' => [trans($response)]]);
        return response()->json([
            'user'     => $this->user,
            'token'    => $this->token,
            'redirect' => $this->redirect,
            'isAdmin'  => $this->isAdmin,
            'message'  => trans($response),
        ]);
    }

    // Preparando usuário para mudanças
    protected function resetPassword($user, $password) {
        $this->isAdmin = $isAdmin = ($user->admin) ? true : false;
        $user->password = bcrypt($password);
        $user->setRememberToken(Str::random(60));
        $this->user     = $user;
        $this->token    = $user->generateApiToken();
        $this->redirect = redirect()->intended($isAdmin ? RouteServiceProvider::ADMIN : RouteServiceProvider::USER)->getTargetUrl();
        event(new PasswordReset($user));
        if ($isAdmin) $guard = $this->guard('admin')->login($user);
        else $guard = $this->guard('user')->login($user);
    }

    // Bronker para resertar senha
    public function broker() {
        return Password::broker();
    }

    // Guard
    protected function guard(String $guard) {
        return Auth::guard($guard);
    }
}
