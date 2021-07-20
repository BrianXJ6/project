<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;
use App\Http\Controllers\Auth\LoginController;

Route::get('', [WebController::class, 'home'])->name('home');

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

/*
// Auth routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
Route::post('password/confirm', 'Auth\ConfirmPasswordController@confirm');
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
*/
