@extends('layouts.auth')
@section('title', '503 Service Unavailable')
@push('style')
    <link rel="stylesheet" href="{{ asset('vendor/css/pages/page-auth.css') }}">
@endpush
@section('content')
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
                <div class="card">
                    <div class="card-body text-center py-5">
                        <h1 class="display-1 fw-bold text-secondary mb-0">503</h1>
                        <h4 class="mb-2">Service Unavailable</h4>
                        <p class="mb-4 text-muted">We're currently undergoing maintenance.</p>
                        <a href="{{ url()->current() }}" class="btn btn-primary">
                            <i class="bx bx-refresh me-1" aria-hidden="true"></i>Refresh Page
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection