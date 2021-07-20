<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserAdminSeeder extends Seeder {

    public function run() {
        DB::table('user_admins')->insert([
            ['user_id' => 1, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
