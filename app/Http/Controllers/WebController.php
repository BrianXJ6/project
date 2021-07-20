<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;

class WebController extends Controller {

    public function __construct() {
        $this->middleware('auth:user')->only('userDashboard');
        $this->middleware('auth:admin')->only('adminDashboard');
    }

    // View da página Home
    public function home() {
        $header = [
            'subtitle'    => 'Início',
            'description' => 'da página Início',
            'keywords'    => 'da página Início',
        ];
        return view('web.home', compact('header'));
    }

    // View para dashboard Cliente
    public function userDashboard() {
        return view('layouts.app')->with([
            'environment' => 'user',
            'subtitle'    => 'Dashboard para cliente'
        ]);
    }

    // View para dashboard Admin
    public function adminDashboard() {
        return view('layouts.app')->with([
            'environment' => 'admin',
            'subtitle'    => 'Dashboard para Admin'
        ]);
    }
}
