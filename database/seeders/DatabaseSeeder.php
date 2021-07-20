<?php

namespace Database\Seeders;

use App\Models\UserAdmin;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    public function run() {
        $this->call([
            UserSeeder::class,
            UserAdminSeeder::class,
        ]);
    }
}
