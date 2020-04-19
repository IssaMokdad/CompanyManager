<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Team;
use Auth;
use Validator;
class TeamController extends Controller
{
    //kkkkkkkkk

    public function getTeams(Request $request){
        $teams = Team::where('department_id', $request->input('department_id'))->get();
        return response()->json($teams);
    }

    public function addTeam(Request $request){
        $data = $request->json()->all();
        $validator = Validator::make($data, [
            'team_name' => ['required', 'string', 'max:255'],
            'department_id'=>['integer', 'required']
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 419);
        }

       $team = Team::create([
            'team_name' => $data['team_name'],
            'company_id' => Auth::user()->company_id,
            'department_id'=>$data['department_id']
        ]);

        if ($team) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }
}
