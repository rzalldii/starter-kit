@extends('layouts.auth')
@section('title', '419 Page Expired')
@push('style')
    <link rel="stylesheet" href="{{ asset('vendor/css/pages/page-auth.css') }}">
@endpush
@section('content')
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
                <div class="card">
                    <div class="card-body text-center py-5">
                        <h1 class="display-1 fw-bold text-warning mb-0">419</h1>
                        <h4 class="mb-2">Session Expired</h4>
                        <p class="mb-4 text-muted">Your session has expired.</p>
                        <a href="{{ url()->current() }}" class="btn btn-primary">
                            <i class="bx bx-refresh me-1" aria-hidden="true"></i>Refresh Page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection