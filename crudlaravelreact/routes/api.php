<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('auth/register',[App\Http\Controllers\Api\AuthController::class,'register']);
Route::post('auth/login',[App\Http\Controllers\Api\AuthController::class,'login']);
/*ruta de prueba àra validar el midleware  del  token */
Route::get('auth/me',[App\Http\Controllers\Api\AuthController::class,'me'])->middleware('auth:api');;
/**/

Route::post('/listarproductos', [App\Http\Controllers\ProductController::class,'index'])->name('listarproductos')->middleware('auth:api');

Route::post('/createproducts', [App\Http\Controllers\ProductController::class,'store'])->name('createproducts')->middleware('auth:api');
Route::get('/editproducts/{id}', [App\Http\Controllers\ProductController::class,'edit'])->name('editproducts')->middleware('auth:api');
Route::post('/updateproducts', [App\Http\Controllers\ProductController::class,'update'])->name('updateproducts')->middleware('auth:api');
Route::post('deleteproducts/{id}', [App\Http\Controllers\ProductController::class,'destroy'])->name('deleteproducts')->middleware('auth:api');