<?php

declare(strict_types=1);

namespace App\Models\Audit;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\MassPrunable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class AuditLog extends Model
{
    use HasUlids, MassPrunable;

    protected $table = 'audit_logs';

    public const UPDATED_AT = null;

    public const CACHE_KEY_ACTIONS = 'audit_log_actions';

    public const CACHE_KEY_CAUSERS = 'audit_log_causers';

    public const CACHE_KEY_SUBJECTS = 'audit_log_subjects';

    public const CACHE_KEY_TOTAL_COUNT = 'audit_log_total_count';

    public const CACHE_TTL = 300;

    public const ACTION_BADGES = [
        'login' => 'success',
        'logout' => 'secondary',
        'login_failed' => 'warning',
        'login_blocked' => 'danger',
        'access_denied' => 'danger',
        'user_created' => 'success',
        'user_updated' => 'info',
        'user_deleted' => 'danger',
        'profile_updated' => 'info',
        'password_updated' => 'warning',
        'wallet_created' => 'success',
        'wallet_updated' => 'info',
        'wallet_deleted' => 'danger',
        'category_created' => 'success',
        'category_updated' => 'info',
        'category_deleted' => 'danger',
        'tag_created' => 'success',
        'tag_updated' => 'info',
        'tag_deleted' => 'danger',
        'recurring_created' => 'success',
        'recurring_updated' => 'info',
        'recurring_deleted' => 'danger',
        'recurring_generated' => 'warning',
        'recurring_failed' => 'danger',
        'transaction_created' => 'success',
        'transaction_updated' => 'info',
        'transaction_deleted' => 'danger',
        'transfer_created' => 'success',
        'transfer_updated' => 'info',
        'transfer_deleted' => 'danger',
    ];

    protected $fillable = [
        'ulid',
        'causer_id',
        'causer_username',
        'subject_id',
        'subject_username',
        'action',
        'old_values',
        'new_values',
        'ip_address',
        'user_agent',
        'url',
        'method',
    ];

    public function uniqueIds(): array
    {
        return ['ulid'];
    }

    public function getRouteKeyName(): string
    {
        return 'ulid';
    }

    public function resolveRouteBinding($value, $field = null): ?self
    {
        if (is_numeric($value)) {
            return $this->where('id', (int) $value)->first();
        }

        return $this->where($field ?? 'ulid', $value)->first();
    }

    public function prunable(): Builder
    {
        return static::where('created_at', '<=', now()->subDays((int) config('audit.retention_days', 180)));
    }

    protected function casts(): array
    {
        return [
            'old_values' => 'array',
            'new_values' => 'array',
        ];
    }

    protected static function booted(): void
    {
        static::created(function (self $log) {
            DB::afterCommit(function () use ($log) {
                if (Cache::supportsTags()) {
                    Cache::tags(['audit_logs'])->flush();
                    if ($log->causer_id) {
                        Cache::tags(["user_{$log->causer_id}"])->flush();
                    }
                    if ($log->subject_id) {
                        Cache::tags(["user_{$log->subject_id}"])->flush();
                    }
                }
                Cache::forget(self::CACHE_KEY_TOTAL_COUNT);
                Cache::forget(self::CACHE_KEY_ACTIONS);
                Cache::forget(self::CACHE_KEY_CAUSERS);
                Cache::forget(self::CACHE_KEY_SUBJECTS);
                if ($log->causer_id) {
                    Cache::forget("user_{$log->causer_id}_activity_count");
                    Cache::forget("user_{$log->causer_id}_audit_total");
                }
                if ($log->subject_id) {
                    Cache::forget("user_{$log->subject_id}_activity_count");
                    Cache::forget("user_{$log->subject_id}_audit_total");
                }
            });
        });
    }

    protected function actionLabel(): Attribute
    {
        return Attribute::make(
            get: fn () => strtoupper(str_replace('_', ' ', $this->action))
        );
    }

    protected function actionBadgeClass(): Attribute
    {
        return Attribute::make(
            get: function () {
                $tone = self::ACTION_BADGES[$this->action] ?? 'primary';

                return "bg-label-{$tone}";
            }
        );
    }

    public function causer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'causer_id')->withTrashed();
    }

    public function subject(): BelongsTo
    {
        return $this->belongsTo(User::class, 'subject_id')->withTrashed();
    }

    public function scopeForListing(Builder $query): Builder
    {
        return $query->select([
            'id',
            'ulid',
            'causer_username',
            'subject_username',
            'action',
            'ip_address',
            'created_at',
        ])->selectRaw('(old_values IS NOT NULL OR new_values IS NOT NULL) as has_detail');
    }

    public static function record(
        string $action,
        ?User $subject = null,
        ?array $oldValues = null,
        ?array $newValues = null,
        array $context = [],
    ): self {
        $causer = array_key_exists('causer', $context) ? $context['causer'] : auth()->user();
        [$diffOld, $diffNew] = self::diff($oldValues, $newValues);
        $data = [
            'causer_id' => $causer?->id,
            'causer_username' => $causer?->username,
            'subject_id' => $subject?->id,
            'subject_username' => $subject?->username,
            'action' => $action,
            'old_values' => $diffOld,
            'new_values' => $diffNew,
            'ip_address' => $context['ip_address'] ?? request()->ip(),
            'user_agent' => $context['user_agent'] ?? request()->userAgent(),
            'url' => $context['url'] ?? request()->fullUrl(),
            'method' => $context['method'] ?? request()->method(),
        ];

        return self::create($data);
    }

    public const REDACTED_KEYS = [
        'password',
        'password_confirmation',
        'current_password',
        'new_password',
        'remember_token',
        'token',
        'secret',
        'api_key',
        'pin',
    ];

    protected static function diff(?array $old, ?array $new): array
    {
        if ($old === null || $new === null) {
            return [self::redactSensitive($old), self::redactSensitive($new)];
        }
        $changedKeys = array_keys(
            array_filter($new, fn ($value, $key) => ! array_key_exists($key, $old) || $old[$key] !== $value, ARRAY_FILTER_USE_BOTH)
        );
        if (empty($changedKeys)) {
            return [null, null];
        }
        $diffOld = array_intersect_key($old, array_flip($changedKeys));
        $diffNew = array_intersect_key($new, array_flip($changedKeys));

        return [
            self::redactSensitive($diffOld),
            self::redactSensitive($diffNew),
        ];
    }

    protected static function redactSensitive(?array $data): ?array
    {
        if ($data === null) {
            return null;
        }
        foreach ($data as $key => $val) {
            if (in_array(strtolower((string) $key), self::REDACTED_KEYS, true)) {
                $data[$key] = '••••••••';
            }
        }

        return $data;
    }
}
