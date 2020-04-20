<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    public function redirectTo()
    {

        // User role
        $role = Auth::user()->role_id;

        // Check user role
        switch ($role) {
            case '1':
                return '/dashboard';
                break;
            case '2':
                return '/department';
                break;
            case '3':
                return '/team';
                break;
            case '4':
                return '/employee';
                break;
        }
    }
}
