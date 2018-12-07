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

$api = app('Dingo\Api\Routing\Router');

$api->version('v1',['namespace' => 'App\Http\Controllers\Api\V1'],function ($api){
    $api->post('login', 'AuthController@login');
});


$api->version('system', ['namespace' => 'App\Http\Controllers\Api\Admin'], function ($api) {
    $api->post('admin.login', 'AuthController@login');
    $api->group(['middleware' => 'admin.api.auth'], function ($api) {
        $api->post('admin.user.list', 'AdminUserController@list');
    });
//    $api->group(['middleware' => 'refresh.token'], function ($api) {
//        $api->get('user', 'UsersController@index');
//        $api->get('refresh.token', 'AuthController@refreshToken');
//    });
});