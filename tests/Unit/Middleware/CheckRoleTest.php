<?php

declare(strict_types=1);

namespace Tests\Unit\Middleware;

use App\Enums\User\UserRole;
use App\Http\Middleware\CheckRole;
use App\Models\User\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tests\TestCase;

class CheckRoleTest extends TestCase
{
    use RefreshDatabase;

    protected CheckRole $middleware;

    protected function setUp(): void
    {
        parent::setUp();
        $this->middleware = new CheckRole;
    }

    public function test_allows_user_with_matching_role(): void
    {
        $admin = User::factory()->admin()->create();
        $this->actingAs($admin);
        $request = Request::create('/admin-only', 'GET');
        $response = $this->middleware->handle($request, function () {
            return new Response('Allowed');
        }, 'admin');
        $this->assertEquals('Allowed', $response->getContent());
    }

    public function test_denies_user_with_non_matching_role(): void
    {
        $user = User::factory()->create(['role' => UserRole::User]);
        $this->actingAs($user);
        $request = Request::create('/admin-only', 'GET');
        try {
            $this->middleware->handle($request, function () {
                return new Response('Allowed');
            }, 'admin');
            $this->fail('Expected HttpException was not thrown.');
        } catch (HttpException $e) {
            $this->assertEquals(403, $e->getStatusCode());
        }
    }

    public function test_denies_unauthenticated_user(): void
    {
        $request = Request::create('/protected', 'GET');
        try {
            $this->middleware->handle($request, function () {
                return new Response('Allowed');
            }, 'admin', 'user');
            $this->fail('Expected HttpException was not thrown.');
        } catch (HttpException $e) {
            $this->assertEquals(403, $e->getStatusCode());
        }
    }

    public function test_allows_multiple_roles(): void
    {
        $user = User::factory()->create(['role' => UserRole::User]);
        $this->actingAs($user);
        $request = Request::create('/multi-role', 'GET');
        $response = $this->middleware->handle($request, function () {
            return new Response('Allowed');
        }, 'admin', 'user');
        $this->assertEquals('Allowed', $response->getContent());
    }
}
