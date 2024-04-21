<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = student::get();
        return view('student.index',compact('students'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('student.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' =>'required'
        ]);
        if($validated){
            $data = [
                'name' => $request->name,
                'Department'=> $request->department,
                'Class_Rool' => $request->roll,
                'phone' => $request->phone,
                'email' => $request->email,
            ];
            if(student::insert($data));
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $students = student::find($id);
        return view('student.edit',compact('students'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = student::find($id);
        $validated = $request->validate([
            'name' =>'required'
        ]);
        if($validated){
            $data = [
                'name' => $request->name,
                'Department'=> $request->department,
                'Class_Rool' => $request->roll,
                'phone' => $request->phone,
                'email' => $request->email,
            ];
           $student->update($data);
           return redirect()->back();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = student::find($id);
        if($student->delete());
        return redirect()->back();
    }
}
