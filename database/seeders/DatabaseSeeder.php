<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::firstOrCreate(
            ['username' => 'admin'],
            [
                'password' => Hash::make('admin'),
                'role' => 'admin',
                'full_name' => 'Primary Administrator',
            ]
        );
        $admin->forceFill(['is_primary' => true, 'role' => 'admin'])->save();

        User::firstOrCreate(
            ['username' => 'admin1'],
            [
                'password' => Hash::make('admin1'),
                'role' => 'admin',
                'full_name' => 'Administrator',
                'is_primary' => false,
            ]
        );

        User::firstOrCreate(
            ['username' => 'user'],
            [
                'password' => Hash::make('user'),
                'role' => 'user',
                'full_name' => 'Regular User',
                'is_primary' => false,
            ]
        );

    }
}
