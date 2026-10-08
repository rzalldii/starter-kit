<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('layouts.partials.head')
</head>

<body>
    <a href="#main-content" class="visually-hidden-focusable">Skip to content</a>
    @auth
        <div class="layout-wrapper layout-content-navbar">
            <div class="layout-container">
                @include('layouts.partials.sidebar')
                <div class="layout-page">
                    @include('layouts.partials.navbar')
                    <div class="content-wrapper">
                        <main id="main-content">
                            @yield('content')
                        </main>
                        @include('layouts.partials.footer')
                        <div class="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div class="layout-overlay layout-menu-toggle"></div>
        </div>
    @else
        <div class="layout-wrapper layout-content-navbar layout-without-menu">
            <div class="layout-container">
                <div class="layout-page">
                    @include('layouts.partials.navbar')
                    <div class="content-wrapper">
                        <main id="main-content">
                            @yield('content')
                        </main>
                        @include('layouts.partials.footer')
                        <div class="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
        </div>
    @endauth
    @include('layouts.partials.script')
</body>

</html>