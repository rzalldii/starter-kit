@extends('layouts.app')
@section('title', 'Users')
@section('breadcrumb')
    <li class="breadcrumb-item active" aria-current="page">Users</li>
@endsection
@push('style')
    <link rel="stylesheet" href="{{ asset('vendor/libs/datatables/dataTables.bootstrap5.css') }}">
@endpush
@section('content')
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Users</h5>
                <button type="button" class="btn btn-primary" id="createNewUser" data-entity="user" data-action="create">
                    <i class="bx bx-plus me-1" aria-hidden="true"></i>Add User
                </button>
            </div>
            <div class="card-body">
                <div class="table-responsive text-nowrap">
                    <table class="table table-striped" id="userTable">
                        <caption class="visually-hidden">Users</caption>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Contact Info</th>
                                <th>Role</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            @foreach ($users as $user)
                                <tr id="user-row-{{ $user->id }}" data-id="{{ $user->id }}" data-entity="user" data-entity-id="{{ $user->id }}">
                                    <td>
                                        <div class="d-flex flex-column">
                                            <div>
                                                <span class="fw-bold">{{ $user->full_name ?? $user->username }}</span>
                                                @if ($user->id === auth()->id())
                                                    <span class="badge bg-label-primary ms-1">You</span>
                                                @endif
                                            </div>
                                            <small class="text-muted">{{ '@' . $user->username }}</small>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="d-flex flex-column gap-1">
                                            @if($user->email)
                                                <div class="d-flex align-items-center text-body-secondary small" title="{{ $user->email }}">
                                                    <i class="bx bx-envelope text-muted me-1" aria-hidden="true"></i>
                                                    <span class="text-truncate">{{ $user->email }}</span>
                                                </div>
                                            @endif
                                            @if($user->phone_number)
                                                <div class="d-flex align-items-center text-body-secondary small" title="{{ $user->formatted_phone_number }}">
                                                    <i class="bx bx-phone text-muted me-1" aria-hidden="true"></i>
                                                    <span class="text-truncate">{{ $user->formatted_phone_number }}</span>
                                                </div>
                                            @endif
                                            @if(!$user->email && !$user->phone_number)
                                                <span class="text-muted">—</span>
                                            @endif
                                        </div>
                                    </td>
                                    <td>
                                        @if ($user->isAdmin())
                                            @if ($user->isPrimary())
                                                <span class="text-truncate d-flex align-items-center text-heading">
                                                    <i class="bx bx-crown text-warning me-2" aria-hidden="true"></i>Primary Admin
                                                </span>
                                            @else
                                                <span class="text-truncate d-flex align-items-center text-heading">
                                                    <i class="bx bx-desktop text-danger me-2" aria-hidden="true"></i>Admin
                                                </span>
                                            @endif
                                        @else
                                            <span class="text-truncate d-flex align-items-center text-heading">
                                                <i class="bx bx-user text-success me-2" aria-hidden="true"></i>User
                                            </span>
                                        @endif
                                    </td>
                                    <td class="text-center">
                                        <div class="d-flex gap-1 justify-content-center">
                                            @if (auth()->id() === $user->id)
                                                <a href="{{ route('profile.show') }}" class="btn btn-sm btn-icon btn-outline-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" aria-label="Edit">
                                                    <i class="bx bx-edit-alt" aria-hidden="true"></i>
                                                </a>
                                            @else
                                                @can('view', $user)
                                                    <a href="{{ route('users.profile', $user) }}" class="btn btn-sm btn-icon btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="top" title="View" aria-label="View" data-entity="user" data-action="view">
                                                        <i class="bx bx-show" aria-hidden="true"></i>
                                                    </a>
                                                @endcan
                                                @can('update', $user)
                                                    <button type="button" class="btn btn-sm btn-icon btn-outline-warning editBtn" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" data-id="{{ $user->id }}" aria-label="Edit" data-entity="user" data-action="edit">
                                                        <i class="bx bx-edit-alt" aria-hidden="true"></i>
                                                    </button>
                                                    @can('delete', $user)
                                                        <button type="button" class="btn btn-sm btn-icon btn-outline-danger deleteBtn" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" data-id="{{ $user->id }}" aria-label="Delete" data-entity="user" data-action="delete">
                                                            <i class="bx bx-trash" aria-hidden="true"></i>
                                                        </button>
                                                    @endcan
                                                @else
                                                    <button type="button" class="btn btn-sm btn-icon btn-outline-secondary" aria-label="Locked" disabled>
                                                        <i class="bx bx-lock-alt" aria-hidden="true"></i>
                                                    </button>
                                                @endcan
                                            @endif
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="userModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <form id="userForm" class="modal-content" novalidate>
                @csrf
                <input type="hidden" name="user_id" id="user_id">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitle">Add User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <label class="form-label" for="username">Username <span class="text-danger">*</span></label>
                            <input type="text" name="username" id="username" class="form-control" placeholder="e.g., johndoe123" autocomplete="username" required aria-describedby="usernameError">
                            <div class="invalid-feedback" id="usernameError"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3 form-password-toggle">
                            <label class="form-label" id="passwordLabel" for="password">Password <span class="text-danger">*</span></label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="password" id="password" class="form-control" placeholder="••••••••" autocomplete="new-password" minlength="8" required aria-describedby="passwordError passwordHelp">
                                <button type="button" class="input-group-text cursor-pointer" aria-label="Show password">
                                    <i class="bx bx-hide" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="invalid-feedback" id="passwordError"></div>
                            <div class="form-text" id="passwordHelp">Min. 8 characters, letters & numbers.</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mb-3">
                            <label class="form-label" for="role">Role <span class="text-danger">*</span></label>
                            <select name="role" id="role" class="form-select" required aria-describedby="roleError">
                                <option value="" selected disabled>Select Role</option>
                                @if (auth()->user()->isPrimary())
                                    <option value="admin">Admin</option>
                                @endif
                                <option value="user">User</option>
                            </select>
                            <div class="invalid-feedback" id="roleError"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" id="saveBtn" class="btn btn-primary" data-entity="user" data-action="save">
                        <i class="bx bx-save me-1" aria-hidden="true"></i>Save
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
@push('script')
    <script src="{{ asset('vendor/libs/datatables/dataTables.js') }}"></script>
    <script src="{{ asset('vendor/libs/datatables/dataTables.bootstrap5.js') }}"></script>
    <script nonce="{{ $cspNonce }}">
        $(document).ready(function () {
            var userBaseUrl = '{{ route("users.index") }}';
            $('#username').on('input', function () {
                this.value = this.value.toLowerCase().replace(/[^a-z0-9_.]/g, '');
            });
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.extend(true, DataTable.ext.classes, {
                search: { input: 'form-control' },
                length: { select: 'form-select' }
            });
            var table = $('#userTable').DataTable({
                order: [[0, 'asc']],
                columnDefs: [
                    { orderable: false, targets: [3] }
                ],
                pageLength: 10,
                language: {
                    emptyTable: '<div class="text-center py-5"><div class="avatar avatar-lg mx-auto mb-3"><span class="avatar-initial rounded-circle bg-label-primary"><i class="bx bx-user fs-2" aria-hidden="true"></i></span></div><h5 class="mb-3 text-heading">No Users Available</h5><button type="button" class="btn btn-sm btn-primary btn-create-user"><i class="bx bx-plus me-1" aria-hidden="true"></i>Add User</button></div>',
                    zeroRecords: '<div class="text-center py-5"><div class="avatar avatar-lg mx-auto mb-3"><span class="avatar-initial rounded-circle bg-label-warning"><i class="bx bx-filter-alt fs-2" aria-hidden="true"></i></span></div><h5 class="mb-0 text-heading">No Matching Users</h5></div>',
                    lengthMenu: "Show _MENU_ entries",
                    info: "Showing _START_ to _END_ of _TOTAL_ entries",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtered from _MAX_ total entries)",
                    search: "Search:",
                    searchPlaceholder: "Search User",
                    paginate: {
                        first: '<i class="bx bx-chevrons-left" aria-hidden="true"></i>',
                        previous: '<i class="bx bx-chevron-left" aria-hidden="true"></i>',
                        next: '<i class="bx bx-chevron-right" aria-hidden="true"></i>',
                        last: '<i class="bx bx-chevrons-right" aria-hidden="true"></i>'
                    }
                }
            });
            table.on('draw', function () {
                $('.tooltip').remove();
                initTooltips();
            });
            function initTooltips() {
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
                tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                    bootstrap.Tooltip.getOrCreateInstance(tooltipTriggerEl);
                });
            }
            function resetForm() {
                $('#userForm')[0].reset();
                $('#user_id').val('');
                $('#modalTitle').text('Add User');
                $('#passwordLabel').html('Password <span class="text-danger">*</span>');
                $('#password').attr('placeholder', '••••••••').prop('required', true).attr('type', 'password');
                $('#userModal .form-password-toggle i').removeClass('bx-show').addClass('bx-hide');
                $('#userForm .is-invalid').removeClass('is-invalid');
                $('#userForm .input-group-text').removeClass('border-danger');
                $('#userForm .invalid-feedback').text('').removeClass('d-block');
            }
            $('#userModal').on('hidden.bs.modal', function () {
                resetForm();
            });
            $('#userModal').on('shown.bs.modal', function () {
                $('#username').focus();
            });
            $(document).on('click', '#createNewUser, .btn-create-user', function () {
                resetForm();
                $('#userModal').modal('show');
            });
            $('#userForm').on('input change', 'input, select', function () {
                var $field = $(this);
                $field.removeClass('is-invalid');
                $field.siblings('.input-group-text').removeClass('border-danger');
                $field.closest('.input-group').find('.input-group-text').removeClass('border-danger');
                var fieldName = $field.attr('name');
                if (fieldName) {
                    $('#' + fieldName + 'Error').text('').removeClass('d-block');
                }
            });
            $('#userForm').on('submit', function (e) {
                e.preventDefault();
                var userId = $('#user_id').val();
                var url = userId ? userBaseUrl + '/' + userId : userBaseUrl;
                var formData = $(this).serialize();
                if (userId) {
                    formData += '&_method=PUT';
                }
                $('#userForm .is-invalid').removeClass('is-invalid');
                $('#userForm .input-group-text').removeClass('border-danger');
                $('#userForm .invalid-feedback').text('').removeClass('d-block');
                var $modal = $('#userModal');
                var $submitBtn = $('#saveBtn');
                var $closeBtns = $modal.find('.btn-close, [data-bs-dismiss="modal"]');
                $submitBtn.html('<i class="bx bx-loader-alt bx-spin me-1" aria-hidden="true"></i>Saving...').prop('disabled', true);
                $closeBtns.prop('disabled', true);
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: formData,
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
                        $modal.modal('hide');
                        Swal.fire({
                            icon: 'success',
                            title: 'User Saved Successfully',
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
                                var input = $('#userForm [name="' + field + '"]');
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
                                title: xhr.status === 403 ? 'Action Not Permitted' : 'Unable to Save User',
                                confirmButtonColor: '#696cff'
                            });
                        }
                    }
                });
            });
            $('body').on('click', '.editBtn', function () {
                var userId = $(this).data('id');
                Swal.fire({
                    title: 'Loading User...',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didOpen: function () {
                        Swal.showLoading();
                    }
                });
                $.get(userBaseUrl + '/' + userId + '/edit', function (data) {
                    Swal.close();
                    resetForm();
                    $('#modalTitle').text('Edit User');
                    $('#user_id').val(data.id);
                    $('#username').val(data.username);
                    $('#role').val(data.role);
                    $('#passwordLabel').text('New Password (Optional)');
                    $('#password').attr('placeholder', 'Leave blank to retain current password').prop('required', false);
                    $('#userModal').modal('show');
                }).fail(function (xhr) {
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
                            title: 'Unable to Load User',
                            confirmButtonColor: '#696cff'
                        });
                    }
                });
            });
            $('body').on('click', '.deleteBtn', function () {
                var userId = $(this).data('id');
                Swal.fire({
                    title: 'Delete User?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Delete',
                    cancelButtonText: 'Cancel',
                    confirmButtonColor: '#dc3545',
                    cancelButtonColor: '#8592a3',
                    focusCancel: true,
                    reverseButtons: true
                }).then(function (result) {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Deleting User...',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            didOpen: function () {
                                Swal.showLoading();
                            }
                        });
                        $.ajax({
                            type: 'DELETE',
                            url: userBaseUrl + '/' + userId,
                            success: function () {
                                Swal.close();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'User Deleted Successfully',
                                    showConfirmButton: false,
                                    timer: 2500
                                }).then(function () {
                                    location.reload();
                                });
                            },
                            error: function (xhr) {
                                Swal.close();
                                if (xhr.status === 419) {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Session Expired',
                                        confirmButtonColor: '#696cff'
                                    }).then(function () {
                                        location.reload();
                                    });
                                } else if (xhr.status === 429) {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Too Many Requests',
                                        confirmButtonColor: '#696cff'
                                    });
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: xhr.status === 403 ? 'Action Not Permitted' : 'Unable to Delete User',
                                        confirmButtonColor: '#696cff'
                                    });
                                }
                            }
                        });
                    }
                });
            });
        });
    </script>
@endpush