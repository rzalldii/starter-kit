<?php

declare(strict_types=1);

namespace App\Services\User;

use App\Models\Audit\AuditLog;
use App\Models\User\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ProfileService
{
    public function getProfileData(User $profileUser, bool $isAdminView): array
    {
        $userId = $profileUser->id;
        $activities = AuditLog::query()
            ->forListing()
            ->where(function ($q) use ($userId) {
                $q->where('causer_id', $userId)
                    ->orWhere('subject_id', $userId);
            })
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get()
            ->map(function ($log) {
                return [
                    'log_id' => $log->id,
                    'action_label' => $log->action_label,
                    'action_badge' => $log->action_badge_class,
                    'date' => $log->created_at->format('d M Y, H:i'),
                    'ip_address' => $log->ip_address,
                    'has_detail' => true,
                    'has_diff' => (bool) $log->has_detail,
                ];
            })
            ->values();
        $totalActivities = Cache::remember(
            "user_{$userId}_activity_count",
            300,
            fn () => AuditLog::where(function ($q) use ($userId) {
                $q->where('causer_id', $userId)
                    ->orWhere('subject_id', $userId);
            })->count()
        );

        return compact('activities', 'totalActivities', 'profileUser', 'isAdminView');
    }

    public function updateProfile(User $user, array $validated): ?User
    {
        $oldValues = $user->only(['username', 'full_name', 'email', 'phone_number', 'address']);
        $user->fill($validated);
        if (! $user->isDirty()) {
            return null;
        }
        $changedFields = array_keys($user->getDirty());
        $filteredOldValues = collect($oldValues)->only($changedFields)->toArray();
        $filteredNewValues = collect($validated)->only($changedFields)->toArray();
        DB::transaction(function () use ($user, $filteredOldValues, $filteredNewValues) {
            $user->save();
            AuditLog::record('profile_updated', $user, $filteredOldValues, $filteredNewValues);
        });

        return $user;
    }

    public function updatePassword(User $user, string $currentPassword, string $newPassword): bool
    {
        if (! Hash::check($currentPassword, $user->password)) {
            return false;
        }
        DB::transaction(function () use ($user, $newPassword) {
            $user->update(['password' => $newPassword]);
            Auth::logoutOtherDevices($newPassword);
            $user->forceFill([
                'remember_token' => Str::random(60),
                'remember_token_created_at' => null,
            ])->save();
            AuditLog::record('password_updated', $user);
        });

        return true;
    }
}
