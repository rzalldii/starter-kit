<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserResource;
use App\Models\User\User;
use App\Services\User\ProfileService;
use App\Services\User\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;
use Illuminate\View\View;

class UserController extends Controller
{
    public function __construct(
        protected UserService $userService,
        protected ProfileService $profileService,
    ) {}

    public function index(): View
    {
        Gate::authorize('viewAny', User::class);
        $users = User::orderBy('username')->get();

        return view('pages.user.users', compact('users'));
    }

    public function show(User $user): View
    {
        Gate::authorize('view', $user);

        return view('pages.user.profile', $this->profileService->getProfileData($user, true));
    }

    public function store(StoreUserRequest $request): JsonResponse
    {
        Gate::authorize('create', User::class);
        $user = $this->userService->createUser($request->validated());
        $resource = new UserResource($user);

        return response()->json([
            'success' => true,
            'data' => $resource,
            'user' => $resource,
        ], 201);
    }

    public function edit(User $user): JsonResponse
    {
        Gate::authorize('update', $user);

        return response()->json([
            'id' => $user->id,
            'username' => $user->username,
            'role' => $user->roleValue(),
        ]);
    }

    public function update(UpdateUserRequest $request, User $user): JsonResponse
    {
        Gate::authorize('update', $user);
        $updatedUser = $this->userService->updateUser($user, $request->validated(), auth()->user());
        if (! $updatedUser) {
            return response()->json([], 204);
        }
        $resource = new UserResource($updatedUser);

        return response()->json([
            'success' => true,
            'data' => $resource,
            'user' => $resource,
        ], 200);
    }

    public function destroy(User $user): JsonResponse
    {
        Gate::authorize('delete', $user);
        $this->userService->deleteUser($user);

        return response()->json(['success' => true], 200);
    }
}
