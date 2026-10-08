<?php

declare(strict_types=1);

namespace App\Models\User;

use App\Enums\User\UserRole;
use App\Models\Audit\AuditLog;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, SoftDeletes;

    protected static function newFactory()
    {
        return UserFactory::new();
    }

    protected $table = 'users';

    protected $fillable = [
        'username',
        'password',
        'role',
        'full_name',
        'email',
        'phone_number',
        'address',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'role' => UserRole::class,
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_primary' => 'boolean',
            'remember_token_created_at' => 'datetime',
        ];
    }

    protected function username(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strtolower($value)
        );
    }

    protected function phoneNumber(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                if (empty($value)) {
                    return null;
                }
                $phone = preg_replace('/[^0-9]/', '', (string) $value);
                if (str_starts_with($phone, '0')) {
                    $phone = '62'.substr($phone, 1);
                }

                return $phone ?: null;
            }
        );
    }

    protected function formattedPhoneNumber(): Attribute
    {
        return Attribute::make(
            get: function () {
                $phone = $this->phone_number;
                if (! $phone) {
                    return null;
                }
                if (str_starts_with($phone, '62')) {
                    $number = substr($phone, 2);
                    if (strlen($number) >= 8) {
                        $p1 = substr($number, 0, 3);
                        $p2 = substr($number, 3, 4);
                        $p3 = substr($number, 7);

                        return trim("+62 {$p1}-{$p2}-{$p3}", '-');
                    }

                    return "+62 {$number}";
                }

                return $phone;
            }
        );
    }

    public function auditLogsAsCauser(): HasMany
    {
        return $this->hasMany(AuditLog::class, 'causer_id');
    }

    public function auditLogsAsSubject(): HasMany
    {
        return $this->hasMany(AuditLog::class, 'subject_id');
    }

    public function isAdmin(): bool
    {
        return $this->role === UserRole::Admin;
    }

    public function roleValue(): string
    {
        return $this->role instanceof UserRole ? $this->role->value : (string) $this->role;
    }

    public function roleLabel(): string
    {
        return $this->role instanceof UserRole ? $this->role->label() : ucfirst((string) $this->role);
    }

    public function isPrimary(): bool
    {
        return $this->is_primary === true;
    }

    public function isSelf(User $target): bool
    {
        return $this->id === $target->id;
    }

    public function canView(User $target): bool
    {
        if (! $this->isAdmin()) {
            return false;
        }

        return ! $target->isPrimary();
    }

    public function canEdit(User $target): bool
    {
        if (! $this->isAdmin()) {
            return false;
        }
        if ($this->isSelf($target)) {
            return false;
        }

        return $this->isPrimary() || ! $target->isAdmin();
    }

    public function canDelete(User $target): bool
    {
        if (! $this->isAdmin()) {
            return false;
        }
        if ($this->isSelf($target) || $target->isPrimary()) {
            return false;
        }

        return $this->isPrimary() || ! $target->isAdmin();
    }
}
