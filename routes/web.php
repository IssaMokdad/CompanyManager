<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify'=>true]);
Route::get('/getuserdata', 'UsersController@getUserData')->name('getuserdata');
Route::get('/getusers', 'UsersController@getUsers')->name('getusers');
Route::post('/editusers', 'UsersController@editUsers')->name('editusers')->middleware('check');
Route::post('/addusers', 'UsersController@addUsers')->name('addusers')->middleware('check');
Route::post('/adddepartment', 'DepartmentController@addDepartment')->name('adddepartments')->middleware('check');
Route::post('/addteam', 'TeamController@addTeam')->name('addteams')->middleware('check');
Route::post('/deletedepartment', 'DepartmentController@deleteDepartment')->name('deletedepartments')->middleware('check');
Route::post('/editdepartment', 'DepartmentController@editDepartment')->name('editdepartments')->middleware('check');
Route::post('/editteam', 'TeamController@editTeam')->name('editteams')->middleware('check');
Route::get('/getteams', 'TeamController@getTeams')->name('getteams');
Route::get('/getroles', 'RoleController@getRoles')->name('getroles');
Route::post('/deleteuser', 'UsersController@delete')->name('deleteusers')->middleware('check');
Route::post('/deleteteam', 'TeamController@deleteTeam')->name('deleteteams')->middleware('check');
Route::get('/getdepartments', 'DepartmentController@getDepartments')->name('getdepartments');
Route::get('/dashboard', 'HomeController@indexOwner')->name('dashboard');
Route::get('/department', 'HomeController@indexDepartment')->name('department');
Route::get('/team', 'HomeController@indexTeam')->name('team');
Route::get('/employee', 'HomeController@indexEmployee')->name('employee');
