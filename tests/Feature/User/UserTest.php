<?php

declare(strict_types=1);

namespace Tests\Feature\User;

use App\Models\User\User;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(PreventRequestForgery::class);
    }

    public function test_primary_admin_can_create_admin_and_user(): void
    {
        $primaryAdmin = User::factory()->admin()->create([
            'is_primary' => true,
        ]);
        $responseAdmin = $this->actingAs($primaryAdmin)->postJson(route('users.store'), [
            'username' => 'new.admin',
            'password' => 'Password123',
            'role' => 'admin',
        ]);
        $responseAdmin->assertStatus(201);
        $this->assertDatabaseHas('users', [
            'username' => 'new.admin',
            'role' => 'admin',
        ]);
        $responseUser = $this->actingAs($primaryAdmin)->postJson(route('users.store'), [
            'username' => 'new.user',
            'password' => 'Password123',
            'role' => 'user',
        ]);
        $responseUser->assertStatus(201);
        $this->assertDatabaseHas('users', [
            'username' => 'new.user',
            'role' => 'user',
        ]);
    }

    public function test_regular_admin_cannot_create_admin_but_can_create_user(): void
    {
        $admin = User::factory()->admin()->create([
            'is_primary' => false,
        ]);
        $responseAdmin = $this->actingAs($admin)->postJson(route('users.store'), [
            'username' => 'sub.admin',
            'password' => 'Password123',
            'role' => 'admin',
        ]);
        $responseAdmin->assertStatus(422);
        $responseAdmin->assertJsonValidationErrors(['role']);
        $responseUser = $this->actingAs($admin)->postJson(route('users.store'), [
            'username' => 'sub.user',
            'password' => 'Password123',
            'role' => 'user',
        ]);
        $responseUser->assertStatus(201);
        $this->assertDatabaseHas('users', [
            'username' => 'sub.user',
            'role' => 'user',
        ]);
    }

    public function test_regular_admin_cannot_edit_or_delete_another_admin(): void
    {
        $admin1 = User::factory()->admin()->create(['is_primary' => false]);
        $admin2 = User::factory()->admin()->create(['is_primary' => false]);
        $responseEdit = $this->actingAs($admin1)->getJson(route('users.edit', $admin2));
        $responseEdit->assertStatus(403);
        $responseUpdate = $this->actingAs($admin1)->putJson(route('users.update', $admin2), [
            'username' => 'admin2.mod',
            'role' => 'admin',
        ]);
        $responseUpdate->assertStatus(403);
        $responseDelete = $this->actingAs($admin1)->deleteJson(route('users.destroy', $admin2));
        $responseDelete->assertStatus(403);
    }

    public function test_primary_admin_can_update_and_delete_other_admins(): void
    {
        $primaryAdmin = User::factory()->admin()->create(['is_primary' => true]);
        $admin2 = User::factory()->admin()->create(['is_primary' => false]);
        $responseUpdate = $this->actingAs($primaryAdmin)->putJson(route('users.update', $admin2), [
            'username' => 'admin2.updated',
            'role' => 'admin',
        ]);
        $responseUpdate->assertStatus(200);
        $this->assertDatabaseHas('users', [
            'id' => $admin2->id,
            'username' => 'admin2.updated',
        ]);
        $responseDelete = $this->actingAs($primaryAdmin)->deleteJson(route('users.destroy', $admin2));
        $responseDelete->assertStatus(200);
        $this->assertSoftDeleted('users', [
            'id' => $admin2->id,
        ]);
    }

    public function test_non_admin_cannot_access_user_routes(): void
    {
        $user = User::factory()->create(['role' => 'user']);
        $response = $this->actingAs($user)->get(route('users.index'));
        $response->assertStatus(403);
    }

    public function test_validation_rejects_invalid_username_regex_and_weak_password(): void
    {
        $admin = User::factory()->admin()->create(['is_primary' => true]);
        $response = $this->actingAs($admin)->postJson(route('users.store'), [
            'username' => 'bad user name!',
            'password' => '123',
            'role' => 'user',
        ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['username', 'password']);
    }

    public function test_admin_can_view_user_via_show_and_profile_routes(): void
    {
        $admin = User::factory()->admin()->create(['is_primary' => true]);
        $targetUser = User::factory()->create(['role' => 'user']);
        $responseShow = $this->actingAs($admin)->get(route('users.show', $targetUser));
        $responseShow->assertOk();
        $responseShow->assertSee($targetUser->username);
        $responseProfile = $this->actingAs($admin)->get(route('users.profile', $targetUser));
        $responseProfile->assertOk();
        $responseProfile->assertSee($targetUser->username);
    }

    public function test_admin_cannot_view_primary_admin_via_show(): void
    {
        $admin = User::factory()->admin()->create(['is_primary' => false]);
        $primaryAdmin = User::factory()->admin()->create(['is_primary' => true]);
        $response = $this->actingAs($admin)->get(route('users.show', $primaryAdmin));
        $response->assertStatus(403);
    }

    public function test_admin_updating_password_purges_sessions_and_rotates_remember_token(): void
    {
        $primaryAdmin = User::factory()->admin()->create(['is_primary' => true]);
        $targetUser = User::factory()->create([
            'role' => 'user',
            'remember_token' => 'original-remember-token-12345',
            'remember_token_created_at' => now(),
        ]);
        DB::table('sessions')->insert([
            'id' => Str::random(40),
            'user_id' => $targetUser->id,
            'ip_address' => '127.0.0.1',
            'user_agent' => 'PHPUnit',
            'payload' => serialize(['test' => true]),
            'last_activity' => time(),
        ]);
        $response = $this->actingAs($primaryAdmin)->putJson(route('users.update', $targetUser), [
            'username' => $targetUser->username,
            'role' => 'user',
            'password' => 'NewPassword123',
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseMissing('sessions', ['user_id' => $targetUser->id]);
        $targetUser->refresh();
        $this->assertNotEquals('original-remember-token-12345', $targetUser->remember_token);
        $this->assertNull($targetUser->remember_token_created_at);
    }

    public function test_admin_deleting_user_purges_sessions(): void
    {
        $primaryAdmin = User::factory()->admin()->create(['is_primary' => true]);
        $targetUser = User::factory()->create(['role' => 'user']);
        DB::table('sessions')->insert([
            'id' => Str::random(40),
            'user_id' => $targetUser->id,
            'ip_address' => '127.0.0.1',
            'user_agent' => 'PHPUnit',
            'payload' => serialize(['test' => true]),
            'last_activity' => time(),
        ]);
        $response = $this->actingAs($primaryAdmin)->deleteJson(route('users.destroy', $targetUser));
        $response->assertStatus(200);
        $this->assertDatabaseMissing('sessions', ['user_id' => $targetUser->id]);
        $this->assertSoftDeleted('users', ['id' => $targetUser->id]);
    }
}
