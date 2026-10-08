function formatRupiah(angka) {
    if (angka === null || angka === undefined || angka === '') return '';
    var str = angka.toString().split('.')[0];
    var number_string = str.replace(/[^,\d]/g, ''),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return rupiah;
}

var TAG_PRESET_MAP = {
    '#696cff': 'tag-badge-blue',
    '#8592a3': 'tag-badge-gray',
    '#71dd37': 'tag-badge-green',
    '#ff3e1d': 'tag-badge-red',
    '#ffab00': 'tag-badge-yellow',
    '#03c3ec': 'tag-badge-cyan',
    '#233446': 'tag-badge-dark'
};

var TAG_PRESET_COLORS = Object.keys(TAG_PRESET_MAP);

function getTagBadgeClass(color) {
    return TAG_PRESET_MAP[(color || '').toLowerCase()] || 'tag-badge-blue';
}

function getRandomTagColor() {
    return TAG_PRESET_COLORS[Math.floor(Math.random() * TAG_PRESET_COLORS.length)];
}

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return $('<div>').text(String(str)).html();
}