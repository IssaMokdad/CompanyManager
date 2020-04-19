<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Department;
use Auth;
use DB;
use Validator;
class DepartmentController extends Controller
{
    public function __construct()
    {
    $this->middleware('auth');
    $this->middleware('test')->except('addDepartment','getDepartments');
    }
    public function getDepartments(Request $request){
        $departments = Department::where('company_id', Auth::user()->company_id)->get();
        return response()->json($departments);
    }

    public function addDepartment(Request $request){
        $data = $request->json()->all();
        $validator = Validator::make($data, [
            'department_name' => ['required', 'string', 'max:255'],

        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 419);
        }

       $department = Department::create([
            'department_name' => $data['department_name'],
            'company_id' => Auth::user()->company_id,
        ]);

        if ($department) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }


    public function editDepartment(Request $request)
    {
        $data = $request->json()->all();

        $validator = Validator::make($data, [
            'department_name' => ['required', 'string', 'max:255'],
            'department_id'=>['required', 'integer' ],
        ]);
        if ($validator->fails()) {

            return response()->json($validator->messages(), 419);

        }

        $department = Department::where('id', $data['department_id'])->where('company_id', Auth::user()->company_id)
            ->update(['department_name' => $data['department_name']]);

        if ($department) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json('Something Went Wrong');
        }
    }

    public function deleteDepartment(Request $request)
    {
        $data = $request->json()->all();

        $validator = Validator::make($data, [
            'department_id' => ['required', 'integer'],
        ]);

        if ($validator->fails()) {

            return response()->json($validator->messages(), 419);

        }


        $department = Department::where('id', $data['department_id'])
        ->where('company_id', Auth::user()->company_id)
        ->delete();
        if ($department) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }
}
