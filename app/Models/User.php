<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail {

    use Notifiable, SoftDeletes;

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden   = ['password', 'remember_token', 'api_token'];
    protected $casts    = ['email_verified_at' => 'datetime'];
}
