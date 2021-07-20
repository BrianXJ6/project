<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;

// Rotas WEB
Route::get('', [WebController::class, 'home'])->name('home');

// Rotas para clientes.
Route::prefix('cliente')->group(function () {
    // Guest
    Route::middleware(['guest:user'])->group(function () {
        Route::get('login', [LoginController::class, 'userShowLoginForm'])->name('user.login');
        Route::post('login', [LoginController::class, 'userWebLogin']);
    });
    // Auth
    Route::middleware(['auth:user'])->group(function () {
        Route::get('dashboard/{any?}', [WebController::class, 'userDashboard'])->where('any', '.*')->name('user.dashboard');
        Route::post('logout', [LoginController::class, 'userWebLogout'])->name('user.logout');
    });
});

// Rotas para admin.
Route::prefix('admin')->group(function () {
    // Guest
    Route::middleware(['guest:admin'])->group(function () {
        Route::get('login', [LoginController::class, 'adminShowLoginForm'])->name('admin.login');
        Route::post('login', [LoginController::class, 'adminWebLogin']);
    });
    // Auth
    Route::middleware(['auth:admin'])->group(function () {
        Route::get('dashboard/{any?}', [WebController::class, 'adminDashboard'])->where('any', '.*')->name('admin.dashboard');
        Route::post('logout', [LoginController::class, 'adminWebLogout'])->name('admin.logout');
    });
});

// Rotas auxiliares
Route::prefix('auth')->group(function () {
    Route::get('senha/redefinir', [ForgotPasswordController::class, 'showLinkPassForgotForm'])->name('password.forgot');
    Route::post('senha/redefinir', [ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::get('senha/resetar/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
    Route::post('senha/resetar', [ResetPasswordController::class, 'reset'])->name('password.update');
});

/*
// Auth routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');
Route::get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
Route::post('password/confirm', 'Auth\ConfirmPasswordController@confirm');
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
*/
