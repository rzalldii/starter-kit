function escapeHtml(value) {
    return $('<div>').text(value == null ? '' : String(value)).html();
}

function normalizeValue(value) {
    if (value === undefined) return '—';
    if (value === null) return null;
    if (typeof value === 'boolean') return value ? 'true' : 'false';
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
}

function getDiffType(before, after) {
    var hasBefore = before !== undefined && before !== null && before !== '—';
    var hasAfter = after !== undefined && after !== null && after !== '—';
    if (!hasBefore && hasAfter) return 'added';
    if (hasBefore && !hasAfter) return 'removed';
    if (hasBefore && hasAfter && before !== after) return 'changed';
    return 'same';
}

function getDiffBadge(type) {
    switch (type) {
        case 'added':
            return '<span class="badge bg-label-success">Added</span>';
        case 'removed':
            return '<span class="badge bg-label-danger">Removed</span>';
        case 'changed':
            return '<span class="badge bg-label-warning">Changed</span>';
        default:
            return '';
    }
}

function parseUserAgent(ua) {
    if (!ua || typeof ua !== 'string') {
        return {
            os: 'Unknown OS',
            osIcon: 'bx-help-circle',
            browser: 'Unknown Browser',
            browserIcon: 'bx-globe',
            deviceType: 'Unknown Device',
            deviceIcon: 'bx-devices'
        };
    }
    var isBot = /bot|crawler|spider|curl|postmanruntime|python|axios|wget/i.test(ua);
    var isTablet = !isBot && /ipad|tablet|(android(?!.*mobile))/i.test(ua);
    var isMobile = !isBot && !isTablet && /mobile|iphone|ipod|android.*mobile|blackberry|iemobile|opera mini/i.test(ua);
    var deviceType = 'Desktop PC';
    var deviceIcon = 'bx-laptop';
    if (isBot) {
        deviceType = 'Bot / API Client';
        deviceIcon = 'bx-server';
    } else if (isTablet) {
        deviceType = 'Tablet';
        deviceIcon = 'bx-devices';
    } else if (isMobile) {
        deviceType = 'Smartphone';
        deviceIcon = 'bx-mobile-alt';
    }
    var os = 'Unknown OS';
    var osIcon = 'bx-devices';
    if (/windows nt 10\.0/i.test(ua)) {
        os = 'Windows 10/11';
        osIcon = 'bxl-windows';
    } else if (/windows nt 6\.3/i.test(ua)) {
        os = 'Windows 8.1';
        osIcon = 'bxl-windows';
    } else if (/windows nt 6\.2/i.test(ua)) {
        os = 'Windows 8';
        osIcon = 'bxl-windows';
    } else if (/windows nt 6\.1/i.test(ua)) {
        os = 'Windows 7';
        osIcon = 'bxl-windows';
    } else if (/windows/i.test(ua)) {
        os = 'Windows';
        osIcon = 'bxl-windows';
    } else if (/iphone/i.test(ua)) {
        var iosMatch = ua.match(/OS (\d+[_.]\d+)/i);
        os = iosMatch ? 'iOS ' + iosMatch[1].replace('_', '.') : 'iOS';
        osIcon = 'bxl-apple';
    } else if (/ipad/i.test(ua)) {
        var ipadMatch = ua.match(/OS (\d+[_.]\d+)/i);
        os = ipadMatch ? 'iPadOS ' + ipadMatch[1].replace('_', '.') : 'iPadOS';
        osIcon = 'bxl-apple';
    } else if (/macintosh|mac os x/i.test(ua)) {
        os = 'macOS';
        osIcon = 'bxl-apple';
    } else if (/android/i.test(ua)) {
        var androidMatch = ua.match(/Android\s+([0-9.]+)/i);
        os = androidMatch ? 'Android ' + androidMatch[1] : 'Android';
        osIcon = 'bxl-android';
    } else if (/cros/i.test(ua)) {
        os = 'ChromeOS';
        osIcon = 'bxl-chrome';
    } else if (/linux/i.test(ua)) {
        os = 'Linux';
        osIcon = 'bxl-tux';
    } else if (isBot) {
        os = 'Automated Agent';
        osIcon = 'bx-server';
    }
    var browser = 'Unknown Browser';
    var browserIcon = 'bx-globe';
    if (/edg\//i.test(ua)) {
        var edgeMatch = ua.match(/edg\/([0-9.]+)/i);
        browser = 'Edge' + (edgeMatch ? ' ' + edgeMatch[1].split('.')[0] : '');
        browserIcon = 'bxl-edge';
    } else if (/opr\/|opera\//i.test(ua)) {
        var operaMatch = ua.match(/(?:opr|opera)\/([0-9.]+)/i);
        browser = 'Opera' + (operaMatch ? ' ' + operaMatch[1].split('.')[0] : '');
        browserIcon = 'bxl-opera';
    } else if (/samsungbrowser\//i.test(ua)) {
        var samsungMatch = ua.match(/samsungbrowser\/([0-9.]+)/i);
        browser = 'Samsung Internet' + (samsungMatch ? ' ' + samsungMatch[1].split('.')[0] : '');
        browserIcon = 'bx-globe';
    } else if (/chrome\/|crios\//i.test(ua)) {
        var chromeMatch = ua.match(/(?:chrome|crios)\/([0-9.]+)/i);
        browser = 'Chrome' + (chromeMatch ? ' ' + chromeMatch[1].split('.')[0] : '');
        browserIcon = 'bxl-chrome';
    } else if (/firefox\/|fxios\//i.test(ua)) {
        var ffMatch = ua.match(/(?:firefox|fxios)\/([0-9.]+)/i);
        browser = 'Firefox' + (ffMatch ? ' ' + ffMatch[1].split('.')[0] : '');
        browserIcon = 'bxl-firefox';
    } else if (/safari\//i.test(ua) && !/chrome\/|crios\//i.test(ua)) {
        var safariMatch = ua.match(/version\/([0-9.]+)/i);
        browser = 'Safari' + (safariMatch ? ' ' + safariMatch[1].split('.')[0] : '');
        browserIcon = 'bx-compass';
    } else if (/postmanruntime\//i.test(ua)) {
        browser = 'Postman';
        browserIcon = 'bx-terminal';
    } else if (/curl\//i.test(ua)) {
        browser = 'cURL';
        browserIcon = 'bx-terminal';
    } else if (isBot) {
        browser = 'Bot / Crawler';
        browserIcon = 'bx-server';
    }
    return {
        os: os,
        osIcon: osIcon,
        browser: browser,
        browserIcon: browserIcon,
        deviceType: deviceType,
        deviceIcon: deviceIcon
    };
}

function getEventInfoAlert(action) {
    var act = String(action || '').toLowerCase();
    if (act === 'login') {
        return '<div class="alert alert-success d-flex align-items-center mb-0" role="alert">' +
            '<i class="bx bx-check-shield fs-4 me-2 flex-shrink-0" aria-hidden="true"></i>' +
            '<h6 class="alert-heading mb-0 fw-semibold">Successful Authentication</h6>' +
            '</div>';
    }
    if (act === 'logout') {
        return '<div class="alert alert-info d-flex align-items-center mb-0" role="alert">' +
            '<i class="bx bx-log-out-circle fs-4 me-2 flex-shrink-0" aria-hidden="true"></i>' +
            '<h6 class="alert-heading mb-0 fw-semibold">Session Terminated</h6>' +
            '</div>';
    }
    if (act === 'login_failed' || act === 'login_blocked') {
        return '<div class="alert alert-danger d-flex align-items-center mb-0" role="alert">' +
            '<i class="bx bx-error fs-4 me-2 flex-shrink-0" aria-hidden="true"></i>' +
            '<h6 class="alert-heading mb-0 fw-semibold">Authentication Failed</h6>' +
            '</div>';
    }
    if (act === 'access_denied') {
        return '<div class="alert alert-warning d-flex align-items-center mb-0" role="alert">' +
            '<i class="bx bx-shield-x fs-4 me-2 flex-shrink-0" aria-hidden="true"></i>' +
            '<h6 class="alert-heading mb-0 fw-semibold">Access Denied</h6>' +
            '</div>';
    }
    return '<div class="alert alert-secondary d-flex align-items-center mb-0" role="alert">' +
        '<i class="bx bx-info-circle fs-4 me-2 flex-shrink-0" aria-hidden="true"></i>' +
        '<h6 class="alert-heading mb-0 fw-semibold">Activity Recorded</h6>' +
        '</div>';
}

function renderDiffTable(res, options) {
    var hideMetadata = false;
    var mode = 'admin';
    if (typeof options === 'boolean') {
        hideMetadata = options;
    } else if (options && typeof options === 'object') {
        if (options.hideMetadata !== undefined) hideMetadata = options.hideMetadata;
        if (options.mode) mode = options.mode;
    }
    var isUserMode = (mode === 'user');
    var oldVal = res.old_values || {};
    var newVal = res.new_values || {};
    var keys = [];
    var seen = {};
    $.each(oldVal, function (k) {
        if (!seen[k]) {
            seen[k] = true;
            keys.push(k);
        }
    });
    $.each(newVal, function (k) {
        if (!seen[k]) {
            seen[k] = true;
            keys.push(k);
        }
    });
    var metaCardHtml = '';
    if (!hideMetadata) {
        var parsedUa = parseUserAgent(res.user_agent);
        var actionBadge = res.action_badge || 'bg-label-primary';
        var actionLabel = res.action_label || escapeHtml(res.action || 'Activity');
        var ipDisplay = res.ip_address ? escapeHtml(res.ip_address) : '—';
        var dateDisplay = res.date ? escapeHtml(res.date) : '—';
        var endpointHtml = '';
        if (!isUserMode && res.method && res.url) {
            var methodBadgeClass = 'bg-label-primary';
            if (res.method === 'POST') methodBadgeClass = 'bg-label-success';
            if (res.method === 'PUT' || res.method === 'PATCH') methodBadgeClass = 'bg-label-info';
            if (res.method === 'DELETE') methodBadgeClass = 'bg-label-danger';
            endpointHtml = '<div class="d-flex flex-wrap align-items-center gap-2 mt-3 pt-2 border-top">' +
                '<span class="badge ' + methodBadgeClass + '">' + escapeHtml(res.method) + '</span>' +
                '<span class="text-muted text-break small font-monospace">' + escapeHtml(res.url) + '</span>' +
                '</div>';
        }
        metaCardHtml = '<div class="card bg-lighter border-0 shadow-none mb-3">' +
            '<div class="card-body p-3">' +
            '<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">' +
            '<div class="d-flex align-items-center gap-2">' +
            '<span class="badge ' + actionBadge + '">' + actionLabel + '</span>' +
            '<span class="text-body-secondary small"><i class="bx bx-calendar me-1" aria-hidden="true"></i>' + dateDisplay + '</span>' +
            '</div>' +
            '<div class="d-flex align-items-center gap-2">' +
            '<span class="badge bg-label-dark d-inline-flex align-items-center gap-1" title="IP Address">' +
            '<i class="bx bx-globe" aria-hidden="true"></i> ' + ipDisplay +
            '</span>' +
            '</div>' +
            '</div>' +
            '<div class="d-flex flex-wrap align-items-center gap-2">' +
            '<span class="badge bg-label-secondary d-inline-flex align-items-center gap-1" title="Device">' +
            '<i class="bx ' + parsedUa.deviceIcon + '" aria-hidden="true"></i> ' + escapeHtml(parsedUa.deviceType) +
            '</span>' +
            '<span class="badge bg-label-info d-inline-flex align-items-center gap-1" title="Operating System">' +
            '<i class="bx ' + parsedUa.osIcon + '" aria-hidden="true"></i> ' + escapeHtml(parsedUa.os) +
            '</span>' +
            '<span class="badge bg-label-primary d-inline-flex align-items-center gap-1" title="Browser">' +
            '<i class="bx ' + parsedUa.browserIcon + '" aria-hidden="true"></i> ' + escapeHtml(parsedUa.browser) +
            '</span>' +
            '</div>' +
            endpointHtml +
            '</div>' +
            '</div>';
    }
    if (!keys.length) {
        return metaCardHtml + getEventInfoAlert(res.action);
    }
    var rows = keys.map(function (key) {
        var beforeRaw = oldVal[key];
        var afterRaw = newVal[key];
        var before = normalizeValue(beforeRaw);
        var after = normalizeValue(afterRaw);
        var diffType = getDiffType(beforeRaw, afterRaw);
        var rowClass = '';
        if (diffType === 'added') rowClass = 'table-success';
        if (diffType === 'removed') rowClass = 'table-danger';
        if (diffType === 'changed') rowClass = 'table-warning';
        var badge = getDiffBadge(diffType);
        return '<tr class="' + rowClass + '">' +
            '<td class="fw-medium align-top">' +
            escapeHtml(key) + (badge ? ' ' + badge : '') +
            '</td>' +
            '<td class="align-top text-danger">' +
            escapeHtml(before === null ? '—' : before) +
            '</td>' +
            '<td class="align-top text-success">' +
            escapeHtml(after === null ? '—' : after) +
            '</td>' +
            '</tr>';
    }).join('');
    var tableHtml = '<h6 class="text-uppercase text-body-secondary fw-semibold small mb-2">Field Changes</h6>' +
        '<div class="table-responsive">' +
        '<table class="table table-sm table-bordered align-middle mb-0 diff-table">' +
        '<thead class="table-light">' +
        '<tr>' +
        '<th class="diff-col-field">Field</th>' +
        '<th class="diff-col-val">Before</th>' +
        '<th class="diff-col-val">After</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' + rows + '</tbody>' +
        '</table>' +
        '</div>';
    return metaCardHtml + tableHtml;
}