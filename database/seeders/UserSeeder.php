<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder {

    public function run() {
        DB::table('users')->insert([
            'name'     => 'Brian Ferreira de Barros',
            'email'    => 'brianferreira15@hotmail.com',
            'password' => bcrypt('321321321'),
        ]);
    }
}
