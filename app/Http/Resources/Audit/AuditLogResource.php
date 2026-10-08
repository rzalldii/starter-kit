<?php

declare(strict_types=1);

namespace App\Http\Resources\Audit;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuditLogResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'ulid' => $this->ulid,
            'causer_id' => $this->causer_id,
            'causer_username' => $this->causer_username,
            'action' => $this->action,
            'action_label' => $this->action_label,
            'action_badge_class' => $this->action_badge_class,
            'subject_id' => $this->subject_id,
            'subject_username' => $this->subject_username,
            'old_values' => $this->old_values,
            'new_values' => $this->new_values,
            'ip_address' => $this->ip_address,
            'url' => $this->url,
            'method' => $this->method,
            'user_agent' => $this->user_agent,
            'has_detail' => (bool) $this->has_detail,
            'has_diff' => ! empty($this->old_values) || ! empty($this->new_values),
            'created_at' => $this->created_at?->toISOString(),
        ];
    }
}
