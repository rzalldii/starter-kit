@extends('layouts.app')
@section('title', 'Profile')
@php
    $profileUser = $profileUser ?? auth()->user();
    $isAdminView = $isAdminView ?? false;
@endphp
@section('breadcrumb')
    @if ($isAdminView)
        <li class="breadcrumb-item">
            <a href="{{ route('users.index') }}">Users</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $profileUser->full_name ?? $profileUser->username }}</li>
    @else
        <li class="breadcrumb-item active" aria-current="page">My Profile</li>
    @endif
@endsection
@section('content')
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-5">
                <div class="card mb-4">
                    <div class="card-body">
                        <small class="card-text text-uppercase text-body-secondary">About</small>
                        <ul class="list-unstyled my-3 py-1">
                            <li class="d-flex align-items-center mb-4">
                                <i class="bx bx-at" aria-hidden="true"></i><span class="fw-medium mx-2">Username:</span>
                                <span id="displayUsername">{{ $profileUser->username }}</span>
                            </li>
                            <li class="d-flex align-items-center mb-4">
                                <i class="bx bx-user" aria-hidden="true"></i><span class="fw-medium mx-2">Full Name:</span>
                                <span id="displayFullName">{{ $profileUser->full_name ?? '—' }}</span>
                            </li>
                            <li class="d-flex align-items-center mb-4">
                                <i class="bx bx-crown" aria-hidden="true"></i><span class="fw-medium mx-2">Role:</span>
                                <span>{{ $profileUser->isAdmin() ? ($profileUser->isPrimary() ? 'Primary Admin' : 'Admin') : 'User' }}</span>
                            </li>
                            <li class="d-flex align-items-start mb-4">
                                <i class="bx bx-home" aria-hidden="true"></i>
                                <div class="mx-2 flex-grow-1">
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="fw-medium">Address:</span>
                                        <a href="javascript:;" data-bs-toggle="collapse" data-bs-target="#addressCollapse" aria-expanded="false" aria-controls="addressCollapse" role="button" class="medium cursor-pointer {{ $profileUser->address ? '' : 'd-none' }}" id="addressCollapseLink">
                                            View Address
                                        </a>
                                        <span id="addressEmptySpan" class="{{ $profileUser->address ? 'd-none' : '' }}">—</span>
                                    </div>
                                    <div class="collapse mt-1" id="addressCollapse">
                                        <span class="text-break" id="displayAddress">{{ $profileUser->address }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <small class="card-text text-uppercase text-body-secondary">Contacts</small>
                        <ul class="list-unstyled my-3 py-1">
                            <li class="d-flex align-items-center mb-4">
                                <i class="bx bx-envelope" aria-hidden="true"></i><span class="fw-medium mx-2">Email:</span>
                                <span id="displayEmail">{{ $profileUser->email ?? '—' }}</span>
                            </li>
                            <li class="d-flex align-items-center mb-4">
                                <i class="bx bx-phone" aria-hidden="true"></i><span class="fw-medium mx-2">Contact:</span>
                                <span id="displayPhoneNumber">{{ $profileUser->formatted_phone_number ?? '—' }}</span>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-center gap-2">
                            @if (!$isAdminView)
                                <a href="javascript:;" role="button" class="btn btn-outline-secondary cursor-pointer" id="securityBtn"
                                    data-bs-target="#securityModal" data-bs-toggle="modal">
                                    <i class="bx bx-lock-alt me-1" aria-hidden="true"></i>Security
                                </a>
                                <a href="javascript:;" role="button" class="btn btn-primary cursor-pointer" id="profileBtn"
                                    data-bs-target="#profileModal" data-bs-toggle="modal">
                                    <i class="bx bx-edit-alt me-1" aria-hidden="true"></i>Edit
                                </a>
                            @else
                                <a href="{{ route('users.index') }}" class="btn btn-outline-secondary">
                                    <i class="bx bx-arrow-back me-1" aria-hidden="true"></i>Back to User List
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-body">
                        <small class="card-text text-uppercase text-body-secondary">Overview</small>
                        <ul class="list-unstyled mb-0 mt-3 pt-1">
                            <li class="d-flex align-items-center"><i class="icon-base bx bx-history" aria-hidden="true"></i>
                                <span class="fw-medium mx-2">Activities Recorded:</span> <span>{{ $totalActivities }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-md-7">
                <div class="card mb-4">
                    <h5 class="card-header text-md-start text-center">
                        {{ $isAdminView ? $profileUser->username . "'s Activity History" : 'My Activity History' }}
                    </h5>
                    <div class="table-responsive text-nowrap">
                        <table class="table table-striped">
                            <caption class="visually-hidden">Activity History</caption>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Action</th>
                                    <th class="text-center">Detail</th>
                                </tr>
                            </thead>
                            <tbody class="table-border-bottom-0">
                                @forelse ($activities as $index => $activity)
                                    <tr>
                                        <td>{{ $activity['date'] }}</td>
                                        <td>
                                            <span class="badge {{ $activity['action_badge'] }}">
                                                {{ $activity['action_label'] }}
                                            </span>
                                        </td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-sm btn-icon btn-outline-info viewActivityBtn" data-bs-toggle="tooltip" data-bs-placement="top" title="View" data-log-id="{{ $activity['log_id'] }}" aria-label="View">
                                                <i class="bx bx-show" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="3" class="text-center py-5">
                                            <div class="d-flex flex-column align-items-center justify-content-center">
                                                <h6 class="mb-1 text-secondary">No Activity Available</h6>
                                            </div>
                                        </td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @if (!$isAdminView)
        <div class="modal fade" id="profileModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="profileModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <form id="profileForm" class="modal-content" novalidate>
                    @csrf
                    @method('PUT')
                    <div class="modal-header">
                        <h5 class="modal-title" id="profileModalTitle">Edit Profile</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="username">Username <span class="text-danger">*</span></label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-at" aria-hidden="true"></i></span>
                                    <input type="text" name="username" id="username" class="form-control" placeholder="e.g., johndoe123" value="{{ auth()->user()->username }}" autocomplete="username" required aria-describedby="usernameError">
                                </div>
                                <div class="invalid-feedback" id="usernameError"></div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="full_name">Full Name</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-user" aria-hidden="true"></i></span>
                                    <input type="text" name="full_name" id="full_name" class="form-control" placeholder="e.g., John Doe" value="{{ auth()->user()->full_name }}" autocomplete="name" aria-describedby="full_nameError">
                                </div>
                                <div class="invalid-feedback" id="full_nameError"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="email">Email</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-envelope" aria-hidden="true"></i></span>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="e.g., name@email.com" value="{{ auth()->user()->email }}" autocomplete="email" aria-describedby="emailError">
                                </div>
                                <div class="invalid-feedback" id="emailError"></div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label" for="phone_number">Phone Number</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-phone" aria-hidden="true"></i></span>
                                    <input type="text" name="phone_number" id="phone_number" class="form-control" placeholder="e.g., +62 812-3456-7890" value="{{ auth()->user()->formatted_phone_number }}" autocomplete="tel" aria-describedby="phone_numberError">
                                </div>
                                <div class="invalid-feedback" id="phone_numberError"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <label class="form-label" for="address">Address</label>
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="bx bx-home" aria-hidden="true"></i></span>
                                    <textarea name="address" id="address" class="form-control" placeholder="e.g., Jl. Example No. 123" rows="1" autocomplete="street-address" aria-describedby="addressError">{{ auth()->user()->address }}</textarea>
                                </div>
                                <div class="invalid-feedback" id="addressError"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" id="saveProfileBtn" class="btn btn-primary">
                            <i class="bx bx-save me-1" aria-hidden="true"></i>Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="modal fade" id="securityModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="securityModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <form id="securityForm" class="modal-content" novalidate>
                    @csrf
                    @method('PUT')
                    <div class="modal-header">
                        <h5 class="modal-title" id="securityModalTitle">Change Password</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3 form-password-toggle">
                            <label class="form-label" for="current_password">Current Password <span class="text-danger">*</span></label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="current_password" id="current_password" class="form-control" placeholder="••••••••" autocomplete="current-password" minlength="8" required aria-describedby="current_passwordError">
                                <button type="button" class="input-group-text cursor-pointer" aria-label="Show password">
                                    <i class="bx bx-hide" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="invalid-feedback" id="current_passwordError"></div>
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <label class="form-label" for="new_password">New Password <span class="text-danger">*</span></label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="password" id="new_password" class="form-control" placeholder="••••••••" autocomplete="new-password" minlength="8" required aria-describedby="passwordError newPasswordHelp">
                                <button type="button" class="input-group-text cursor-pointer" aria-label="Show password">
                                    <i class="bx bx-hide" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="invalid-feedback" id="passwordError"></div>
                            <div class="form-text" id="newPasswordHelp">Min. 8 characters, letters & numbers</div>
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <label class="form-label" for="password_confirmation">Confirm New Password <span class="text-danger">*</span></label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="••••••••" autocomplete="new-password" minlength="8" required aria-describedby="password_confirmationError">
                                <button type="button" class="input-group-text cursor-pointer" aria-label="Show password">
                                    <i class="bx bx-hide" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="invalid-feedback" id="password_confirmationError"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" id="saveSecurityBtn" class="btn btn-primary">
                            <i class="bx bx-save me-1" aria-hidden="true"></i>Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    @endif
    <div class="modal fade" id="myActivityDetailModal" tabindex="-1" aria-labelledby="myActivityDetailModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myActivityDetailModalTitle">Activity Detail</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="detailContent"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('script')
    <script src="{{ asset('js/audit-helpers.js') }}"></script>
    <script nonce="{{ $cspNonce }}">
        $(document).ready(function () {
            var auditDetailUrlPattern = '{{ route("audit-logs.detail", ":id") }}';
            $('#username').on('input', function () {
                this.value = this.value.toLowerCase().replace(/[^a-z0-9_.]/g, '');
            });
            $('#phone_number').on('input', function () {
                this.value = this.value.replace(/[^0-9+\- ]/g, '');
            });
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl);
            });
            function resetForm(formId) {
                $('#' + formId)[0].reset();
                clearErrors(formId);
                if (formId === 'securityForm') {
                    $('#securityModal input[type="text"]').filter('#current_password, #new_password, #password_confirmation').attr('type', 'password');
                    $('#securityModal .form-password-toggle i').removeClass('bx-show').addClass('bx-hide');
                }
            }
            function clearErrors(formId) {
                $('#' + formId + ' .is-invalid').removeClass('is-invalid');
                $('#' + formId + ' .input-group-text').removeClass('border-danger');
                $('#' + formId + ' .invalid-feedback').text('').removeClass('d-block');
            }
            $('#profileModal').on('hidden.bs.modal', function () {
                clearErrors('profileForm');
                $('#username').val($('#displayUsername').text().trim());
                var fullName = $('#displayFullName').text().trim();
                $('#full_name').val(fullName === '—' ? '' : fullName);
                var email = $('#displayEmail').text().trim();
                $('#email').val(email === '—' ? '' : email);
                var phone = $('#displayPhoneNumber').text().trim();
                $('#phone_number').val(phone === '—' ? '' : phone);
                $('#address').val($('#displayAddress').text().trim());
            });
            $('#profileModal').on('shown.bs.modal', function () {
                $('#username').focus();
            });
            $('#securityModal').on('hidden.bs.modal', function () {
                resetForm('securityForm');
            });
            $('#securityModal').on('shown.bs.modal', function () {
                $('#current_password').focus();
            });
            $('#profileForm, #securityForm').on('input change', 'input, textarea, select', function () {
                var $field = $(this);
                $field.removeClass('is-invalid');
                $field.siblings('.input-group-text').removeClass('border-danger');
                $field.closest('.input-group').find('.input-group-text').removeClass('border-danger');
                var fieldName = $field.attr('name');
                if (fieldName) {
                    $('#' + fieldName + 'Error').text('').removeClass('d-block');
                }
                if (fieldName === 'password' || this.id === 'new_password') {
                    $('#passwordError').text('').removeClass('d-block');
                    $('#password_confirmation').removeClass('is-invalid');
                    $('#password_confirmation').siblings('.input-group-text').removeClass('border-danger');
                    $('#password_confirmationError').text('').removeClass('d-block');
                }
                if (fieldName === 'password_confirmation') {
                    $('#password_confirmationError').text('').removeClass('d-block');
                }
            });
            $('#profileForm').on('submit', function (e) {
                e.preventDefault();
                clearErrors('profileForm');
                var $modal = $('#profileModal');
                var $submitBtn = $('#saveProfileBtn');
                var $closeBtns = $modal.find('.btn-close, [data-bs-dismiss="modal"]');
                $submitBtn.html('<i class="bx bx-loader-alt bx-spin me-1" aria-hidden="true"></i>Saving...').prop('disabled', true);
                $closeBtns.prop('disabled', true);
                $.ajax({
                    type: 'POST',
                    url: '{{ route('profile.update') }}',
                    data: $(this).serialize(),
                    success: function (data, textStatus, xhr) {
                        $submitBtn.html('<i class="bx bx-save me-1" aria-hidden="true"></i>Save').prop('disabled', false);
                        $closeBtns.prop('disabled', false);
                        if (xhr.status === 204) {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'info',
                                title: 'No Changes Detected',
                                confirmButtonColor: '#696cff'
                            });
                            return;
                        }
                        if (data && data.user) {
                            $('#displayUsername').text(data.user.username);
                            $('#displayFullName').text(data.user.full_name || '—');
                            $('#displayEmail').text(data.user.email || '—');
                            $('#displayPhoneNumber').text(data.user.formatted_phone_number || '—');
                            if (data.user.address) {
                                $('#displayAddress').text(data.user.address);
                                $('#addressCollapseLink').removeClass('d-none');
                                $('#addressEmptySpan').addClass('d-none');
                            } else {
                                $('#displayAddress').text('');
                                $('#addressCollapseLink').addClass('d-none');
                                $('#addressEmptySpan').removeClass('d-none');
                                $('#addressCollapse').removeClass('show');
                            }
                            $('#username').val(data.user.username);
                            $('#full_name').val(data.user.full_name || '');
                            $('#email').val(data.user.email || '');
                            $('#phone_number').val(data.user.formatted_phone_number || '');
                            $('#address').val(data.user.address || '');
                        }
                        $modal.modal('hide');
                        Swal.fire({
                            icon: 'success',
                            title: 'Profile Saved Successfully',
                            showConfirmButton: false,
                            timer: 2500
                        }).then(function () {
                            location.reload();
                        });
                    },
                    error: function (xhr) {
                        $submitBtn.html('<i class="bx bx-save me-1" aria-hidden="true"></i>Save').prop('disabled', false);
                        $closeBtns.prop('disabled', false);
                        if (xhr.status === 422) {
                            var errors = xhr.responseJSON.errors;
                            $.each(errors, function (field, messages) {
                                var input = $('[name="' + field + '"]');
                                input.addClass('is-invalid');
                                input.siblings('.input-group-text').addClass('border-danger');
                                $('#' + field + 'Error').text(messages[0]).addClass('d-block');
                            });
                        } else if (xhr.status === 419) {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'warning',
                                title: 'Session Expired',
                                confirmButtonColor: '#696cff'
                            }).then(function () {
                                location.reload();
                            });
                        } else if (xhr.status === 429) {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'warning',
                                title: 'Too Many Requests',
                                confirmButtonColor: '#696cff'
                            });
                        } else {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'error',
                                title: xhr.status === 403 ? 'Action Not Permitted' : 'Unable to Save Profile',
                                confirmButtonColor: '#696cff'
                            });
                        }
                    }
                });
            });
            $('#securityForm').on('submit', function (e) {
                e.preventDefault();
                clearErrors('securityForm');
                var $modal = $('#securityModal');
                var $submitBtn = $('#saveSecurityBtn');
                var $closeBtns = $modal.find('.btn-close, [data-bs-dismiss="modal"]');
                $submitBtn.html('<i class="bx bx-loader-alt bx-spin me-1" aria-hidden="true"></i>Saving...').prop('disabled', true);
                $closeBtns.prop('disabled', true);
                $.ajax({
                    type: 'POST',
                    url: '{{ route('profile.password') }}',
                    data: $(this).serialize(),
                    success: function () {
                        $submitBtn.html('<i class="bx bx-save me-1" aria-hidden="true"></i>Save').prop('disabled', false);
                        $closeBtns.prop('disabled', false);
                        resetForm('securityForm');
                        $modal.modal('hide');
                        Swal.fire({
                            icon: 'success',
                            title: 'Password Saved Successfully',
                            showConfirmButton: false,
                            timer: 2500
                        }).then(function () {
                            location.reload();
                        });
                    },
                    error: function (xhr) {
                        $submitBtn.html('<i class="bx bx-save me-1" aria-hidden="true"></i>Save').prop('disabled', false);
                        $closeBtns.prop('disabled', false);
                        if (xhr.status === 422) {
                            var errors = xhr.responseJSON.errors;
                            $.each(errors, function (field, value) {
                                var message = Array.isArray(value) ? value[0] : value;
                                if (field === 'password' && message.toLowerCase().indexOf('confirmation') !== -1) {
                                    var $newPass = $('#new_password');
                                    var $confirmPass = $('#password_confirmation');
                                    $newPass.addClass('is-invalid');
                                    $newPass.siblings('.input-group-text').addClass('border-danger');
                                    $confirmPass.addClass('is-invalid');
                                    $confirmPass.siblings('.input-group-text').addClass('border-danger');
                                    $('#password_confirmationError').text(message).addClass('d-block');
                                } else {
                                    var inputName = field === 'password' ? 'new_password' : field;
                                    var input = $('#' + inputName);
                                    input.addClass('is-invalid');
                                    input.siblings('.input-group-text').addClass('border-danger');
                                    $('#' + field + 'Error').text(message).addClass('d-block');
                                }
                            });
                        } else if (xhr.status === 419) {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'warning',
                                title: 'Session Expired',
                                confirmButtonColor: '#696cff'
                            }).then(function () {
                                location.reload();
                            });
                        } else if (xhr.status === 429) {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'warning',
                                title: 'Too Many Requests',
                                confirmButtonColor: '#696cff'
                            });
                        } else {
                            $modal.modal('hide');
                            Swal.fire({
                                icon: 'error',
                                title: xhr.status === 403 ? 'Action Not Permitted' : 'Unable to Save Password',
                                confirmButtonColor: '#696cff'
                            });
                        }
                    }
                });
            });
            $('body').on('click', '.viewActivityBtn', function () {
                var logId = $(this).data('log-id');
                Swal.fire({
                    title: 'Loading Detail...',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: function () {
                        Swal.showLoading();
                    }
                });
                $.getJSON(auditDetailUrlPattern.replace(':id', logId))
                    .done(function (res) {
                        Swal.close();
                        $('#detailContent').html(renderDiffTable(res, { mode: 'user' }));
                        $('#myActivityDetailModal').modal('show');
                    })
                    .fail(function (xhr) {
                        Swal.close();
                        if (xhr && xhr.status === 419) {
                            Swal.fire({
                                icon: 'warning',
                                title: 'Session Expired',
                                confirmButtonColor: '#696cff'
                            }).then(function () {
                                location.reload();
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Unable to Load Detail',
                                confirmButtonColor: '#696cff'
                            });
                        }
                    });
            });
        });
    </script>
@endpush