<?php

declare(strict_types=1);

namespace App\Http\Requests\User;

use App\Enums\User\UserRole;
use App\Models\User\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        if ($this->has('username') && is_string($this->username)) {
            $this->merge([
                'username' => strtolower(trim($this->username)),
            ]);
        }
    }

    public function rules(): array
    {
        $targetUser = $this->route('user');
        $currentUser = $this->user();
        $allowedRoles = $currentUser?->isPrimary()
            ? [UserRole::Admin->value, UserRole::User->value]
            : [UserRole::User->value];
        if ($targetUser instanceof User) {
            $targetRole = $targetUser->role instanceof UserRole ? $targetUser->role->value : $targetUser->role;
            $allowedRoles[] = $targetRole;
        }

        return [
            'username' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-z0-9_.]+$/',
                Rule::unique('users', 'username')
                    ->whereNull('deleted_at')
                    ->ignore($targetUser?->id),
            ],
            'role' => ['required', Rule::in(array_unique($allowedRoles))],
            'password' => ['nullable', Password::defaults()],
        ];
    }
}
