<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/findUser', [UserController::class, 'findUser']);
Route::put('/editUser/{number}', [UserController::class, 'editUser']);
Route::put('/sendMoney',  [UserController::class, 'sendMoney']);
Route::post('/currentUserMoney', [UserController::class, 'currentUserMoney']);
Route::post('/findCurrentUserID', [UserController::class, 'findCurrentUserID']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/signup', [UserController::class, 'signup']);
Route::get('/token', [UserController::class, 'token']);