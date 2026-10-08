<?php

declare(strict_types=1);

namespace App\Policies\Audit;

use App\Models\Audit\AuditLog;
use App\Models\User\User;

class AuditLogPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, AuditLog $auditLog): bool
    {
        return $user->isAdmin()
            || ($auditLog->causer_id !== null && $auditLog->causer_id === $user->id)
            || ($auditLog->subject_id !== null && $auditLog->subject_id === $user->id);
    }

    public function viewOwn(User $user): bool
    {
        return true;
    }
}
