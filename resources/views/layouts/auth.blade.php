<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('layouts.partials.head')
</head>

<body>
    <a href="#main-content" class="visually-hidden-focusable">Skip to content</a>
    <main id="main-content">
        @yield('content')
    </main>
    @include('layouts.partials.script')
</body>

</html>