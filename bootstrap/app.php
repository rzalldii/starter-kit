<?php

use App\Http\Middleware\CheckRememberTokenExpiry;
use App\Http\Middleware\CheckRole;
use App\Http\Middleware\SecurityHeaders;
use App\Models\Audit\AuditLog;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Session\Middleware\AuthenticateSession;
use Symfony\Component\HttpKernel\Exception\HttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias([
            'role' => CheckRole::class,
            'auth.session' => AuthenticateSession::class,
            'remember.expiry' => CheckRememberTokenExpiry::class,
        ]);
        $middleware->append(SecurityHeaders::class);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->render(function (AuthenticationException $e, $request) {
            if ($request->expectsJson()) {
                return response()->json([], 401);
            }

            return redirect()
                ->route('login')
                ->with('toast', [
                    'icon' => 'warning',
                    'title' => 'Your session has expired.',
                ]);
        });
        $exceptions->render(function (HttpException $e, $request) {
            if ($e->getStatusCode() === 403 && auth()->check()) {
                AuditLog::record('access_denied', null, null, [
                    'url' => $request->fullUrl(),
                ]);
            }
        });
    })
    ->create();
