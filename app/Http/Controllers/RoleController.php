<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Role;
class RoleController extends Controller
{
    public function getRoles(Request $request){
        $roles = Role::all();
        return response()->json($roles);
    }
}
