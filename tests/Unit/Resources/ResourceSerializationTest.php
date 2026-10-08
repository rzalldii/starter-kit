<?php

declare(strict_types=1);

namespace Tests\Unit\Resources;

use App\Enums\User\UserRole;
use App\Http\Resources\Audit\AuditLogResource;
use App\Http\Resources\User\UserResource;
use App\Models\Audit\AuditLog;
use App\Models\User\User;
use Illuminate\Http\Request;
use Tests\TestCase;

class ResourceSerializationTest extends TestCase
{
    public function test_user_resource_serialization(): void
    {
        $user = new User([
            'username' => 'johndoe',
            'email' => 'john@example.com',
            'phone_number' => '08123456789',
            'role' => UserRole::Admin,
        ]);
        $user->id = 1;
        $user->is_primary = true;
        $data = (new UserResource($user))->toArray(Request::create('/'));
        $this->assertEquals(1, $data['id']);
        $this->assertEquals('johndoe', $data['username']);
        $this->assertEquals('john@example.com', $data['email']);
        $this->assertEquals('admin', $data['role']);
        $this->assertEquals('Administrator', $data['role_label']);
        $this->assertTrue($data['is_primary']);
    }

    public function test_audit_log_resource_serialization(): void
    {
        $log = new AuditLog([
            'action' => 'user_login',
            'causer_id' => 1,
            'causer_username' => 'johndoe',
            'ip_address' => '127.0.0.1',
            'method' => 'POST',
            'url' => 'http://localhost/login',
        ]);
        $log->id = 100;
        $data = (new AuditLogResource($log))->toArray(Request::create('/'));
        $this->assertEquals(100, $data['id']);
        $this->assertEquals('user_login', $data['action']);
        $this->assertEquals('johndoe', $data['causer_username']);
        $this->assertEquals('127.0.0.1', $data['ip_address']);
        $this->assertArrayHasKey('ulid', $data);
        $this->assertArrayHasKey('action_label', $data);
        $this->assertArrayHasKey('action_badge_class', $data);
    }
}
