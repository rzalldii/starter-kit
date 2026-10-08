<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Enums\User\UserRole;
use App\Models\User\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ViewRenderingTest extends TestCase
{
    use RefreshDatabase;

    public function test_all_authenticated_views_render_successfully(): void
    {
        $admin = User::factory()->create([
            'role' => UserRole::Admin,
            'is_primary' => true,
        ])->fresh();
        $user = User::factory()->create([
            'role' => UserRole::User,
            'is_primary' => false,
        ])->fresh();

        $responseDashboard = $this->actingAs($admin)->get(route('dashboard'));
        $responseDashboard->assertOk();

        $responseUsers = $this->actingAs($admin)->get(route('users.index'));
        $responseUsers->assertOk();
        $responseUsers->assertSee('Admin');

        $responseProfile = $this->actingAs($admin)->get(route('profile.show'));
        $responseProfile->assertOk();
        $responseProfile->assertSee('Admin');

        $responseUserProfile = $this->actingAs($admin)->get(route('users.profile', $user));
        $responseUserProfile->assertOk();
        $responseUserProfile->assertSee('User');

        $responseAuditLogs = $this->actingAs($admin)->get(route('audit-logs.index'));
        $responseAuditLogs->assertOk();
    }

    public function test_all_error_views_render_successfully_and_security_headers_applied(): void
    {
        $response404 = $this->get('/non-existent-route-for-testing-404');
        $response404->assertNotFound();
        $response404->assertHeader('X-Frame-Options', 'DENY');
        $response404->assertHeader('X-Content-Type-Options', 'nosniff');
        $response404->assertSee('404');
        $response404->assertSee('Page Not Found');

        $errorViews = ['401', '402', '403', '404', '419', '429', '500', '503'];
        foreach ($errorViews as $code) {
            $rendered = view('errors.'.$code)->render();
            $this->assertStringContainsString($code, $rendered);
            $this->assertStringContainsString('authentication-wrapper', $rendered);
        }
    }
}
