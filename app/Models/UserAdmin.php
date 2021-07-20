<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAdmin extends Model {

    protected $fillable = [];
    protected $hidden   = ['user_id'];
    protected $casts    = [];

    // Relationship
    public function user() {
        return $this->belongsTo(User::class);
    }
}
