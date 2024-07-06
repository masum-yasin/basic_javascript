<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class,'index'])->name('home');
Route::get('product/create',[ProductController::class, 'create'])->name('product.create');
Route::get('product/index',[ProductController::class, 'index'])->name('product.index');
Route::post('product/store',[ProductController::class, 'store'])->name('product.store');
Route::get('product/edit/{id}',[ProductController::class, 'edit'])->name('product.edit');
Route::post('product/update/{id}',[ProductController::class, 'update'])->name('product.update');
Route::get('product/delete/{id}',[ProductController::class, 'destroy'])->name('product.delete');
