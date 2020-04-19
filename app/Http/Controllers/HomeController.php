<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    $this->middleware('auth');
    
    $this->middleware('check')->only('indexOwner');
    $this->middleware('checkDM')->only('indexDepartment');
    $this->middleware('checkTM')->only('indexTeam');
    $this->middleware('checkE')->only('indexEmployee');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function indexOwner()
    {
        return view('dashboard');
    }

    public function indexDepartment()
    {
        return view('department');
    }

    public function indexTeam()
    {
        return view('team');
    }

    public function indexEmployee()
    {
        return view('employee');
    }
}
