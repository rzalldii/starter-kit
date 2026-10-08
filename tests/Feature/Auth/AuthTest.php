<?php

declare(strict_types=1);

namespace Tests\Feature\Auth;

use App\Http\Middleware\CheckRememberTokenExpiry;
use App\Models\User\User;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware(PreventRequestForgery::class);
        Cache::flush();
    }

    protected function tearDown(): void
    {
        Cache::flush();
        parent::tearDown();
    }

    public function test_user_can_login_with_valid_credentials(): void
    {
        $user = User::factory()->create([
            'username' => 'success_user',
            'password' => 'Secret123',
        ]);
        $response = $this->post(route('login.post'), [
            'username' => 'Success_User',
            'password' => 'Secret123',
        ]);
        $response->assertRedirect(route('dashboard'));
        $this->assertAuthenticatedAs($user);
    }

    public function test_login_fails_with_invalid_password(): void
    {
        User::factory()->create([
            'username' => 'wrongpass_user',
            'password' => 'Secret123',
        ]);
        $response = $this->post(route('login.post'), [
            'username' => 'wrongpass_user',
            'password' => 'WrongPassword',
        ]);
        $response->assertSessionHasErrors('username');
        $this->assertGuest();
    }

    public function test_login_locks_out_after_multiple_failed_attempts(): void
    {
        User::factory()->create([
            'username' => 'lockout_user',
            'password' => 'Secret123',
        ]);
        for ($i = 0; $i < 3; $i++) {
            $this->post(route('login.post'), [
                'username' => 'lockout_user',
                'password' => 'WrongPassword',
            ]);
        }
        $response = $this->post(route('login.post'), [
            'username' => 'lockout_user',
            'password' => 'Secret123',
        ]);
        $this->assertGuest();
        $response->assertSessionHasErrors('username');
        $this->assertStringContainsString('Too many failed login attempts', session('errors')->first('username'));
    }

    public function test_login_fails_when_user_is_soft_deleted(): void
    {
        User::factory()->create([
            'username' => 'deleted_user',
            'password' => 'Secret123',
            'deleted_at' => now(),
        ]);
        $response = $this->post(route('login.post'), [
            'username' => 'deleted_user',
            'password' => 'Secret123',
        ]);
        $response->assertSessionHasErrors('username');
        $this->assertGuest();
    }

    public function test_login_validation_fails_with_missing_credentials(): void
    {
        $response = $this->post(route('login.post'), []);
        $response->assertSessionHasErrors(['username', 'password']);
        $this->assertGuest();
    }

    public function test_login_validation_fails_with_oversized_credentials(): void
    {
        $response = $this->post(route('login.post'), [
            'username' => str_repeat('a', 256),
            'password' => str_repeat('b', 256),
        ]);
        $response->assertSessionHasErrors(['username', 'password']);
        $this->assertGuest();
    }

    public function test_user_can_login_with_remember_me_and_sets_token_timestamp(): void
    {
        $user = User::factory()->create([
            'username' => 'remember_user',
            'password' => 'Secret123',
        ]);
        $response = $this->post(route('login.post'), [
            'username' => 'remember_user',
            'password' => 'Secret123',
            'remember' => '1',
        ]);
        $response->assertRedirect(route('dashboard'));
        $this->assertAuthenticatedAs($user);
        $this->assertNotNull($user->fresh()->remember_token_created_at);
    }

    public function test_user_can_logout_and_clears_remember_token(): void
    {
        $user = User::factory()->create([
            'username' => 'logout_user',
            'password' => 'Secret123',
            'remember_token' => 'sample_token',
            'remember_token_created_at' => now(),
        ]);
        $response = $this->actingAs($user)->post(route('logout'));
        $response->assertRedirect(route('login'));
        $this->assertGuest();
        $this->assertNull($user->fresh()->remember_token);
        $this->assertNull($user->fresh()->remember_token_created_at);
    }

    public function test_remember_token_expiry_middleware_logs_out_when_created_at_is_null(): void
    {
        $user = User::factory()->create([
            'remember_token' => 'sample_token',
            'remember_token_created_at' => null,
        ]);
        Auth::shouldReceive('check')->andReturn(true);
        Auth::shouldReceive('viaRemember')->andReturn(true);
        Auth::shouldReceive('user')->andReturn($user);
        Auth::shouldReceive('logout')->once();
        $request = Request::create('/dashboard', 'GET');
        $request->setLaravelSession(app('session.store'));
        $middleware = new CheckRememberTokenExpiry;
        $response = $middleware->handle($request, fn () => response('OK'));
        $this->assertEquals(302, $response->getStatusCode());
        $this->assertNull($user->fresh()->remember_token);
    }

    public function test_remember_token_expiry_middleware_logs_out_expired_token(): void
    {
        $user = User::factory()->create([
            'remember_token' => 'sample_token',
            'remember_token_created_at' => now()->subDays(8),
        ]);
        Auth::shouldReceive('check')->andReturn(true);
        Auth::shouldReceive('viaRemember')->andReturn(true);
        Auth::shouldReceive('user')->andReturn($user);
        Auth::shouldReceive('logout')->once();
        $request = Request::create('/dashboard', 'GET');
        $request->setLaravelSession(app('session.store'));
        $middleware = new CheckRememberTokenExpiry;
        $response = $middleware->handle($request, fn () => response('OK'));
        $this->assertEquals(302, $response->getStatusCode());
        $this->assertNull($user->fresh()->remember_token);
    }

    public function test_ip_rate_limiter_throttles_excessive_login_attempts(): void
    {
        for ($i = 0; $i < 10; $i++) {
            $this->post(route('login.post'), [
                'username' => 'rate_test_'.$i,
                'password' => 'WrongPassword',
            ]);
        }
        $response = $this->post(route('login.post'), [
            'username' => 'rate_test_11',
            'password' => 'WrongPassword',
        ]);
        $response->assertStatus(429);
    }
}
