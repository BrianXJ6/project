<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;

class ForgotPasswordController extends Controller {

    // Tela de recuperação de senha para usuários
    public function showLinkPassForgotForm() {
        $header = [
            'subtitle'    => 'Esqueci a senha',
            'description' => 'Descrição da página Esqueci a senha',
            'keywords'    => 'Keywords da página Esqueci a senha',
        ];
        return view('web.passforgot', compact('header'));
    }

    // Processo geral para redefinir senha
    public function sendResetLinkEmail(Request $request) {
        $request->validate(['email' => ['required', 'email']]);
        $response = $this->broker()->sendResetLink($request->only('email'));
        if ($response != Password::RESET_LINK_SENT) throw ValidationException::withMessages(['message' => [trans($response)]]);
        return response()->json(['message' => trans($response)]);
    }

    // Broker para redefinir senha
    protected function broker() {
        return Password::broker();
    }
}
