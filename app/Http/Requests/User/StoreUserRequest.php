<?php

declare(strict_types=1);

namespace App\Http\Requests\User;

use App\Enums\User\UserRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;

class StoreUserRequest extends FormRequest
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
        $allowedRoles = $this->user()?->isPrimary()
            ? [UserRole::Admin->value, UserRole::User->value]
            : [UserRole::User->value];

        return [
            'username' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-z0-9_.]+$/',
                Rule::unique('users', 'username')->whereNull('deleted_at'),
            ],
            'password' => ['required', Password::defaults()],
            'role' => ['required', Rule::in($allowedRoles)],
        ];
    }
}
