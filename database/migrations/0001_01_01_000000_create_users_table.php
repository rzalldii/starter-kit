<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('password');
            $table->string('role', 20)->default('user')->index();
            $table->boolean('is_primary')->default(false);
            $table->rememberToken();
            $table->timestamp('remember_token_created_at')->nullable();
            $table->string('full_name')->nullable();
            $table->string('email')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone_number')->nullable();
            $table->text('address')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });

        if (DB::getDriverName() === 'mysql') {
            DB::statement('ALTER TABLE users ADD username_lock VARCHAR(255) AS (IF(deleted_at IS NULL, username, NULL)) STORED');
            DB::statement('ALTER TABLE users ADD UNIQUE INDEX unique_username_lock (username_lock)');
            DB::statement('ALTER TABLE users ADD email_lock VARCHAR(255) AS (IF(deleted_at IS NULL, email, NULL)) STORED');
            DB::statement('ALTER TABLE users ADD UNIQUE INDEX unique_email_lock (email_lock)');
            DB::statement('ALTER TABLE users ADD phone_number_lock VARCHAR(255) AS (IF(deleted_at IS NULL, phone_number, NULL)) STORED');
            DB::statement('ALTER TABLE users ADD UNIQUE INDEX unique_phone_number_lock (phone_number_lock)');
            DB::statement('ALTER TABLE users ADD primary_lock TINYINT AS (IF(is_primary = 1, 1, NULL)) STORED');
            DB::statement('ALTER TABLE users ADD UNIQUE INDEX unique_primary_lock (primary_lock)');
        }

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
    }
};
