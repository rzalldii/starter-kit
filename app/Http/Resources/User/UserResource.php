<?php

declare(strict_types=1);

namespace App\Http\Resources\User;

use App\Enums\User\UserRole;
use App\Models\User\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        $roleVal = $this->role instanceof UserRole ? $this->role->value : (string) $this->role;
        $currentUser = $request->user();

        return [
            'id' => $this->id,
            'username' => $this->username,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'formatted_phone_number' => $this->formatted_phone_number,
            'address' => $this->address,
            'role' => $roleVal,
            'role_label' => $this->role instanceof UserRole ? $this->role->label() : ($roleVal === 'admin' ? 'Administrator' : 'Standard User'),
            'is_primary' => (bool) $this->is_primary,
            'can_edit' => ($currentUser instanceof User && $this->resource instanceof User) ? $currentUser->canEdit($this->resource) : false,
            'can_delete' => ($currentUser instanceof User && $this->resource instanceof User) ? $currentUser->canDelete($this->resource) : false,
            'profile_url' => $this->id ? route('users.profile', $this->resource) : null,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
