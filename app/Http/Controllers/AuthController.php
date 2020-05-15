<?php

namespace App\Http\Controllers;

use App\Rules\EmailWhitelisted;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        Auth::guard()->login($user);

        return new Response('This is the response content', 201);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);
        $credentials = $request->only('email', 'password');

        // TODO: Throttle login attempts

        if (Auth::guard()->attempt($credentials)) {
            Log::debug('Attempt successful');
            return response()->json(['user' => Auth::user()]);
        } else {
            throw ValidationException::withMessages([
                'credentials' => 'These credentials do not match our records',
            ]);
        }
    }

    protected function validateLogin(Request $request) {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }

    public function validator(array $data) {
        return Validator::make($data, [
            'firstName' => ['required', 'string', 'max:255'],
            'lastName' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users', new EmailWhitelisted()],
            'password' => ['required', 'string', 'min:8'],
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'first_name' => $data['firstName'],
            'last_name' => $data['lastName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
