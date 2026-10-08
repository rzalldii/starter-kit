<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRememberTokenExpiry
{
    protected int $maxAgeInDays = 7;

    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check() && Auth::viaRemember()) {
            $user = $request->user() ?: Auth::user();
            if (
                ! $user->remember_token_created_at ||
                $user->remember_token_created_at->lt(now()->subDays($this->maxAgeInDays))
            ) {
                $user->forceFill([
                    'remember_token' => null,
                    'remember_token_created_at' => null,
                ])->save();
                Auth::logout();
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                return redirect()->route('login')->with('toast', [
                    'icon' => 'warning',
                    'title' => 'Your session has expired.',
                ]);
            }
        }

        return $next($request);
    }
}
