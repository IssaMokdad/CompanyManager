import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}




// class RegisterController extends Controller
// {
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

//     use RegistersUsers;

//     /**
//      * Where to redirect users after registration.
//      *
//      * @var string
//      */
//     protected $redirectTo = RouteServiceProvider::HOME;

//     /**
//      * Create a new controller instance.
//      *
//      * @return void
//      */
//     public function __construct()
//     {
//         $this->middleware('guest');
//     }

//     /**
//      * Get a validator for an incoming registration request.
//      *
//      * @param  array  $data
//      * @return \Illuminate\Contracts\Validation\Validator
//      */
//     protected function validator(array $data)
//     {
//         return Validator::make($data, [
//             'first_name' => ['required', 'string', 'max:255'],
//             'last_name' => ['required', 'string', 'max:255'],
//             'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
//             'password' => ['required', 'string', 'min:8', 'confirmed'],
//             'company_name'=>['required', 'string', 'unique:companies'],
//             'description' => ['required', 'string', 'max:500'],
//         ]);
//     }

//     /**
//      * Create a new user instance after a valid registration.
//      *
//      * @param  array  $data
//      * @return \App\User
//      */
//     protected function create(array $data)
//     {
//         $company = Company::create([
//             'description' => $data['description'],
//             'company_name' => $data['company_name'],
//         ]);

//         $company = $company->fresh();

//         $role = Role::create([
//             'role_type' => 'Owner',
//             'company_id'=> $company->id
//         ]);

//         $role = $role->fresh();
        
//         return User::create([
//             'first_name' => $data['first_name'],
//             'last_name' => $data['last_name'],
//             'email' => $data['email'],
//             'password' => Hash::make($data['password']),
//             'company_id'=>$company->id,
//             'role_id'=> $role->id
//         ]);

//     }
// }

















// <?php

// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Providers\RouteServiceProvider;
// use App\User;
// use Illuminate\Foundation\Auth\RegistersUsers;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Validator;
// use App\Company;


// <?php

// namespace App\Http\Controllers\Auth;

// use App\Http\Controllers\Controller;
// use App\Providers\RouteServiceProvider;
// use App\User;
// use Illuminate\Foundation\Auth\RegistersUsers;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Validator;
// use App\Company;



// class RegisterController extends Controller
// {
//     /*
//     |--------------------------------------------------------------------------
//     | Register Controller
//     |--------------------------------------------------------------------------
//     |
//     | This controller handles the registration of new users as well as their
//     | validation and creation. By default this controller uses a trait to
//     | provide this functionality without requiring any additional code.
//     |
//     */

//     use RegistersUsers;

//     /**
//      * Where to redirect users after registration.
//      *
//      * @var string
//      */
//     protected $redirectTo = RouteServiceProvider::HOME;

//     /**
//      * Create a new controller instance.
//      *
//      * @return void
//      */
//     public function __construct()
//     {
//         $this->middleware('guest');
//     }

//     /**
//      * Get a validator for an incoming registration request.
//      *
//      * @param  array  $data
//      * @return \Illuminate\Contracts\Validation\Validator
//      */
//     protected function validator(array $data)
//     {
//         return Validator::make($data, [
//             'first_name' => ['required', 'string', 'max:255'],
//             'last_name' => ['required', 'string', 'max:255'],
//             'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
//             'password' => ['required', 'string', 'min:8', 'confirmed'],
//             'company_name'=>['required', 'string', 'unique:companies'],
//             'description' => ['required', 'string', 'max:500'],
//         ]);
//     }

//     /**
//      * Create a new user instance after a valid registration.
//      *
//      * @param  array  $data
//      * @return \App\User
//      */
//     protected function create(array $data)
//     {
//         $company = Company::create([
//             'description' => $data['description'],
//             'company_name' => $data['company_name'],
//         ]);

//         $company = $company->fresh();

//         $role = Role::create([
//             'role_type' => 'Owner',
//             'company_id'=> $company->id
//         ]);

//         $role = $role->fresh();
        
//         return User::create([
//             'first_name' => $data['first_name'],
//             'last_name' => $data['last_name'],
//             'email' => $data['email'],
//             'password' => Hash::make($data['password']),
//             'company_id'=>$company->id,
//             'role_id'=> $role->id
//         ]);

//     }
// }
