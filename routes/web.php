<?php

declare(strict_types=1);

use App\Http\Controllers\Audit\AuditLogController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.dashboard');
})->name('dashboard');

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthController::class, 'showLogin'])
        ->name('login');
    Route::post('login', [AuthController::class, 'login'])
        ->middleware('throttle:login')
        ->name('login.post');
});

Route::middleware(['auth', 'auth.session', 'remember.expiry'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout'])
        ->name('logout');

    Route::get('profile', [ProfileController::class, 'show'])
        ->name('profile.show');
    Route::middleware('throttle:user.action')->group(function () {
        Route::match(['put', 'patch'], 'profile', [ProfileController::class, 'update'])
            ->name('profile.update');
        Route::put('profile/password', [ProfileController::class, 'updatePassword'])
            ->name('profile.password');
    });

    Route::get('audit-logs/my-data', [AuditLogController::class, 'myData'])
        ->middleware('throttle:60,1')
        ->name('audit-logs.my-data');
    Route::get('audit-logs/{audit_log}/detail', [AuditLogController::class, 'detail'])
        ->name('audit-logs.detail');

    Route::middleware('role:admin')->group(function () {
        Route::get('users', [UserController::class, 'index'])
            ->name('users.index');
        Route::get('users/{user}', [UserController::class, 'show'])
            ->name('users.show');
        Route::get('users/{user}/profile', [UserController::class, 'show'])
            ->name('users.profile');
        Route::get('users/{user}/edit', [UserController::class, 'edit'])
            ->name('users.edit');
        Route::middleware('throttle:user.action')->group(function () {
            Route::post('users', [UserController::class, 'store'])
                ->name('users.store');
            Route::match(['put', 'patch'], 'users/{user}', [UserController::class, 'update'])
                ->name('users.update');
            Route::delete('users/{user}', [UserController::class, 'destroy'])
                ->name('users.destroy');
        });

        Route::get('audit-logs', [AuditLogController::class, 'index'])
            ->name('audit-logs.index');
        Route::get('audit-logs/data', [AuditLogController::class, 'data'])
            ->middleware('throttle:60,1')
            ->name('audit-logs.data');

    });
});
