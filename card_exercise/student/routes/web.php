<?php

use App\Http\Controllers\StudentController;
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

Route::get('student/create',[StudentController::class, 'create'])->name('student.create');
Route::get('student/index',[StudentController::class, 'index'])->name('student.index');
Route::post('student/store',[StudentController::class, 'store'])->name('student.store');
Route::get('student/edit/{id}',[StudentController::class, 'edit'])->name('student.edit');
Route::post('student/update/{id}',[StudentController::class, 'update'])->name('student.update');
Route::get('student/delete/{id}',[StudentController::class, 'destroy'])->name('student.delete');
