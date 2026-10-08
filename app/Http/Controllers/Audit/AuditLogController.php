<?php

declare(strict_types=1);

namespace App\Http\Controllers\Audit;

use App\Http\Controllers\Controller;
use App\Models\Audit\AuditLog;
use App\Services\Audit\AuditLogService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\View\View;

class AuditLogController extends Controller
{
    public function __construct(
        protected AuditLogService $auditLogService
    ) {}

    public function index(): View
    {
        Gate::authorize('viewAny', AuditLog::class);
        $filterOptions = $this->auditLogService->getFilterOptions();

        return view('pages.audit.audit-logs', $filterOptions);
    }

    public function data(Request $request): JsonResponse
    {
        Gate::authorize('viewAny', AuditLog::class);

        return response()->json($this->auditLogService->getDataTableResponse($request));
    }

    public function myData(Request $request): JsonResponse
    {
        Gate::authorize('viewOwn', AuditLog::class);

        return response()->json($this->auditLogService->getMyDataTableResponse($request, (int) auth()->id()));
    }

    public function detail(AuditLog $auditLog): JsonResponse
    {
        Gate::authorize('view', $auditLog);

        return response()->json($this->auditLogService->formatLogDetail($auditLog));
    }
}
