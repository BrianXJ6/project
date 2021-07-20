<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail {

    use Notifiable, SoftDeletes;

    protected $fillable = ['name', 'email', 'password'];
    protected $hidden   = ['password', 'remember_token', 'api_token'];
    protected $casts    = ['email_verified_at' => 'datetime'];

    // Passwords
    public function sendPasswordResetNotification($token) {
        $this->notify(new ResetPassword($token));
    }
    // Tokens
    public function generateApiToken($save = true) {
        $plainToken = Str::random(80);
        $this->forceFill(['api_token' => hash('sha256', $plainToken)]);
        if ($save) $this->save();
        return $plainToken;
    }

    public function invalidateApiToken($save = true) {
        $this->forceFill(['api_token' => null]);
        if ($save) $this->save();
    }
}
