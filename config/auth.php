<?php

return [
    'defaults' => ['guard' => 'user', 'passwords' => 'users'],

    'guards' => [
        'admin'    => ['driver' => 'session', 'provider' => 'users'],
        'user'     => ['driver' => 'session', 'provider' => 'users'],
        'adminApi' => ['driver' => 'token', 'provider' => 'users', 'hash' => true],
        'userApi'  => ['driver' => 'token', 'provider' => 'users', 'hash' => true],
    ],

    'providers' => [
        'users' => ['driver' => 'eloquent', 'model' => App\Models\User::class],
    ],

    'passwords' => [
        'users' => ['provider' => 'users', 'table' => 'password_resets', 'expire' => 60, 'throttle' => 60],
    ],

    'password_timeout' => 10800,
];
