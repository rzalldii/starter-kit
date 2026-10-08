<nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
    @auth
        <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)" role="button" aria-label="Toggle navigation">
                <i class="bx bx-menu bx-sm" aria-hidden="true"></i>
            </a>
        </div>
    @endauth
    <div class="navbar-nav-right d-flex align-items-center justify-content-between w-100" id="navbar-collapse">
        <div class="navbar-nav align-items-center">
            @auth
                @hasSection('breadcrumb')
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-style1 mb-0">
                            <li class="breadcrumb-item">
                                <a href="{{ route('dashboard') }}">Home</a>
                            </li>
                            @yield('breadcrumb')
                        </ol>
                    </nav>
                @else
                    <span class="navbar-text fw-semibold text-muted d-none d-md-inline-block">
                        Overview
                    </span>
                @endif
            @else
                <a href="{{ route('dashboard') }}" class="d-flex align-items-center gap-2 text-decoration-none">
                    <img src="{{ asset('img/icon.svg') }}" alt="{{ config('app.name') }} Icon" width="36" height="36">
                    <span class="fw-bold text-uppercase text-body fs-5">
                        {{ config('app.name') }}
                    </span>
                </a>
            @endauth
        </div>
        <ul class="navbar-nav flex-row align-items-center ms-auto">
            @auth
                <li class="nav-item">
                    <form action="{{ route('logout') }}" method="POST" class="m-0" id="logout-form">
                        @csrf
                        <button type="submit" class="btn btn-danger">
                            <i class="bx bx-log-out me-1" aria-hidden="true"></i>Logout
                        </button>
                    </form>
                </li>
            @else
                <li class="nav-item">
                    <a href="{{ route('login') }}" class="btn btn-primary">
                        <i class="bx bx-log-in me-1" aria-hidden="true"></i>Login
                    </a>
                </li>
            @endauth
        </ul>
    </div>
</nav>