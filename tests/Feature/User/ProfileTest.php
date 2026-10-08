<?php

declare(strict_types=1);

namespace Tests\Feature\User;

use App\Models\User\User;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class ProfileTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(PreventRequestForgery::class);
    }

    public function test_user_can_update_profile_and_phone_number_is_normalized(): void
    {
        $user = User::factory()->create([
            'username' => 'testuser',
            'full_name' => 'Original Name',
            'email' => 'orig@example.com',
            'phone_number' => null,
            'address' => 'Old Address',
        ]);
        $response = $this->actingAs($user)->putJson(route('profile.update'), [
            'username' => 'testuser.updated',
            'full_name' => 'New Name',
            'email' => 'new@example.com',
            'phone_number' => '081234567890',
            'address' => 'New Address 123',
        ]);
        $response->assertStatus(200);
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'username' => 'testuser.updated',
            'full_name' => 'New Name',
            'email' => 'new@example.com',
            'phone_number' => '6281234567890',
            'address' => 'New Address 123',
        ]);
    }

    public function test_user_can_update_password(): void
    {
        $user = User::factory()->create([
            'password' => 'OldPassword123',
        ]);
        $response = $this->actingAs($user)->putJson(route('profile.password'), [
            'current_password' => 'OldPassword123',
            'password' => 'NewPassword123',
            'password_confirmation' => 'NewPassword123',
        ]);
        $response->assertStatus(200);
        $user->refresh();
        $this->assertTrue(Hash::check('NewPassword123', $user->password));
    }

    public function test_update_password_fails_with_wrong_current_password(): void
    {
        $user = User::factory()->create([
            'password' => 'OldPassword123',
        ]);
        $response = $this->actingAs($user)->putJson(route('profile.password'), [
            'current_password' => 'WrongPassword123',
            'password' => 'NewPassword123',
            'password_confirmation' => 'NewPassword123',
        ]);
        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['current_password']);
    }

    public function test_update_password_rotates_remember_token_and_nulls_created_at(): void
    {
        $user = User::factory()->create([
            'password' => 'OldPassword123',
            'remember_token' => 'original-profile-token-12345',
            'remember_token_created_at' => now(),
        ]);
        $response = $this->actingAs($user)->putJson(route('profile.password'), [
            'current_password' => 'OldPassword123',
            'password' => 'NewPassword123',
            'password_confirmation' => 'NewPassword123',
        ]);
        $response->assertStatus(200);
        $user->refresh();
        $this->assertNotEquals('original-profile-token-12345', $user->remember_token);
        $this->assertNull($user->remember_token_created_at);
    }

    public function test_profile_update_returns_204_when_no_changes_detected(): void
    {
        $user = User::factory()->create([
            'username' => 'unchanged.user',
            'full_name' => 'Same Name',
            'email' => 'same@example.com',
            'phone_number' => '6281234567890',
            'address' => 'Same Address',
        ]);
        $response = $this->actingAs($user)->putJson(route('profile.update'), [
            'username' => 'unchanged.user',
            'full_name' => 'Same Name',
            'email' => 'same@example.com',
            'phone_number' => '081234567890',
            'address' => 'Same Address',
        ]);
        $response->assertStatus(204);
    }
}
