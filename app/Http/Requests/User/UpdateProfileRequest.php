<?php

declare(strict_types=1);

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(): void
    {
        $mergeData = [];
        if ($this->has('username') && is_string($this->username)) {
            $mergeData['username'] = strtolower(trim($this->username));
        }
        if ($this->has('email') && is_string($this->email)) {
            $mergeData['email'] = strtolower(trim($this->email));
        }
        if ($this->filled('phone_number')) {
            $phone = preg_replace('/[^0-9]/', '', (string) $this->phone_number);
            if (str_starts_with($phone, '0')) {
                $phone = '62'.substr($phone, 1);
            }
            $mergeData['phone_number'] = $phone ?: null;
        }
        if (! empty($mergeData)) {
            $this->merge($mergeData);
        }
    }

    public function rules(): array
    {
        $userId = $this->user()->id;

        return [
            'username' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-z0-9_.]+$/',
                Rule::unique('users', 'username')
                    ->whereNull('deleted_at')
                    ->ignore($userId),
            ],
            'full_name' => ['nullable', 'string', 'max:255'],
            'email' => [
                'nullable',
                'email',
                'max:255',
                Rule::unique('users', 'email')
                    ->whereNull('deleted_at')
                    ->ignore($userId),
            ],
            'phone_number' => [
                'nullable',
                'string',
                'max:20',
                Rule::unique('users', 'phone_number')
                    ->whereNull('deleted_at')
                    ->ignore($userId),
            ],
            'address' => ['nullable', 'string', 'max:500'],
        ];
    }
}
