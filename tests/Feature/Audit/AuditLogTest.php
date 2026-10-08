<?php

declare(strict_types=1);

namespace Tests\Feature\Audit;

use App\Models\Audit\AuditLog;
use App\Models\User\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuditLogTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_view_audit_logs_index(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $response = $this->actingAs($admin)->get(route('audit-logs.index'));
        $response->assertStatus(200);
        $response->assertViewIs('pages.audit.audit-logs');
    }

    public function test_non_admin_cannot_access_audit_logs_index(): void
    {
        $user = User::factory()->create(['role' => 'user']);
        $response = $this->actingAs($user)->get(route('audit-logs.index'));
        $response->assertStatus(403);
    }

    public function test_admin_can_fetch_audit_logs_data(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        AuditLog::create([
            'causer_id' => $admin->id,
            'causer_username' => $admin->username,
            'action' => 'user_created',
        ]);
        $response = $this->actingAs($admin)->getJson(route('audit-logs.data'));
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'draw',
            'recordsTotal',
            'recordsFiltered',
            'data',
        ]);
        $this->assertCount(1, $response->json('data'));
    }

    public function test_admin_can_view_any_audit_log_detail(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        $otherUser = User::factory()->create(['role' => 'user']);
        $log = AuditLog::create([
            'causer_id' => $otherUser->id,
            'causer_username' => $otherUser->username,
            'action' => 'login',
        ]);
        $response = $this->actingAs($admin)->getJson(route('audit-logs.detail', ['audit_log' => $log->id]));
        $response->assertStatus(200);
        $response->assertJsonPath('action', 'login');
        $response->assertJsonPath('causer', $otherUser->username);
    }

    public function test_user_can_view_own_audit_log_detail(): void
    {
        $user = User::factory()->create(['role' => 'user']);
        $log = AuditLog::create([
            'causer_id' => $user->id,
            'causer_username' => $user->username,
            'action' => 'login',
        ]);
        $response = $this->actingAs($user)->getJson(route('audit-logs.detail', ['audit_log' => $log->id]));
        $response->assertStatus(200);
        $response->assertJsonPath('action', 'login');
    }

    public function test_user_cannot_view_other_users_audit_log_detail(): void
    {
        $user = User::factory()->create(['role' => 'user']);
        $otherUser = User::factory()->create(['role' => 'user']);
        $log = AuditLog::create([
            'causer_id' => $otherUser->id,
            'causer_username' => $otherUser->username,
            'action' => 'password_updated',
        ]);
        $response = $this->actingAs($user)->getJson(route('audit-logs.detail', ['audit_log' => $log->id]));
        $response->assertStatus(403);
    }

    public function test_user_can_fetch_own_audit_logs_via_my_data(): void
    {
        $user = User::factory()->create(['role' => 'user']);
        $otherUser = User::factory()->create(['role' => 'user']);
        AuditLog::create([
            'causer_id' => $user->id,
            'causer_username' => $user->username,
            'action' => 'login',
        ]);
        AuditLog::create([
            'causer_id' => $otherUser->id,
            'causer_username' => $otherUser->username,
            'action' => 'login',
        ]);
        $response = $this->actingAs($user)->getJson(route('audit-logs.my-data'));
        $response->assertStatus(200);
        $this->assertEquals(1, $response->json('recordsTotal'));
    }

    public function test_admin_can_filter_audit_logs_by_date_range_and_handles_invalid_date(): void
    {
        $admin = User::factory()->create(['role' => 'admin']);
        (new AuditLog([
            'causer_id' => $admin->id,
            'causer_username' => $admin->username,
            'action' => 'login',
        ]))->forceFill(['created_at' => now()->subDays(5)])->save();
        (new AuditLog([
            'causer_id' => $admin->id,
            'causer_username' => $admin->username,
            'action' => 'logout',
        ]))->forceFill(['created_at' => now()])->save();
        $today = now()->format('Y-m-d');
        $response = $this->actingAs($admin)->getJson(route('audit-logs.data', [
            'start_date' => $today,
            'end_date' => $today,
        ]));
        $response->assertStatus(200);
        $this->assertEquals(1, $response->json('recordsFiltered'));
        $responseInvalid = $this->actingAs($admin)->getJson(route('audit-logs.data', [
            'start_date' => 'invalid-date-format',
            'end_date' => 'malicious-string',
        ]));
        $responseInvalid->assertStatus(200);
    }
}
