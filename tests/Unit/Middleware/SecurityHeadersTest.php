<?php

declare(strict_types=1);

namespace Tests\Unit\Middleware;

use App\Http\Middleware\SecurityHeaders;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class SecurityHeadersTest extends TestCase
{
    public function test_adds_security_headers_to_response(): void
    {
        $middleware = new SecurityHeaders;
        $request = Request::create('/some-page', 'GET');
        $response = $middleware->handle($request, function () {
            return new Response('Content');
        });
        $this->assertEquals('DENY', $response->headers->get('X-Frame-Options'));
        $this->assertEquals('nosniff', $response->headers->get('X-Content-Type-Options'));
        $this->assertEquals('strict-origin-when-cross-origin', $response->headers->get('Referrer-Policy'));
        $this->assertEquals('0', $response->headers->get('X-XSS-Protection'));
        $this->assertEquals('camera=(), microphone=(), geolocation=()', $response->headers->get('Permissions-Policy'));
    }

    public function test_adds_hsts_header_on_secure_request(): void
    {
        $middleware = new SecurityHeaders;
        $request = Request::create('https://example.com/secure-page', 'GET');
        $response = $middleware->handle($request, function () {
            return new Response('Content');
        });
        $this->assertEquals('max-age=31536000; includeSubDomains', $response->headers->get('Strict-Transport-Security'));
    }

    public function test_no_hsts_header_on_non_secure_request(): void
    {
        $middleware = new SecurityHeaders;
        $request = Request::create('http://example.com/plain-page', 'GET');
        $response = $middleware->handle($request, function () {
            return new Response('Content');
        });
        $this->assertNull($response->headers->get('Strict-Transport-Security'));
    }

    public function test_csp_contains_nonce(): void
    {
        $middleware = new SecurityHeaders;
        $request = Request::create('/page', 'GET');
        $response = $middleware->handle($request, function () {
            return new Response('Content');
        });
        $csp = (string) $response->headers->get('Content-Security-Policy');
        $this->assertStringContainsString("script-src 'self' 'nonce-", $csp);
        $this->assertStringNotContainsString("'unsafe-eval'", $csp);
        $this->assertStringContainsString("default-src 'self'", $csp);
    }

    public function test_shares_csp_nonce_with_views(): void
    {
        $middleware = new SecurityHeaders;
        $request = Request::create('/page', 'GET');
        $middleware->handle($request, function () {
            return new Response('Content');
        });
        $sharedNonce = view()->shared('cspNonce');
        $this->assertNotEmpty($sharedNonce);
        $this->assertIsString($sharedNonce);
    }
}
