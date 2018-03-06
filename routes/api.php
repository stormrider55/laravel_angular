<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/testApi','userController@create_user');
Route::get('/getUsers','userController@get_users');
Route::post('/updateUser','userController@update_user');
Route::post('/deleteUser','userController@delete_user');
Route::get('/cron','userController@cron');
Route::post('/getUsersPagination','userController@getUsersPagination');
Route::get('/getUserDetails/{user_id}','userController@getUserDetails');
Route::get('/login','userController@login');
