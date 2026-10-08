<?php

declare(strict_types=1);

namespace Tests\Unit\Models\User;

use App\Models\User\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_username_is_mutated_to_lowercase(): void
    {
        $user = new User(['username' => 'AdMin_User']);
        $this->assertEquals('admin_user', $user->username);
    }

    public function test_phone_number_normalization_and_formatting(): void
    {
        $user = new User(['phone_number' => '0812-3456-7890']);
        $this->assertEquals('6281234567890', $user->phone_number);
        $this->assertEquals('+62 812-3456-7890', $user->formatted_phone_number);
    }

    public function test_role_and_permission_helpers(): void
    {
        $primaryAdmin = User::factory()->admin()->create(['is_primary' => true]);
        $subAdmin = User::factory()->admin()->create(['is_primary' => false]);
        $regularUser = User::factory()->create(['role' => 'user']);
        $this->assertTrue($primaryAdmin->isAdmin());
        $this->assertTrue($primaryAdmin->isPrimary());
        $this->assertFalse($regularUser->isAdmin());
        $this->assertTrue($primaryAdmin->isSelf($primaryAdmin));
        $this->assertFalse($primaryAdmin->isSelf($subAdmin));
        $this->assertFalse($primaryAdmin->canEdit($primaryAdmin));
        $this->assertFalse($primaryAdmin->canDelete($primaryAdmin));
        $this->assertTrue($primaryAdmin->canEdit($subAdmin));
        $this->assertTrue($primaryAdmin->canDelete($subAdmin));
        $this->assertFalse($subAdmin->canEdit($primaryAdmin));
        $this->assertFalse($subAdmin->canDelete($primaryAdmin));
        $this->assertTrue($subAdmin->canEdit($regularUser));
        $this->assertTrue($subAdmin->canDelete($regularUser));
    }
}
