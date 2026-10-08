<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Audit\AuditLog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\View\View;

class AuthController extends Controller
{
    public function showLogin(Request $request): View|RedirectResponse
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }
        $lastUsername = $request->session()->get('last_login_attempt');
        $lockoutSeconds = null;
        if ($lastUsername) {
            $lockKey = $this->lockKey($lastUsername, $request->ip());
            if (RateLimiter::tooManyAttempts($lockKey, 1)) {
                $lockoutSeconds = RateLimiter::availableIn($lockKey);
            }
        }

        return view('auth.login', compact('lockoutSeconds'));
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $username = $request->input('username');
        $attemptKey = $this->attemptKey($username, $request->ip());
        $lockKey = $this->lockKey($username, $request->ip());
        if (RateLimiter::tooManyAttempts($lockKey, 1)) {
            $seconds = RateLimiter::availableIn($lockKey);

            return back()->withErrors([
                'username' => "Too many failed login attempts. Please try again in {$seconds} seconds.",
            ])->withInput($request->only('username', 'remember'));
        }
        $remember = $request->boolean('remember');
        $password = $request->input('password');
        if (! Auth::attempt($request->only('username', 'password'), $remember)) {
            $attempts = RateLimiter::hit($attemptKey, 180);
            if ($attempts >= 3) {
                RateLimiter::hit($lockKey, 180);
                RateLimiter::clear($attemptKey);
                AuditLog::record('login_blocked', null, null, [
                    'attempted_username' => $username,
                ]);
                $seconds = RateLimiter::availableIn($lockKey);

                return back()->withErrors([
                    'username' => "Too many failed login attempts. Please try again in {$seconds} seconds.",
                ])->withInput($request->only('username', 'remember'));
            }
            AuditLog::record('login_failed', null, null, [
                'attempted_username' => $username,
            ]);

            return back()->withErrors([
                'username' => 'Invalid credentials. The username or password you entered is incorrect.',
            ])->withInput($request->only('username', 'remember'));
        }
        RateLimiter::clear($attemptKey);
        RateLimiter::clear($lockKey);
        $request->session()->forget('last_login_attempt');
        $request->session()->regenerate();
        Auth::logoutOtherDevices($password);
        auth()->user()->forceFill([
            'remember_token_created_at' => $remember ? now() : null,
        ])->save();
        AuditLog::record('login', null);

        return redirect()->intended(route('dashboard'))->with('toast', [
            'icon' => 'success',
            'title' => 'Login Successful',
        ]);
    }

    public function logout(Request $request): RedirectResponse
    {
        if ($user = auth()->user()) {
            AuditLog::record('logout', null);
            $user->forceFill([
                'remember_token' => null,
                'remember_token_created_at' => null,
            ])->save();
        }
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login')->with('toast', [
            'icon' => 'success',
            'title' => 'Logout Successful',
        ]);
    }

    private function attemptKey(string $username, string $ip): string
    {
        return 'login-attempt:'.strtolower($username).'|'.$ip;
    }

    private function lockKey(string $username, string $ip): string
    {
        return 'login-lock:'.strtolower($username).'|'.$ip;
    }
}
