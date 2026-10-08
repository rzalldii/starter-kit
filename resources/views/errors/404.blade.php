@extends('layouts.auth')
@section('title', '404 Not Found')
@push('style')
    <link rel="stylesheet" href="{{ asset('vendor/css/pages/page-auth.css') }}">
@endpush
@section('content')
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner">
                <div class="card">
                    <div class="card-body text-center py-5">
                        <h1 class="display-1 fw-bold text-primary mb-0">404</h1>
                        <h4 class="mb-2">Page Not Found</h4>
                        <p class="mb-4 text-muted">This page doesn't exist.</p>
                        <a href="{{ route('dashboard') }}" class="btn btn-primary">
                            <i class="bx bx-home me-1" aria-hidden="true"></i>Back to Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection