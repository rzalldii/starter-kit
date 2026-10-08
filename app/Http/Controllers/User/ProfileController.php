<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdatePasswordRequest;
use App\Http\Requests\User\UpdateProfileRequest;
use App\Http\Resources\User\UserResource;
use App\Services\User\ProfileService;
use Illuminate\Http\JsonResponse;
use Illuminate\View\View;

class ProfileController extends Controller
{
    public function __construct(
        protected ProfileService $profileService
    ) {}

    public function show(): View
    {
        return view('pages.user.profile', $this->profileService->getProfileData(auth()->user(), false));
    }

    public function update(UpdateProfileRequest $request): JsonResponse
    {
        $user = auth()->user();
        $updatedUser = $this->profileService->updateProfile($user, $request->validated());
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

    public function updatePassword(UpdatePasswordRequest $request): JsonResponse
    {
        $validated = $request->validated();
        $updated = $this->profileService->updatePassword(auth()->user(), $validated['current_password'], $validated['password']);
        if (! $updated) {
            return response()->json(['success' => false], 422);
        }

        return response()->json(['success' => true], 200);
    }
}
