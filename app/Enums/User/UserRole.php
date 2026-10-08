<?php

declare(strict_types=1);

namespace App\Enums\User;

enum UserRole: string
{
    case Admin = 'admin';
    case User = 'user';

    public function label(): string
    {
        return match ($this) {
            self::Admin => 'Administrator',
            self::User => 'Standard User',
        };
    }
}
