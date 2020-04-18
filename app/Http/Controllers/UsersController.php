<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use DB;
use Auth;
use Validator;
class UsersController extends Controller
{
    public function __construct()
    {
    $this->middleware('auth');
    $this->middleware('check')->only(['getUsers']);
    }
    public function getUsers()
    {
        $users = DB::table('users')
            ->leftJoin('departments', 'users.department_id', '=', 'departments.id')
            ->leftJoin('teams', 'users.team_id', '=', 'teams.id')
            ->leftJoin('roles', 'users.role_id', '=', 'roles.id')
            ->select('department_name','users.department_id','role_type','role_id','teams.team_name', 'users.team_id','users.email', 'users.first_name', 'users.id', 'users.last_name')
            ->where('users.company_id', Auth::user()->company_id)
            ->paginate(6);
        return response()->json($users);
    }

    public function addUsers(Request $request){
        $data = $request->json()->all();
        $validator = Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'team_id'=>['required', 'integer' ],
            'department_id'=>['required', 'integer' ],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 419);
        }

       $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'company_id'=>Auth::user()->company_id,
            'team_id'=>$data['team_id'],
            'department_id'=>$data['department_id'],
            'role_id'=> $data['role_id']
        ]);

        if ($user) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }


    public function editUsers(Request $request)
    {
        $data = $request->json()->all();

        $validator = Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'team_id'=>['required', 'integer' ],
            'department_id'=>['required', 'integer'],
            'role_id'=>['required', 'integer' ],
            'id'=>['required', 'integer' ],
        ]);

        if ($validator->fails()) {

            return response()->json($validator->messages(), 419);

        }

        $user = User::where('id', $data['id'])->where('company_id', Auth::user()->company_id)
            ->update(['last_name' => $data['last_name'], 'first_name' => $data['first_name'],'department_id' => $data['department_id'],'role_id' => $data['role_id'], 'team_id' => $data['team_id']]);

        if ($user) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json('Something Went Wrong');
        }
    }


    public function delete(Request $request)
    {
        $data = $request->json()->all();

        $validator = Validator::make($data, [
            'id' => ['required', 'integer'],
        ]);

        if ($validator->fails()) {

            return response()->json($validator->messages(), 419);

        }


        $user = User::where('id', $data['id'])
        ->where('company_id', Auth::user()->company_id)
        ->delete();
        if ($user) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }


}
