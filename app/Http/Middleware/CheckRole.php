<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Enums\User\UserRole;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, string ...$roles): Response
    {
        $user = $request->user() ?: auth()->user();
        if (! $user) {
            abort(403);
        }
        $userRole = $user->role instanceof UserRole
            ? $user->role->value
            : (string) $user->role;
        if (! in_array($userRole, $roles, true)) {
            abort(403);
        }

        return $next($request);
    }
}
