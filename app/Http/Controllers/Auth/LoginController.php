<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */


    public function redirectTo()
    {

        // User role
        $role = Auth::user()->role_id;

        // Check user role

        if($role===1){
            return route ('dashboard');
        }
        elseif($role===2){
            return route ('department');
        }
        elseif($role===3){
            return route ('team');
        }
        else{
            return route ('employee');
        }
        // switch ($role) {
            
        //     case 1:
        //         dd($role);
        //         return route ('dashboard');
        //         break;
        //     case 2:
        //         return route('department');
        //         break;
        //     case 3:
        //         return route('team');
        //         break;
        //     case 4:
        //         return route('employee');
        //         break;
        // }
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
