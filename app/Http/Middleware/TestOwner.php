<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Department;
use App\Team;
class TestOwner
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $data = $request->json()->all();
        $exist = $request->input('department_id');
        if($exist){
            $department = Department::where('id',$request->input('department_id'))->first();
            // $team = Team::where('id',$data['id'])->get();
            // && $team->department_id===$data['department_id']
            if(Auth::user()->company_id!==$department->company_id){
                return response()->json('haha', 419);
            }}
            
        elseif(isset($data['department_id'])){
            $department = Department::where('id',$data['department_id'])->first();
            // $team = Team::where('id',$data['id'])->get();
            // && $team->department_id===$data['department_id']
            if(Auth::user()->company_id!==$department->company_id){
                return response()->json('haha', 419);
            }
        }
        return $next($request);
        }

        
    }

