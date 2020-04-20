<?php

namespace App\Http\Controllers;
use App\Task;
use Auth;
use Validator;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    public function getTask(Request $request){
        $tasks = Task::where('user_id', $request->input('user_id'))
        ->where('team_id', Auth::user()->team_id)
        ->get();
        return response()->json($tasks);
    }


    public function addTask(Request $request){
        $data = $request->json()->all();
        $validator = Validator::make($data, [
            'task_title' => ['required', 'string', 'max:255'],
            'task_description' => ['required', 'string'],
            'user_id' => ['required', 'integer'],
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), 419);
        }
       $task = Task::create([
            'task_description' => $data['task_description'],
            'task_title' => $data['task_title'],
            'team_id' => Auth::user()->team_id,
            'user_id' => $data['user_id'],
        ]);

        if ($task) {
            return response()->json(['success' => 'success']);
        } else {
            return response()->json(['Something went wrong']);
        }
    }
}
