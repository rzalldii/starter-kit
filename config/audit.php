<?php

declare(strict_types=1);

return [
    /*
    |--------------------------------------------------------------------------
    | Audit Log Retention Days
    |--------------------------------------------------------------------------
    |
    | The number of days to keep audit logs before they become eligible
    | for automated pruning via `php artisan model:prune`.
    | Default is 180 days (6 months).
    |
    */
    'retention_days' => (int) env('AUDIT_LOG_RETENTION_DAYS', 180),
];
