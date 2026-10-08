<!-- Base Scripts -->
<script src="{{ asset('vendor/js/helpers.js') }}"></script>
<script src="{{ asset('js/config.js') }}"></script>
<script src="{{ asset('vendor/libs/jquery/jquery.js') }}"></script>
<script src="{{ asset('vendor/libs/popper/popper.js') }}"></script>
<script src="{{ asset('vendor/js/bootstrap.js') }}"></script>
<script src="{{ asset('vendor/js/menu.js') }}"></script>
<script src="{{ asset('vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
<script src="{{ asset('vendor/libs/sweetalert2/sweetalert2.all.js') }}"></script>
<script src="{{ asset('js/main.js') }}"></script>

<script nonce="{{ $cspNonce ?? '' }}">
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    });
    $(document).on('shown.bs.modal', '.modal', function () {
        var $auto = $(this).find('[autofocus]:visible').not('[readonly]').not(':disabled').first();
        if ($auto.length) {
            $auto.focus();
        } else {
            $(this).find('input:visible, select:visible, textarea:visible').not('[readonly]').not(':disabled').first().focus();
        }
    });
    $(document).on('input change', '.is-invalid', function () {
        $(this).removeClass('is-invalid');
        $(this).siblings('.input-group-text').removeClass('border-danger');
        $(this).closest('.input-group').find('.input-group-text').removeClass('border-danger');
    });
    $(document).on('hidden.bs.modal', '.modal', function () {
        $(this).find('.is-invalid').removeClass('is-invalid');
        $(this).find('.input-group-text').removeClass('border-danger');
        $(this).find('.invalid-feedback').text('').removeClass('d-block');
    });
    $(document).ajaxError(function (event, jqXHR) {
        if (jqXHR.status === 401 || jqXHR.status === 419) {
            Swal.fire({
                icon: 'warning',
                title: 'Session Expired',
                confirmButtonText: 'Reload',
                allowOutsideClick: false,
                allowEscapeKey: false
            }).then(() => window.location.reload());
        } else if (jqXHR.status >= 500) {
            Toast.fire({ icon: 'error', title: 'Server Error' });
        }
    });
</script>

@if (session('toast'))
    <script nonce="{{ $cspNonce ?? '' }}">
        const toast = @json(session('toast'));
        Toast.fire({
            icon: toast.icon,
            title: toast.title
        });
    </script>
@endif

@auth
    <script nonce="{{ $cspNonce ?? '' }}">
        $(document).on('submit', '#logout-form', function (e) {
            e.preventDefault();
            const form = this;
            Swal.fire({
                title: 'Log Out?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, Log Out',
                cancelButtonText: 'Cancel',
                confirmButtonColor: '#dc3545',
                cancelButtonColor: '#8592a3',
                focusCancel: true,
                reverseButtons: true
            }).then(function (result) {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        });
    </script>
@endauth

@stack('script')