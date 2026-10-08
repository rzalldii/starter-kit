<?php

declare(strict_types=1);

namespace App\Services\Audit;

use App\Models\Audit\AuditLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AuditLogService
{
    public function getFilterOptions(): array
    {
        $actions = Cache::remember(AuditLog::CACHE_KEY_ACTIONS, AuditLog::CACHE_TTL, function () {
            return AuditLog::select('action')
                ->distinct()
                ->orderBy('action')
                ->pluck('action');
        });
        $causers = Cache::remember(AuditLog::CACHE_KEY_CAUSERS, AuditLog::CACHE_TTL, function () {
            return AuditLog::select('causer_username')
                ->distinct()
                ->orderBy('causer_username')
                ->pluck('causer_username')
                ->filter()
                ->prepend('System');
        });
        $subjects = Cache::remember(AuditLog::CACHE_KEY_SUBJECTS, AuditLog::CACHE_TTL, function () {
            return AuditLog::select('subject_username')
                ->whereNotNull('subject_username')
                ->distinct()
                ->orderBy('subject_username')
                ->pluck('subject_username');
        });

        return compact('actions', 'causers', 'subjects');
    }

    public function formatLogRow(AuditLog $log, int $index, int $start, bool $includeIp = true): array
    {
        $row = [
            'id' => $start + $index + 1,
            'log_id' => $log->ulid ?? $log->id,
            'causer' => $log->causer_username ?? 'System',
            'action' => $log->action,
            'action_label' => $log->action_label,
            'action_badge' => $log->action_badge_class,
            'subject' => $log->subject_username ?? '—',
            'date' => $log->created_at ? $log->created_at->format('d M Y, H:i') : '—',
            'has_detail' => true,
            'has_diff' => (bool) $log->has_detail,
        ];
        if ($includeIp) {
            $row['ip_address'] = $log->ip_address ?? '—';
        }

        return $row;
    }

    public function formatLogDetail(AuditLog $log): array
    {
        return [
            'action' => $log->action,
            'action_label' => $log->action_label,
            'action_badge' => $log->action_badge_class,
            'causer' => $log->causer_username ?? 'System',
            'subject' => $log->subject_username ?? '—',
            'old_values' => $log->old_values,
            'new_values' => $log->new_values,
            'ip_address' => $log->ip_address,
            'url' => $log->url,
            'method' => $log->method,
            'user_agent' => $log->user_agent,
            'date' => $log->created_at ? $log->created_at->format('d M Y, H:i:s') : '—',
        ];
    }

    public function getDataTableResponse(Request $request): array
    {
        $query = AuditLog::query()->forListing();
        if ($search = $request->input('search.value')) {
            $escaped = str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], (string) $search);
            $query->where(function ($q) use ($escaped, $search) {
                $q->where('causer_username', 'like', "%{$escaped}%")
                    ->orWhere('subject_username', 'like', "%{$escaped}%")
                    ->orWhere('action', 'like', "%{$escaped}%")
                    ->orWhere('ip_address', 'like', "%{$escaped}%");
                if (strcasecmp((string) $search, 'System') === 0) {
                    $q->orWhereNull('causer_username');
                }
            });
        }
        if ($action = $request->input('filter_action')) {
            $query->where('action', $action);
        }
        if ($causer = $request->input('filter_causer')) {
            if ($causer === 'System') {
                $query->whereNull('causer_username');
            } else {
                $query->where('causer_username', $causer);
            }
        }
        if ($subject = $request->input('filter_subject')) {
            $query->where('subject_username', $subject);
        }
        $startDate = $request->input('start_date');
        if (is_string($startDate) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDate)) {
            $query->where('created_at', '>=', $startDate.' 00:00:00');
        }
        $endDate = $request->input('end_date');
        if (is_string($endDate) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $endDate)) {
            $query->where('created_at', '<=', $endDate.' 23:59:59');
        }
        $recordsTotal = Cache::remember(AuditLog::CACHE_KEY_TOTAL_COUNT, 60, function () {
            return AuditLog::count();
        });
        $recordsFiltered = $query->count();
        $orderColumnIndex = (int) $request->input('order.0.column', 0);
        $orderDir = in_array($request->input('order.0.dir'), ['asc', 'desc'], true) ? (string) $request->input('order.0.dir') : 'desc';
        $columns = ['created_at', 'causer_username', 'action', 'subject_username', 'ip_address', null];
        $orderColumn = $columns[$orderColumnIndex] ?? 'created_at';
        if ($orderColumn) {
            $query->orderBy($orderColumn, $orderDir)->orderBy('id', $orderDir);
        } else {
            $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
        }
        $logs = $query->skip((int) $request->input('start', 0))
            ->take(min((int) $request->input('length', 10), 100))
            ->get();
        $start = (int) $request->input('start', 0);
        $data = $logs->map(function ($log, $index) use ($start) {
            return $this->formatLogRow($log, (int) $index, $start, true);
        })->values();

        return [
            'draw' => (int) $request->input('draw', 1),
            'recordsTotal' => $recordsTotal,
            'recordsFiltered' => $recordsFiltered,
            'data' => $data,
        ];
    }

    public function getMyDataTableResponse(Request $request, int $userId): array
    {
        $baseQuery = fn () => AuditLog::query()->forListing()->where(function ($q) use ($userId) {
            $q->where('causer_id', $userId)
                ->orWhere('subject_id', $userId);
        });
        $query = $baseQuery();
        if ($search = $request->input('search.value')) {
            $escaped = str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], (string) $search);
            $query->where(function ($q) use ($escaped, $search) {
                $q->where('action', 'like', "%{$escaped}%")
                    ->orWhere('causer_username', 'like', "%{$escaped}%")
                    ->orWhere('subject_username', 'like', "%{$escaped}%");
                if (strcasecmp((string) $search, 'System') === 0) {
                    $q->orWhereNull('causer_username');
                }
            });
        }
        $recordsTotal = Cache::remember("user_{$userId}_audit_total", 60, fn () => $baseQuery()->count());
        $recordsFiltered = $query->count();
        $orderColumnIndex = (int) $request->input('order.0.column', 0);
        $orderDir = in_array($request->input('order.0.dir'), ['asc', 'desc'], true) ? (string) $request->input('order.0.dir') : 'desc';
        $columns = ['created_at', 'action', null];
        $orderColumn = $columns[$orderColumnIndex] ?? 'created_at';
        if ($orderColumn) {
            $query->orderBy($orderColumn, $orderDir)->orderBy('id', $orderDir);
        } else {
            $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
        }
        $logs = $query->skip((int) $request->input('start', 0))
            ->take(min((int) $request->input('length', 10), 100))
            ->get();
        $start = (int) $request->input('start', 0);
        $data = $logs->map(function ($log, $index) use ($start) {
            return $this->formatLogRow($log, (int) $index, $start, false);
        })->values();

        return [
            'draw' => (int) $request->input('draw', 1),
            'recordsTotal' => $recordsTotal,
            'recordsFiltered' => $recordsFiltered,
            'data' => $data,
        ];
    }
}
