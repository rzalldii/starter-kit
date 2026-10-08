@extends('layouts.auth')
@section('title', 'Login')
@push('style')
    <link rel="stylesheet" href="{{ asset('vendor/css/pages/page-auth.css') }}">
@endpush
@section('content')
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
                <div class="card">
                    <div class="card-body">
                        <div class="app-brand justify-content-center">
                            <a href="{{ route('login') }}" class="app-brand-link gap-2">
                                <span class="app-brand-logo">
                                    <img src="{{ asset('img/icon.svg') }}" alt="{{ config('app.name') }} Logo" width="36" height="36">
                                </span>
                                <span class="app-brand-text menu-text fw-bold text-uppercase fs-5 text-body">
                                    {{ config('app.name') }}
                                </span>
                            </a>
                        </div>
                        <h4 class="mb-2">Welcome to {{ config('app.name') }}!</h4>
                        <p class="mb-4">Please log in to your account to continue.</p>
                        <form id="formAuthentication" action="{{ route('login.post') }}" method="POST" novalidate>
                            @csrf
                            <div class="mb-3">
                                <label class="form-label" for="username">Username</label>
                                <input type="text" name="username" id="username" class="form-control @error('username') is-invalid @enderror {{ $lockoutSeconds ? 'is-invalid' : '' }}" placeholder="e.g., johndoe123" value="{{ old('username') }}" autocomplete="username" required autofocus @if($lockoutSeconds) aria-describedby="usernameLockout" @elseif($errors->has('username')) aria-describedby="usernameError" @endif>
                                @if ($lockoutSeconds)
                                    <div class="invalid-feedback d-block" id="usernameLockout" data-lockout="{{ $lockoutSeconds }}" aria-live="polite" role="status">
                                        Too many failed login attempts. Please try again in {{ $lockoutSeconds }} seconds.
                                    </div>
                                @elseif ($errors->has('username'))
                                    <div class="invalid-feedback d-block" id="usernameError">
                                        {{ $errors->first('username') }}
                                    </div>
                                @endif
                            </div>
                            <div class="mb-3 form-password-toggle">
                                <div class="d-flex justify-content-between">
                                    <label class="form-label" for="password">Password</label>
                                </div>
                                <div class="input-group input-group-merge">
                                    <input type="password" name="password" id="password" class="form-control @error('password') is-invalid @enderror" placeholder="••••••••" autocomplete="current-password" required @error('password') aria-describedby="passwordError" @enderror>
                                    <button type="button" class="input-group-text cursor-pointer" aria-label="Show password">
                                        <i class="bx bx-hide" aria-hidden="true"></i>
                                    </button>
                                </div>
                                @error('password')
                                    <div class="invalid-feedback d-block" id="passwordError">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-3 d-flex justify-content-between">
                                <div class="form-check">
                                    <input class="form-check-input cursor-pointer" type="checkbox" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                    <label class="form-check-label cursor-pointer" for="remember">Remember Me</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <button class="btn btn-primary d-grid w-100" type="submit" id="btnLogin">
                                    <span class="d-flex align-items-center justify-content-center gap-2">
                                        <i class="bx bx-log-in me-1" aria-hidden="true"></i>Login
                                    </span>
                                </button>
                            </div>
                            <div class="text-center">
                                <small class="text-muted">Forgot Password? Contact Admin</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script nonce="{{ $cspNonce }}">
        $(document).ready(function () {
            var $lockoutEl = $('#usernameLockout');
            var lockoutSeconds = parseInt($lockoutEl.data('lockout'), 10);
            var countdownInterval = null;
            if (!isNaN(lockoutSeconds) && lockoutSeconds > 0) {
                var remaining = lockoutSeconds;
                var originalMessage = 'Too many failed login attempts. Please try again in';
                $('#username, #password, #remember, #btnLogin').prop('disabled', true);
                function updateCountdown() {
                    $lockoutEl.text(originalMessage + ' ' + remaining + ' seconds.');
                    if (remaining <= 0) {
                        if (countdownInterval) {
                            clearInterval(countdownInterval);
                        }
                        $lockoutEl.text('').removeClass('d-block');
                        $('#username').removeClass('is-invalid');
                        $('#username, #password, #remember, #btnLogin').prop('disabled', false);
                        return;
                    }
                    remaining--;
                }
                updateCountdown();
                countdownInterval = setInterval(updateCountdown, 1000);
            }
            $('#username').on('input', function () {
                this.value = this.value.toLowerCase().replace(/[^a-z0-9_.]/g, '');
            });
            $('#username, #password').on('input', function () {
                $(this).removeClass('is-invalid');
                $(this).siblings('.client-invalid-feedback').remove();
                $(this).closest('.form-password-toggle').find('.client-invalid-feedback').remove();
                if (this.id === 'password') {
                    $('#passwordError').remove();
                }
                if (this.id === 'username') {
                    $('#usernameError').remove();
                }
            });
            $('#formAuthentication').on('submit', function (e) {
                var $username = $('#username');
                var $password = $('#password');
                var usernameVal = $username.val().trim();
                var passwordVal = $password.val();
                var hasError = false;
                $('.client-invalid-feedback').remove();
                if (!usernameVal) {
                    $username.addClass('is-invalid');
                    if (!$('#usernameError').length && !$('#usernameLockout:visible').length) {
                        $username.after('<div class="invalid-feedback d-block client-invalid-feedback" id="clientUsernameError">Please enter your username.</div>');
                    }
                    hasError = true;
                }
                if (!passwordVal) {
                    $password.addClass('is-invalid');
                    if (!$('#passwordError').length) {
                        $password.closest('.form-password-toggle').append('<div class="invalid-feedback d-block client-invalid-feedback" id="clientPasswordError">Please enter your password.</div>');
                    }
                    hasError = true;
                }
                if (hasError) {
                    e.preventDefault();
                    if (!usernameVal) {
                        $username.focus();
                    } else {
                        $password.focus();
                    }
                    return false;
                }
                $('#btnLogin')
                    .html('<span class="d-flex align-items-center justify-content-center gap-2"><i class="bx bx-loader-alt bx-spin" aria-hidden="true"></i>Logging in...</span>')
                    .prop('disabled', true);
            });
        });
    </script>
@endpush