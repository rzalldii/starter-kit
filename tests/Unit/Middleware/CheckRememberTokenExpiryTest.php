<?php

declare(strict_types=1);

namespace Tests\Unit\Middleware;

use App\Http\Middleware\CheckRememberTokenExpiry;
use App\Models\User\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class CheckRememberTokenExpiryTest extends TestCase
{
    use RefreshDatabase;

    protected CheckRememberTokenExpiry $middleware;

    protected function setUp(): void
    {
        parent::setUp();
        $this->middleware = new CheckRememberTokenExpiry;
    }

    public function test_passes_non_remember_login(): void
    {
        Auth::shouldReceive('check')->andReturn(true);
        Auth::shouldReceive('viaRemember')->andReturn(false);
        $request = Request::create('/dashboard', 'GET');
        $response = $this->middleware->handle($request, function () {
            return new Response('Passed');
        });
        $this->assertEquals('Passed', $response->getContent());
    }

    public function test_passes_fresh_remember_token(): void
    {
        $user = User::factory()->create([
            'remember_token' => 'fresh_token',
            'remember_token_created_at' => now()->subDays(2),
        ]);
        Auth::shouldReceive('check')->andReturn(true);
        Auth::shouldReceive('viaRemember')->andReturn(true);
        Auth::shouldReceive('user')->andReturn($user);
        $request = Request::create('/dashboard', 'GET');
        $response = $this->middleware->handle($request, function () {
            return new Response('Passed');
        });
        $this->assertEquals('Passed', $response->getContent());
        $this->assertEquals('fresh_token', $user->fresh()->remember_token);
    }

    public function test_logs_out_expired_remember_token(): void
    {
        $user = User::factory()->create([
            'remember_token' => 'expired_token',
            'remember_token_created_at' => now()->subDays(10),
        ]);
        Auth::shouldReceive('check')->andReturn(true);
        Auth::shouldReceive('viaRemember')->andReturn(true);
        Auth::shouldReceive('user')->andReturn($user);
        Auth::shouldReceive('logout')->once();
        $request = Request::create('/dashboard', 'GET');
        $request->setLaravelSession(app('session.store'));
        $response = $this->middleware->handle($request, function () {
            return new Response('Passed');
        });
        $this->assertEquals(302, $response->getStatusCode());
        $this->assertNull($user->fresh()->remember_token);
        $this->assertNull($user->fresh()->remember_token_created_at);
    }
}
