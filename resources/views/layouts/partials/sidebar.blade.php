@auth
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" aria-label="Main navigation">
        <div class="app-brand justify-content-center py-3 px-4">
            <a href="{{ route('dashboard') }}" class="app-brand-link d-flex align-items-center gap-2">
                <span class="app-brand-logo">
                    <img src="{{ asset('img/icon.svg') }}" alt="{{ config('app.name') }} Icon" width="36" height="36">
                </span>
                <span class="app-brand-text menu-text fw-bold text-uppercase fs-5">
                    {{ config('app.name') }}
                </span>
            </a>
            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" role="button" aria-label="Close navigation">
                <i class="bx bx-chevron-left bx-sm align-middle" aria-hidden="true"></i>
            </a>
        </div>
        <div class="menu-inner-shadow"></div>
        <ul class="menu-inner py-1">
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Overview</span>
            </li>
            <li class="menu-item {{ request()->routeIs('dashboard') ? 'active' : '' }}">
                <a href="{{ route('dashboard') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-home-alt" aria-hidden="true"></i>
                    <div>Dashboard</div>
                </a>
            </li>
            @if (auth()->user()->isAdmin())
                <li class="menu-header small text-uppercase">
                    <span class="menu-header-text">Administration</span>
                </li>
                <li class="menu-item {{ request()->routeIs('users.*') ? 'active' : '' }}">
                    <a href="{{ route('users.index') }}" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-group" aria-hidden="true"></i>
                        <div>Users</div>
                    </a>
                </li>
                <li class="menu-item {{ request()->routeIs('audit-logs.*') ? 'active' : '' }}">
                    <a href="{{ route('audit-logs.index') }}" class="menu-link">
                        <i class="menu-icon tf-icons bx bx-history" aria-hidden="true"></i>
                        <div>Audit Logs</div>
                    </a>
                </li>
            @endif
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Account</span>
            </li>
            <li class="menu-item {{ request()->routeIs('profile.*') ? 'active' : '' }}">
                <a href="{{ route('profile.show') }}" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-user" aria-hidden="true"></i>
                    <div>Profile</div>
                </a>
            </li>
        </ul>
    </aside>
@endauth