<?php

declare(strict_types=1);

namespace App\Services\User;

use App\Enums\User\UserRole;
use App\Models\Audit\AuditLog;
use App\Models\User\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class UserService
{
    public function createUser(array $validated): User
    {
        return DB::transaction(function () use ($validated) {
            $user = User::create([
                'username' => $validated['username'],
                'password' => $validated['password'],
                'role' => $validated['role'],
            ]);
            $roleVal = $user->role instanceof UserRole ? $user->role->value : $user->role;
            AuditLog::record('user_created', $user, null, [
                'username' => $user->username,
                'role' => $roleVal,
            ]);

            return $user;
        });
    }

    public function updateUser(User $user, array $validated, User $currentUser): ?User
    {
        $currentRoleVal = $user->role instanceof UserRole ? $user->role->value : $user->role;
        if ($currentUser->isSelf($user) || $user->isPrimary()) {
            $validated['role'] = $currentRoleVal;
        }
        $oldValues = [
            'username' => $user->username,
            'role' => $currentRoleVal,
        ];
        $hasNewPassword = ! empty($validated['password']);
        if (! $hasNewPassword) {
            unset($validated['password']);
        }
        $user->fill($validated);
        if (! $user->isDirty()) {
            return null;
        }
        $newRoleVal = $user->role instanceof UserRole ? $user->role->value : $user->role;
        $newValues = [
            'username' => $user->username,
            'role' => $newRoleVal,
        ];
        if ($hasNewPassword) {
            $newValues['password'] = 'changed';
            $user->forceFill([
                'remember_token' => Str::random(60),
                'remember_token_created_at' => null,
            ]);
        }
        $subject = $currentUser->isSelf($user) ? null : $user;
        DB::transaction(function () use ($user, $subject, $oldValues, $newValues, $hasNewPassword) {
            $user->save();
            if ($hasNewPassword && Schema::hasTable('sessions')) {
                DB::table('sessions')->where('user_id', $user->id)->delete();
            }
            AuditLog::record('user_updated', $subject, $oldValues, $newValues);
        });

        return $user;
    }

    public function deleteUser(User $user): void
    {
        $roleVal = $user->role instanceof UserRole ? $user->role->value : $user->role;
        $deletedInfo = [
            'username' => $user->username,
            'role' => $roleVal,
        ];
        DB::transaction(function () use ($user, $deletedInfo) {
            AuditLog::record('user_deleted', $user, $deletedInfo, null);
            if (Schema::hasTable('sessions')) {
                DB::table('sessions')->where('user_id', $user->id)->delete();
            }
            $user->delete();
        });
    }
}
